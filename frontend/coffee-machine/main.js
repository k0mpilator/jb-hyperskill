// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');
const action = "Write action (buy, fill, take, remaining, exit):\n";
const ingredients = {
    espresso: {
        water: 250,
        milk: 0,
        beans: 16,
        cost: 4,
        cup: 1
    },
    latte: {
        water: 350,
        milk: 75,
        beans: 20,
        cost: 7,
        cup: 1
    },
    cappuccino: {
        water: 200,
        milk: 100,
        beans: 12,
        cost: 6,
        cup: 1
    }
};

let supplies = {
    water: 400,
    milk: 540,
    beans: 120,
    sugar: 500,
    cups: 9,
    money: 550,
};

let menu = input(action);

while (menu !== "exit") {
    switch (menu) {
        case "remaining":
            displaySupplies();
            menu = input(action);
            break;
        case "buy":
            switch (input('What do you want to buy? ' +
                '1 - espresso, 2 - latte, 3 - cappuccino ' +
                'or enter "back":\n')) {
                case "1":
                    if (addSugar() === 0) {
                        console.log('Sorry, not enough sugar! ' +
                            'Try choosing a smaller quantity ' +
                            'or go back to the menu to restock');
                        break;
                    }
                    if(findMinimal(ingredients.espresso)[0] !== 0) {
                        buyingThings(ingredients.espresso);
                        console.log("I have enough resources, making you a coffee!");
                    } else {
                        console.log("Sorry, not enough " + Object.keys(supplies)
                            [findMinimal(ingredients.espresso)[1]] + "!");
                    }
                    menu = input(action);
                    break;
                case "2":
                    addSugar();
                    if(findMinimal(ingredients.latte)[0] !== 0) {
                        buyingThings(ingredients.latte);
                        console.log("I have enough resources, making you a coffee!");
                    } else {
                        console.log("Sorry, not enough " + Object.keys(supplies)
                            [findMinimal(ingredients.latte)[1]] + "!");
                    }
                    menu = input(action);
                    break;
                case "3":
                    addSugar();
                    if(findMinimal(ingredients.cappuccino)[0] !== 0) {
                        buyingThings(ingredients.cappuccino);
                        console.log("I have enough resources, making you a coffee!");
                    } else {
                        console.log("Sorry, not enough " + Object.keys(supplies)
                            [findMinimal(ingredients.cappuccino)[1]] + "!");
                    }
                    menu = input(action);
                    break;
                case "back":
                    menu = input(action);
                    break;
                default:
                    console.log("No such values!");
                    menu = input(action);
            }
            break;
        case "fill":
            toppingUp();
            menu = input(action);
            break;
        case "take":
            takingMoney();
            menu = input(action);
            break;
        default:
            console.log("No such values!");
            menu = input(action);
    }
}
//
function displaySupplies() {
    console.log(`The coffee machine has:\n` +
        `${supplies.water} ml of water\n` +
        `${supplies.milk} ml of milk\n` +
        `${supplies.beans} g of coffee beans\n` +
        `${supplies.sugar} g of sugar\n` +
        `${supplies.cups} disposable cups\n` +
        `$${supplies.money} of money\n`);
}

function buyingThings(name) {
    supplies.water -= name.water;
    supplies.milk -= name.milk;
    supplies.beans -= name.beans;
    supplies.cups -= name.cup;
    supplies.money += name.cost;
}

function toppingUp() {
    supplies.water += parseInt(input("Write how many ml of water you want to add:\n"));
    supplies.milk += parseInt(input("Write how many ml of milk you want to add:\n"));
    supplies.beans += parseInt(input("Write how many grams of coffee beans you want to add:\n"));
    supplies.sugar += parseInt(input("Write how many grams of sugar you want to add:\n"));
    supplies.cups += parseInt(input("Write how many disposable coffee cups you want to add:\n"));
}

function takingMoney() {
    supplies.money -= supplies.money;
}

function findMinimal(name) {
    let arr = [];
    arr.push(Math.floor(supplies.water / name.water));
    arr.push(Math.floor(supplies.milk / name.milk));
    arr.push(Math.floor(supplies.beans / name.beans));
    arr.push(Math.floor(supplies.cups / name.cup));
    let minIngredient = Math.min(...arr);
    let indexIngredient = arr.indexOf(minIngredient);
    return [minIngredient, indexIngredient];
}

function addSugar() {
    let message = 'What do you want to amount of sugar? Enter "*" max "****":\n';
    for(;;) {
        let sugar = input(message).split("");
        if (sugar.length > 4) {
            console.log("Too much sugar, maximum input **** !");
        } else if (supplies.sugar < sugar.length * 5) {
            return 0;
        } else {
            supplies.sugar -= sugar.length * 5;
            break;
        }
    }
}