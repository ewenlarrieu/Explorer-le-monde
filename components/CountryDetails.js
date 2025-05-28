export function showGeographicDetails(country) {
  const nom = country.name?.common;
  const capitale = country.capital;

  const continent = country.continents;

  const population = country.population;
  const monnaie = country.currencies?.EUR?.name;
  const superficie = country.area;
  const densite = superficie;
  const drapeau = country.flags.png;

  return `
    
    <ul>
      <li>Capitale : ${capitale}</li>
      <li>Continent ${continent}</li>
        <li>Monnaie  ${monnaie}</li> 
      
      <li>Population : ${population}</li>
      <li>Superficie : ${superficie} km²</li>
      <li>Densité : ${densite} </li>
      <li>Drapeau :
        <img src="${drapeau}" alt="Drapeau de ${nom}" style="width:80px; border:1px solid #ccc; border-radius:4px;">
      </li>
    </ul>
  `;
}
