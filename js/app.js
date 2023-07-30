const card = document.querySelector(".card");
const creatorSection = document.querySelector(".creator-section");
const shareSection = document.querySelector(".share-section");
const shareButton = document.querySelector(".share-button");
const closeButton = document.getElementById("close-button");

shareButton.addEventListener("click", () => {
    card.classList.toggle("active");
    creatorSection.classList.toggle("active");
    shareSection.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
    card.classList.toggle("active");
    creatorSection.classList.toggle("active");
    shareSection.classList.toggle("active");
});
