import { showGeographicDetails } from "./CountryDetails.js";

export function searchCountry() {
  const input = document.getElementById("pays");
  const pays = input.value.trim();
  if (!pays) return;

  fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(pays)}`)
    .then((res) => {
      if (!res.ok) throw Error("Aucun pays trouvé");
      return res.json();
    })
    .then((data) => {
      const country = data[0];
      const container = document.querySelector(".class-2");
      const countryNameDiv = container.querySelector(".countryName");

      container.querySelectorAll(".country-details").forEach((e) => e.remove());
      countryNameDiv.innerHTML = "";
      countryNameDiv.innerHTML = `<h2>${country.name.common}</h2>`;

      const detailsDiv = document.createElement("div");
      detailsDiv.className = "country-details";
      detailsDiv.innerHTML = showGeographicDetails(country, {});

      container.appendChild(detailsDiv);
    })
    .catch((err) => {
      console.error(err);
    });
}

document.getElementById("search-icon").addEventListener("click", searchCountry);
