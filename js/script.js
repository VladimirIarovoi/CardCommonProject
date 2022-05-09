const cardNumber = document.querySelector('#card-number');
const cardNumberHolder = document.querySelector('.card_number');
const cardName = document.querySelector('#card-holder');

const cardNameHolder = document.querySelector('.card_name');
const cardNameHolderBlock = document.querySelector('.card_name-container');

const cardDate = document.querySelector('.card_date');
const cardMonth = document.querySelector('#select-month');
const cardMonthHolder = document.querySelector('.card_date-month');
const cardYear = document.querySelector('#select-year');
const cardYearHolder = document.querySelector('.card_date-year');

const cardCvv = document.querySelector('.card-cvv');
const cardCvvHolder = document.querySelector('.card_cvv-data');

const cardFirst = document.querySelector('.card');
const cardSecond = document.querySelector('.second');


cardNumber.addEventListener('input', (e) => {
    let val = e.target.value;
    if (val.length == 4 || val.length == 9 || val.length == 14 && val.length !== 0) {
        val = val.slice(0, val.length) + ' ';
    }
    cardNumberHolder.classList.add('active');
    cardNameHolderBlock.classList.remove('active');
    cardDate.classList.remove('active');
    cardNumberHolder.textContent = val;
    cardNumber.value = val;
});

cardName.addEventListener('input', (e) => {
    let val = e.target.value;
    cardNameHolder.textContent = val;
    cardNameHolderBlock.classList.add('active');
    cardNumberHolder.classList.remove('active');
    cardDate.classList.remove('active');
});

cardMonth.addEventListener('input', (e) => {
    let val = e.target.value;
    cardMonthHolder.textContent = val;
    cardDate.classList.add('active');
    cardNumberHolder.classList.remove('active');
    cardNameHolderBlock.classList.remove('active');
});

cardYear.addEventListener('input', (e) => {
    let val = e.target.value;
    val = val.slice(2, 4);
    cardYearHolder.textContent = val;
    cardDate.classList.add('active');
    cardNumberHolder.classList.remove('active');
    cardNameHolderBlock.classList.remove('active');
});

cardCvv.addEventListener('input', (e) => {
    let val = e.target.value;
    cardSecond.classList.add('active-2');
    cardFirst.classList.remove('active');
    switch (val.length) {
        case 1:
            val = '*'
            break;
        case 2:
            val = '**'
            break;
        case 3:
            val = '***'
            break;
    
        default:
            break;
    }
    cardCvvHolder.textContent = val;
});
document.addEventListener('click', (e) => {
    const outerBlock = e.composedPath().includes(cardCvv);
    if (!outerBlock) {
        cardSecond.classList.remove('active-2');
        cardFirst.classList.add('active');
    }
});


