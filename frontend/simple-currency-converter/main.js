const input = require('sync-input');

const welcomeMsg = "Welcome to Currency Converter!";
const optionMsg = `What do you want to do?
1-Convert currencies 2-Exit program`;
const selectCur = "What do you want to convert?";
const goodBuy = "Have a nice day!";
const errInput = "Unknown input";
const errCurrency = "Unknown currency";
const currencies = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
};

let fromCur;
let toCur;
let userSelect;

greetings();

do {
    console.log(optionMsg);
    let menuItem = Number(input());
    switch (menuItem) {
        case 1 :
            converter();
            userSelect = true;
            break;
        case 2 :
            console.log(goodBuy);
            userSelect = false;
            break;
        default:
            console.log(errInput);
            userSelect = true;
            break;
    }
} while(userSelect);

function greetings() {
    console.log(welcomeMsg);

    for (let key in currencies) {
        console.log(`1 USD equals  ${currencies[key]} ${key}`);
    }
}

function converter() {
    console.log(selectCur);
    fromCur = input("From: ").toUpperCase();

    if (currencies.hasOwnProperty(fromCur)) {
        toCur = input("To: ").toUpperCase();
        if (currencies.hasOwnProperty(toCur)) {
            exchange();
        } else {
            console.log(errCurrency);
        }
    } else {
        console.log(errCurrency);
    }
}

function exchange() {
    let amount = Number(input("Amount: "));
    if (amount >= 1) {
        let total = ((currencies["USD"] / currencies[fromCur]) / (currencies["USD"] / currencies[toCur]) * amount)
            .toFixed(4);
        console.log(`Result: ${amount} ${fromCur} equals ${total} ${toCur}`);
    } else if (isNaN(amount)) {
        console.log("The amount has to be a number");
    } else {
        console.log("The amount can not be less than 1");
    }
}