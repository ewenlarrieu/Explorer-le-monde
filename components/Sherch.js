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
      const container2 = document.querySelector(".class-2");

      container2.innerHTML = "";

      const Div = document.createElement("div");

      Div.innerHTML = `
      
          ${showGeographicDetails(country, {})}
       
      `;

      container2.appendChild(Div);
    })
    .catch((err) => {
      console.error(err);
    });
}

document.getElementById("search-icon").addEventListener("click", searchCountry);
