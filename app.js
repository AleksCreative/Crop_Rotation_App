/* ---
HELPER FUNCTIONS:
--- */

//Function: Append Array items to Element

function appendChildren(parent, children) {
    children.forEach(function(child) {
        parent.appendChild(child);
    })
};

// Function: Clear inner Html from element
const clearElement = function(el) {
    el.innerHTML = '';
};

/* ---
VEGETABLE POOL
--- */

// Array of vegetable objects
const veggies = [
    { name: 'Carrots', rGroup: 1, imgUrl: 'img/carrots.png' },
    { name: 'Tomatoes', rGroup: 2, imgUrl: 'img/tomatos.png' },
    { name: 'Pumpkins', rGroup: 2, imgUrl: 'img/pumpkins.png' },
    { name: 'Chard', rGroup: 3, imgUrl: 'img/chard.png' },
    { name: 'Onions', rGroup: 1, imgUrl: 'img/onions.png' },
    { name: 'Peppers', rGroup: 2, imgUrl: 'img/peppers.png' },
    { name: 'Brussel Sprouts', rGroup: 3, imgUrl: 'img/brussels.png' }
];

veggies.sort((a, b) => {
    let na = a.name.toLowerCase();
    let nb = b.name.toLowerCase();

    if (na < nb) {
        return -1;
    }
    if (na > nb) {
        return 1;
    }
    return 0;
});


// Declare variables
const vegPool = document.getElementById('veg-pool');
const vegList = document.getElementsByClassName('veg-card');
const vegListArray = Array.from(vegList); //turn HTML collection into array
const vegSubmit = document.getElementById('veg-submit');
const vegGarden = document.getElementById('veg-garden');
const vegSubmitButton = document.getElementById('veg-submit-button');

// Display vegetable pool
const populatePool = function() {
    veggies.forEach(function(veg) {
        const vegDiv = document.createElement('div');
        vegDiv.classList.add('veg-card', `rotation-${veg.rGroup}`);
        vegDiv.innerHTML = `<h2>${veg.name}</h2> <img class="veg-image" src="${veg.imgUrl}" alt="${veg.name}">`;
        vegPool.appendChild(vegDiv);
        return vegDiv;
    });
};
populatePool();

// Select/deselect vegetables: toggle class .selected-veg;
vegPool.addEventListener('click', selectVeg);

function selectVeg(e) {
    if (e.target.classList.contains('veg-image')) {
        e.target.parentElement.classList.toggle('selected-veg');
        e.preventDefault();
    }
}

// Function: put veg in veggie beds depending on rotation group
function addVeg(rotNum) {
    const vegBed = document.querySelector(`#rotation-${rotNum}`);
    const selectedVegRot = document.getElementsByClassName(`selected-veg rotation-${rotNum}`);
    const selectedVegRotArray = Array.from(selectedVegRot); //turn HTML collection into array
    appendChildren(vegBed, selectedVegRotArray);
};


// Function: init - Add veg on click
function addVegetables() {
    vegSubmit.addEventListener('click', function(e) {
        addVeg(1);
        addVeg(2);
        addVeg(3);
        vegSubmitButton.innerHTML = 'Add more veg';
        e.preventDefault();
    });

};
addVegetables();

//Remove vegetables
vegGarden.addEventListener('click', (removeVeg));

function removeVeg(e) {
    if (e.target.classList.contains('veg-image')) {
        let vegItem = e.target.parentElement;
        vegPool.appendChild(vegItem);
        vegItem.classList.remove('selected-veg');
        e.preventDefault();
    }
}

// Function: start again
const startAgain = document.getElementById('start-again');
const vegBed1 = document.getElementById('rotation-1');
const vegBed2 = document.getElementById('rotation-2');
const vegBed3 = document.getElementById('rotation-3');

startAgain.addEventListener('click', function(e) {
    vegSubmitButton.innerHTML = 'Add vegetables to my garden';
    clearElement(vegPool);
    clearElement(vegBed1);
    clearElement(vegBed2);
    clearElement(vegBed3);
    populatePool();
    e.preventDefault();
});