export function showGeographicDetails(country) {
  const nom = country.name.common;
  const capitale = country.capital;
  const continent = country.continents;
  // const langues = country.languages;
  console.log(country.languages);

  let langues = "";
  for (const key in country.languages) {
    console.log(key);

    langues = country.languages[key];
    break;
  }
  //const monnaie = country.currencies.name;
  let monnaie = "";
  for (const key in country.currencies) {
    monnaie = country.currencies[key].name;
  }

  console.log(country);

  const population = country.population;
  const superficie = country.area;
  const densite = (population / superficie).toFixed(2);
  const drapeau = country.flags?.png;

  return `
  <div class="country-details">
    <h2>${nom}</h2>
    <ul>
      <li>Capitale : ${capitale}</li>
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
  </div>
`;
}
