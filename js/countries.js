const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = data => {
    const allCountriesHTML = data.map(country => getCountriesHTML(country))
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' '); 
}

const getCountriesHTML = country => {
    return `
        <div>
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}" alt="country-flags">
        </div>
    `
}



loadCountries();