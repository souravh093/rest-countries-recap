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


// option 2
const getCountriesHTML = ({name, flags}) => {
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <img src="${flags.png}" alt="country-flags">
        </div>
    `
}

// original default
// const getCountriesHTML = country => {
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}" alt="country-flags">
//         </div>
//     `
// }
// option 1
// const getCountriesHTML = country => {
//     // option one
//     const {name, flags} = country;
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}" alt="country-flags">
//         </div>
//     `
// }



loadCountries();