const showButton = document.getElementById("show-share-block-button");
const hideButton = document.getElementById("hide-share-block-button");

const personDiv = document.getElementById("person-info-container");
const shareDiv = document.getElementById("share-container");



showButton.addEventListener("click", () => {
    personDiv.classList.add("hidden");
    shareDiv.classList.remove("hidden");
})

hideButton.addEventListener("click", () => {
    personDiv.classList.remove("hidden");
    shareDiv.classList.add("hidden");
})