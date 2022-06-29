const popup = document.querySelector(".popup");
const formElement = document.querySelector(".popup__form");
const buttonPopup = document.querySelector(".contacts__button");

function openPopup(popup) {
	popup.classList.add("popup_opened");
}

function closePopup(popup) {
	popup.classList.remove("popup_opened");
}

function resetForms(popup) {
	popup.reset();
}

const doButtonInactive = popup => {
	const formButton = popup.querySelector(obj.submitButtonSelector);
	formButton.classList.add(obj.inactiveButtonClass);
	formButton.disabled = true;
};

const resetInputs = formElement => {
	const inputErrorList = Array.from(
		formElement.querySelectorAll(".popup__input-error")
	);
	const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
	inputList.forEach(input => {
		input.classList.remove(obj.inputErrorClass);
	});
	inputErrorList.forEach(inputError => {
		inputError.textContent = "";
		inputError.classList.remove(obj.errorClass);
	});
};

buttonPopup.addEventListener("click", () => {
	doButtonInactive(popup);
	resetInputs(formElement);
	resetForms(formElement);
	openPopup(popup);
});

const doButtonGreen = () => {
	buttonPopup.classList.add("contacts__button_submitted");
	buttonPopup.textContent = "Submitted";
	buttonPopup.disabled = true;
};

const handleTodoSubmit = e => {
	e.preventDefault();
	closePopup(popup);
	doButtonGreen();
	resetForms(formElement);
};

popup.addEventListener("mousedown", evt => {
	if (
		evt.target.classList.contains("popup") ||
		evt.target.classList.contains("popup__exit")
	) {
		closePopup(popup);
	}
});

formElement.addEventListener("submit", handleTodoSubmit);
