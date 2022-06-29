const burgerButton = document.querySelector(".burger__button");
const burgerPopup = document.querySelector(".burger__popup");
const burgerMenu = document.querySelector(".header__links").cloneNode(1);
const burgerCloseButton = document.querySelector(".burger__close-button");
const burgerLinks = document.querySelector(".burger__links");

function burgerButtonClick(evt) {
	evt.preventDefault();
	burgerPopup.classList.add("open");
}

function burgerCloseButtonClick(evt) {
	evt.preventDefault();
	burgerPopup.classList.remove("open");
}

function burgerLinksClick(evt) {
	burgerPopup.classList.remove("open");
}

burgerButton.addEventListener("click", burgerButtonClick);
burgerCloseButton.addEventListener("click", burgerCloseButtonClick);
burgerLinks.addEventListener("click", burgerLinksClick);
