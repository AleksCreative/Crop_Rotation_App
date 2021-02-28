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
    { name: 'Aubergine', rGroup: 2, imgUrl: 'img/aubergine.png' },
    { name: 'Beetroot', rGroup: 1, imgUrl: 'img/beetroot.png' },
    { name: 'Onion', rGroup: 1, imgUrl: 'img/onions.png' },
    { name: 'Broad beans', rGroup: 3, imgUrl: 'img/broad-beans.png' },
    { name: 'Calabrese', rGroup: 4, imgUrl: 'img/broccoli.png' },
    { name: 'Brussels sprouts', rGroup: 4, imgUrl: 'img/brussels-sprouts.png' },
    { name: 'Carrots', rGroup: 1, imgUrl: 'img/carrots.png' },
    { name: 'Couragette', rGroup: 2, imgUrl: 'img/couragette.png' },
    { name: 'Runner beans', rGroup: 3, imgUrl: 'img/runner-beans.png' },
    { name: 'French beans', rGroup: 3, imgUrl: 'img/french-beans.png' },
    { name: 'Tomatoes', rGroup: 2, imgUrl: 'img/tomatoes.png' },
    { name: 'Celeriac', rGroup: 1, imgUrl: 'img/celeriac.png' },
    { name: 'Celery', rGroup: 1, imgUrl: 'img/celery.png' },
    { name: 'Endive', rGroup: 1, imgUrl: 'img/endive.png' },
    { name: 'Lettuce', rGroup: 1, imgUrl: 'img/lettuce.png' },
    { name: 'Florence fennel', rGroup: 1, imgUrl: 'img/florence-fennel.png' },
    { name: 'Garlic', rGroup: 1, imgUrl: 'img/garlic.png' },
    { name: 'Leeks', rGroup: 1, imgUrl: 'img/leek.png' },
    { name: 'Parsnips', rGroup: 1, imgUrl: 'img/parsnips.png' },
    { name: 'Potatoes', rGroup: 1, imgUrl: 'img/potatoes.png' },
    { name: 'Salsify', rGroup: 1, imgUrl: 'img/salsify.png' },
    { name: 'Scorzonera', rGroup: 1, imgUrl: 'img/scorzonera.png' },
    { name: 'Spinach', rGroup: 1, imgUrl: 'img/spinach.png' },
    { name: 'Shallots', rGroup: 1, imgUrl: 'img/shallots.png' },
    { name: 'Marrow', rGroup: 2, imgUrl: 'img/marrow.png' },
    { name: 'Cucumbers', rGroup: 2, imgUrl: 'img/cucumbers.png' },
    { name: 'Peppers', rGroup: 2, imgUrl: 'img/peppers.png' },
    { name: 'Squash', rGroup: 2, imgUrl: 'img/squash.png' },
    { name: 'Okra', rGroup: 2, imgUrl: 'img/okra.png' },
    { name: 'Sweetcorn', rGroup: 2, imgUrl: 'img/sweetcorn.png' },
    { name: 'Melon', rGroup: 2, imgUrl: 'img/melon.png' },
    { name: 'Pumpkin', rGroup: 2, imgUrl: 'img/pumpkin.png' },
    { name: 'Peas', rGroup: 3, imgUrl: 'img/peas.png' },
    { name: 'Green manure', rGroup: 3, imgUrl: 'img/green-manure.png' },
    { name: 'Sprouting Broccoli', rGroup: 4, imgUrl: 'img/sprouting-broccoli.png' },
    { name: 'Romanesco', rGroup: 4, imgUrl: 'img/calabrese.png' },
    { name: 'Cauliflower', rGroup: 4, imgUrl: 'img/cauliflower.png' },
    { name: 'Kale', rGroup: 4, imgUrl: 'img/kale.png' },
    { name: 'Cabagge', rGroup: 4, imgUrl: 'img/cabbage.png' },
    { name: 'Chinese cabagge', rGroup: 4, imgUrl: 'img/chinese-cabbage.png' },
    { name: 'Kohlrabi', rGroup: 4, imgUrl: 'img/kohlrabi.png' },
    { name: 'Mustard', rGroup: 4, imgUrl: 'img/mustard.png' },
    { name: 'Pak choi', rGroup: 4, imgUrl: 'img/pak-choi.png' },
    { name: 'Raddishes', rGroup: 4, imgUrl: 'img/raddishes.png' },
    { name: 'Rocket', rGroup: 4, imgUrl: 'img/rocket.png' },
    { name: 'Swede', rGroup: 4, imgUrl: 'img/swede.png' },
    { name: 'Turnips', rGroup: 4, imgUrl: 'img/turnips.png' },
    { name: 'Cress', rGroup: 4, imgUrl: 'img/cress.png' },
    { name: 'Spinach beet', rGroup: 4, imgUrl: 'img/spinach-beet.png' },
    { name: 'Chard', rGroup: 4, imgUrl: 'img/chard.png' }
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