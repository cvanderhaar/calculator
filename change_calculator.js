var calculateChange = function(price, cash) {
    var returnValue = cash - price;
    var change = {}; //object

    const coinTypes = ["fifty", "twenty", "ten", "five", "twoRand", "oneRand",
                        "50cent", "20cent", "10cent" ];

    const coinValues = [2000, 1000, 500, 200, 100, 50, 20, 10];

    var amount;

    for (var i = 0; i < coinValues.length; i++) {
        amount = Math.floor(returnValue/coinValues[i]);
        if (amount > 0) {
            change[coinTypes[i]] = amount;
            returnValue = returnValue%coinValues[i];
        }
    }

    return change;
    
}

console.log(calculateChange(178704, 250000)); 
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));