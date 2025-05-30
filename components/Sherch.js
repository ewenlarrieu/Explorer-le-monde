import { showGeographicDetails } from "./CountryDetails.js";
import { favoriteButton } from "./Favorite.js";

export function searchCountry() {
  const input = document.getElementById("pays");
  const pays = input.value.trim();
  if (!pays) return;

  const container2 = document.querySelector(".class-2");
  container2.innerHTML = "";

  fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(pays)}`)
    .then((res) => {
      if (!res.ok) throw Error("Aucun pays trouvé");
      return res.json();
    })
    .then((data) => {
      if (!data || !data.length) {
        container2.textContent = "Aucun pays trouvé";
        return;
      }
      const country = data[0];
      const detailsDiv = document.createElement("div");
      detailsDiv.innerHTML = showGeographicDetails(country, {});
      const button = favoriteButton(country);
      container2.appendChild(detailsDiv);
      container2.appendChild(button);
    })
    .catch((err) => {
      container2.textContent = "Aucun pays trouvé";
      console.error(err);
    });
}

document.getElementById("search-icon").addEventListener("click", searchCountry);
