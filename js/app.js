const card = document.querySelector(".card");
const creatorSection = document.querySelector(".creator-section");
const shareSection = document.querySelector(".share-section");

const shareButtonOne = document.getElementById("btn-one");
const shareButtonTwo = document.getElementById("btn-two");

shareButtonOne.addEventListener("click", TogglePopup);
shareButtonTwo.addEventListener("click", TogglePopup);

function TogglePopup() {
    shareButtonOne.classList.toggle("active");
    card.classList.toggle("active");
    creatorSection.classList.toggle("active");
    shareSection.classList.toggle("active");
}
