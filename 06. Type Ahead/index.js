const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))//if we are not put 3 dot... before data arrays lenght is become 1 so it just put in one array 


function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        //here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch,'gi')//g = globally, i=we dont care capitals letter
        return place.city.match(regex) || place.state.match(regex)
    });
}

function numberWithCommas(e){
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')// this is put the comma for big numbers
}

function displayMatches(){
    //this.value === it give us the input
    const matchArray = findMatches(this.value,cities);
    // console.log(matchArray);

    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex,`<span class='hl'>${this.value}</span>`);
        const stateName = place.state.replace(regex,`<span class='hl'>${this.value}</span>`);

        return `
        <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('')
    suggestion.innerHTML = html
}

function turnBack(){
    suggestion.innerHTML = 
    `<ul class="suggestions">
        <li>Filter for a city</li>
        <li>or a state</li>
    </ul>`
}

const suggestion = document.querySelector('.suggestions')
document.querySelector('.search').addEventListener('keyup',displayMatches)
document.querySelector('html').addEventListener('click', function(e) {
    const x = e.target;
    if (x.querySelector('.search-form')) {
        turnBack();
    }
})
