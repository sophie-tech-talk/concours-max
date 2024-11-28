const likeButton = document.querySelector(".icon-button");

likeButton.addEventListener("click", () => {
  const icon = likeButton.querySelector("i");

  // Si l'icône est un cœur vide
  if (icon.classList.contains("fa-regular")) {
    icon.classList.replace("fa-regular", "fa-solid"); // Remplacer fa-regular par fa-solid
    icon.classList.add("red-heart"); // Ajouter la couleur rouge
  } else {
    icon.classList.replace("fa-solid", "fa-regular"); // Remplacer fa-solid par fa-regular
    icon.classList.remove("red-heart"); // Retirer la couleur rouge
  }
});
