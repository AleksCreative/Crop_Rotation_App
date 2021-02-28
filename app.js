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
    { name: 'Aubergine', rGroup: 2, imgUrl: 'img/Aubergine.png' },
    { name: 'Beetroot', rGroup: 1, imgUrl: 'img/Beetroot.png' },
    { name: 'Onion', rGroup: 1, imgUrl: 'img/Onions.png' },
    { name: 'Broad beans', rGroup: 3, imgUrl: 'img/Broad-beans.png' },
    { name: 'Calabrese', rGroup: 4, imgUrl: 'img/Broccoli.png' },
    { name: 'Brussels sprouts', rGroup: 4, imgUrl: 'img/Brussels-sprouts.png' },
    { name: 'Carrots', rGroup: 1, imgUrl: 'img/Carrots.png' },
    { name: 'Couragette', rGroup: 2, imgUrl: 'img/Couragette.png' },
    { name: 'Runner beans', rGroup: 3, imgUrl: 'img/Runner-beans.png' },
    { name: 'French beans', rGroup: 3, imgUrl: 'img/French-beans.png' },
    { name: 'Tomatoes', rGroup: 2, imgUrl: 'img/Tomatoes.png' },
    { name: 'Celeriac', rGroup: 1, imgUrl: 'img/Celeriac.png' },
    { name: 'Celery', rGroup: 1, imgUrl: 'img/Celery.png' },
    { name: 'Endive', rGroup: 1, imgUrl: 'img/Endive.png' },
    { name: 'Lettuce', rGroup: 1, imgUrl: 'img/Lettuce.png' },
    { name: 'Florence fennel', rGroup: 1, imgUrl: 'img/Florence-fennel.png' },
    { name: 'Garlic', rGroup: 1, imgUrl: 'img/Garlic.png' },
    { name: 'Leeks', rGroup: 1, imgUrl: 'img/Leek.png' },
    { name: 'Parsnips', rGroup: 1, imgUrl: 'img/Parsnips.png' },
    { name: 'Potatoes', rGroup: 1, imgUrl: 'img/Potatoes.png' },
    { name: 'Salsify', rGroup: 1, imgUrl: 'img/Salsify.png' },
    { name: 'Scorzonera', rGroup: 1, imgUrl: 'img/Scorzonera.png' },
    { name: 'Spinach', rGroup: 1, imgUrl: 'img/Spinach.png' },
    { name: 'Shallots', rGroup: 1, imgUrl: 'img/Shallots.png' },
    { name: 'Marrow', rGroup: 2, imgUrl: 'img/Marrow.png' },
    { name: 'Cucumbers', rGroup: 2, imgUrl: 'img/Cucumbers.png' },
    { name: 'Peppers', rGroup: 2, imgUrl: 'img/Peppers.png' },
    { name: 'Squash', rGroup: 2, imgUrl: 'img/Squash.png' },
    { name: 'Okra', rGroup: 2, imgUrl: 'img/Okra.png' },
    { name: 'Sweetcorn', rGroup: 2, imgUrl: 'img/Sweetcorn.png' },
    { name: 'Melon', rGroup: 2, imgUrl: 'img/Melon.png' },
    { name: 'Pumpkin', rGroup: 2, imgUrl: 'img/Pumpkin.png' },
    { name: 'Peas', rGroup: 3, imgUrl: 'img/Peas.png' },
    { name: 'Green manure', rGroup: 3, imgUrl: 'img/Green-manure.png' },
    { name: 'Sprouting Broccoli', rGroup: 4, imgUrl: 'img/Sprouting-broccoli.png' },
    { name: 'Romanesco', rGroup: 4, imgUrl: 'img/Calabrese.png' },
    { name: 'Cauliflower', rGroup: 4, imgUrl: 'img/Cauliflower.png' },
    { name: 'Kale', rGroup: 4, imgUrl: 'img/Kale.png' },
    { name: 'Cabagge', rGroup: 4, imgUrl: 'img/Cabbage.png' },
    { name: 'Chinese cabagge', rGroup: 4, imgUrl: 'img/Chinese-cabbage.png' },
    { name: 'Kohlrabi', rGroup: 4, imgUrl: 'img/Kohlrabi.png' },
    { name: 'Mustard', rGroup: 4, imgUrl: 'img/Mustard.png' },
    { name: 'Pak choi', rGroup: 4, imgUrl: 'img/Pak-choi.png' },
    { name: 'Raddishes', rGroup: 4, imgUrl: 'img/Raddishes.png' },
    { name: 'Rocket', rGroup: 4, imgUrl: 'img/Rocket.png' },
    { name: 'Swede', rGroup: 4, imgUrl: 'img/Swede.png' },
    { name: 'Turnips', rGroup: 4, imgUrl: 'img/Turnips.png' },
    { name: 'Cress', rGroup: 4, imgUrl: 'img/Cress.png' },
    { name: 'Spinach beet', rGroup: 4, imgUrl: 'img/Spinach-beet.png' },
    { name: 'Chard', rGroup: 4, imgUrl: 'img/Chard.png' }
];

// Sort vegetables alphabetically

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
        vegGarden.classList.add('hide-garden');
        const vegDiv = document.createElement('div');
        vegDiv.classList.add('veg-card', `rotation-${veg.rGroup}`);
        vegDiv.innerHTML = `<h4>${veg.name}</h4> <img class="veg-image" src="${veg.imgUrl}" alt="${veg.name}">`;
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
        e.target.parentElement.classList.toggle('animate-card');
        e.preventDefault();
    }
};


// Function: put veg in veggie beds depending on rotation group
function distributeVeg(rotNum) {
    vegGarden.classList.remove('hide-garden');
    const vegBed = document.querySelector(`#rotation-${rotNum}`);
    const selectedVegRot = document.getElementsByClassName(`selected-veg rotation-${rotNum}`);
    const selectedVegRotArray = Array.from(selectedVegRot); //turn HTML collection into array 
    selectedVegRotArray.forEach(function() {
        appendChildren(vegBed, selectedVegRotArray);
    });
};


// Function: init - Add veg on click
function addVegetables() {
    vegSubmit.addEventListener('click', function(e) {
        distributeVeg(1);
        distributeVeg(2);
        distributeVeg(3);
        distributeVeg(4);
        vegSubmitButton.innerHTML = 'Add more vegetables';
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
const vegBed4 = document.getElementById('rotation-4');

startAgain.addEventListener('click', function(e) {
    vegSubmitButton.innerHTML = 'Create my garden';
    clearElement(vegPool);
    clearElement(vegBed1);
    clearElement(vegBed2);
    clearElement(vegBed3);
    clearElement(vegBed4);
    populatePool();
    e.preventDefault();
});