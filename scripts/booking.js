/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?


/********* Create variables *********/


const costPerFullDay = 35;
const costPerHalfDay = 20;

let currentRate = costPerFullDay;

let daysSelected = [];

let dayElements;
let costElement;

document.addEventListener('DOMContentLoaded', () => {

    dayElements = {
        monday: document.getElementById('monday'),
        tuesday: document.getElementById('tuesday'),
        wednesday: document.getElementById('wednesday'),
        thursday: document.getElementById('thursday'),
        friday: document.getElementById('friday')
    };
    costElement = document.getElementById('calculated-cost');

    Object.keys(dayElements).forEach(dayId => {
        dayElements[dayId].addEventListener('click', () => toggleDay(dayId));
    });

    document.getElementById('clear-button').addEventListener('click', clearDays);

    document.getElementById('half').addEventListener('click', setHalfDayRate);
    document.getElementById('full').addEventListener('click', setFullDayRate);

    calculateTotalCost();
});


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


function toggleDay(dayId) {
    const dayElement = dayElements[dayId];

    if (!dayElement.classList.contains('clicked')) {
        dayElement.classList.add('clicked');
        daysSelected.push(dayId);
    } else {
        dayElement.classList.remove('clicked');
        daysSelected = daysSelected.filter(day => day !== dayId);
    }

    calculateTotalCost(); 
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


function clearDays() {
    Object.values(dayElements).forEach(element => element.classList.remove('clicked'));
    daysSelected = [];
    calculateTotalCost();
}



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


function setHalfDayRate() {
    currentRate = costPerHalfDay;
    document.getElementById('half').classList.add('clicked');
    document.getElementById('full').classList.remove('clicked');
    calculateTotalCost();
}

function setFullDayRate() {
    currentRate = costPerFullDay;
    document.getElementById('full').classList.add('clicked');
    document.getElementById('half').classList.remove('clicked');
    calculateTotalCost();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
    const totalCost = daysSelected.length * currentRate;
    costElement.innerHTML = `${totalCost}`;
}
