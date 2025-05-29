export function showGeographicDetails(country) {
  const nom = country.name?.common || "N/A";
  const capitale = country.capital ? country.capital[0] : "N/A";
  const continent = country.continents ? country.continents[0] : "N/A";
  const langues = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";
  const monnaie = country.currencies
    ? Object.values(country.currencies)
        .map((c) => c.name + (c.symbol ? ` (${c.symbol})` : ""))
        .join(", ")
    : "N/A";
  const population = country.population || 0;
  const superficie = country.area || 0;
  const densite = superficie ? (population / superficie).toFixed(2) : "N/A";
  const drapeau = country.flags?.png || "";

  return `
    <ul>
     <h2>${country.name.common}</h2>
      <li>Capitale > ${capitale}</li>
      <li>Continent : ${continent}</li>
      <li>Langue(s) : ${langues}</li>
      <li>Monnaie : ${monnaie}</li>
      <li>Population : ${population.toLocaleString()}</li>
      <li>Superficie : ${superficie.toLocaleString()} km²</li>
      <li>Densité : ${densite} hab/km²</li>
      <li>Drapeau :<br>
        <img src="${drapeau}" alt="Drapeau de ${nom}" style="width:80px; border:1px solid #ccc; border-radius:4px;">
      </li>
    </ul>
  `;
}
