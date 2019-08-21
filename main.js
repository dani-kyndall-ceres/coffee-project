"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html +=  coffee.id;
    html += '<div>' + '<span class="coffeeName">' + coffee.name + '<span class="text-muted coffeeRoast">' + coffee.roast + '</span>' + '</div>';
    html += '</div>';

    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//logic should be similar to the below function on how to filter through coffees as typing in the input
//to add a new coffee
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var searchCoffee = document.getElementById('search-coffee').value;
    console.log(selectedRoast);
    if (selectedRoast === "all") {
        coffees.forEach(function (coffee) {
            if (coffee.name.toLowerCase().includes(searchCoffee.toLowerCase())) {

                filteredCoffees.push(coffee);
            }
        });
        // tbody.innerHTML = renderCoffees(filteredCoffees);
    } else {
        console.log('here 2');
        coffees.forEach(function (coffee) {

            if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchCoffee.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        });
    }
    console.log('end ');
    console.log(filteredCoffees);
    // var tbody = document.getElementById('coffees');
    tbody.innerHTML = renderCoffees(filteredCoffees);
    console.log(searchCoffee);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
coffees.reverse();
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit1');
var roastSelection = document.getElementById('roast-selection');
var searchCoffee = document.getElementById('search-coffee')

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
searchCoffee.addEventListener('input', updateCoffees);
