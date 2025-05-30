export function favoriteButton(country) {
  const button = document.createElement("button");
  button.textContent = "Ajouter aux favoris";
  button.className = "favorite-btn";

  button.addEventListener("click", () => {
    const favoris = JSON.parse(localStorage.getItem("pays")) || [];
    const existe = favoris.some((p) => p.name.common === country.name.common);

    if (!existe) {
      favoris.push(country);
      localStorage.setItem("pays", JSON.stringify(favoris));
      afficherFavoris();

      button.textContent = "Ajouté !";
      button.disabled = true;
    }
  });

  return button;
}

function afficherFavoris() {
  const favorisList = document.getElementById("favoris-list");
  favorisList.innerHTML = "";

  const favoris = JSON.parse(localStorage.getItem("pays")) || [];
  favoris.forEach((country, index) => {
    const li = document.createElement("li");
    li.textContent = country.name.common + " ";

    // Création du bouton supprimer
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.className = "delete-fav-btn";
    deleteBtn.addEventListener("click", () => {
      supprimerFavori(index);
    });

    li.appendChild(deleteBtn);
    favorisList.appendChild(li);
  });
}

function supprimerFavori(index) {
  const favoris = JSON.parse(localStorage.getItem("pays")) || [];
  favoris.splice(index, 1);
  localStorage.setItem("pays", JSON.stringify(favoris));
  afficherFavoris();
}
