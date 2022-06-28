const sendEmailButton = document.querySelector(".contacts__button");

const popup = document.querySelector(".popup");
const popupName = popup.querySelector(".popup__input");
const popupEmail = popup.querySelector(".popup__input");
const popupCloseButton = popup.querySelector(".popup__close-button");

function sendEmailButtonClick() {
	popup.classList.remove("popup_hidden");
}

sendEmailButton.addEventListener("click", sendEmailButtonClick);
