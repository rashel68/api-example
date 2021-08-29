const loadCountry = () => {
    fetch('https://restcountries.eu/rest/v2/')
        .then(res => res.json())
        .then(data => allCountry(data))
}
loadCountry();

const allCountry = (countries) => {
    const countryContainer = document.getElementById('country-container');
    for (const country of countries) {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <img width="50px" src= "${country.flag}">
            <h3>${country.name}</h3>
            <h4>City: ${country.capital}</h4>
            <span>Region: ${country.region}</span> <br>
            <span>Population: ${country.population}</span> <br>
            <button onclick="countryByName('${country.name}')">All Info</button>
            
        `;
        countryContainer.appendChild(div);
    }
}

const countryByName = (countryName) => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data[0]))
    // console.log(countryName);
}

const displayCountry = singleCountry => {
    console.log(singleCountry);
    const countryDetails = document.getElementById('country-details');
    countryDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('single-countryDisplay')
    div.innerHTML = `
    
        <h2>Country: ${singleCountry.name}</h2>
        <h3>City: ${singleCountry.capital}</h3>
        <span>Area: ${singleCountry.area}</span>
    `;
    countryDetails.appendChild(div);


}
