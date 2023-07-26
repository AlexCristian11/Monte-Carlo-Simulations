let time1 = 0, time2 = 0, time3 = 0, time4 = 0, time5 = 0, time6 = 0;

let numberOfSimulations = 1000;

let A1intervalA1 = 0.55;
let A1invervalA2 = 0.9;

let A2intervalA1 = 0.35;
let A2intervalA2 = 0.55;

let A3intervalA1 = 0.1;
let A3intervalA2 = 0.55;

for (let exp = 1; exp <= numberOfSimulations; exp++) {

console.log(`Simulation nr. ${exp}`);

let randomNumbers = [];

for (let i = 0; i < 6; i++) {
    randomNumbers[i] = Math.random();
}

console.log(randomNumbers);

let products = ["A3"];

let frequency = [];
let j = 0;
for (let i = 0; i < 6; i++) {
    switch (products[j]) {
        case "A1":
            if (randomNumbers[i] < A1intervalA1) {
                products.push("A1");
            } else if (randomNumbers[i] >= A1intervalA1 && randomNumbers[i] < A1invervalA2) {
                products.push("A2");
            } else {
                products.push("A3");
            }
            break;
        
        case "A2":
            if (randomNumbers[i] < A2intervalA1) {
                products.push("A1");
            } else if (randomNumbers[i] >= A2intervalA1 && randomNumbers[i] < A2intervalA2) {
                products.push("A2");
            } else {
                products.push("A3");
            }
            break;

        case "A3":
            if (randomNumbers[i] < A3intervalA1) {
                products.push("A1");
            } else if (randomNumbers[i] >= A3intervalA1 && randomNumbers[i] < A3intervalA2) {
                products.push("A2");
            } else {
                products.push("A3");
            }
            break;
    }
    j++;
    if (products[j] == "A3") {
        frequency.push(1);
    } else {
        frequency.push(0);
    }
}
console.log(frequency);
console.log(products);


for (let r = 0; r < 6; r++) {
    if (r === 0) {
        time1 += frequency[r];
    } else if (r === 1) {
        time2 += frequency[r];
    } else if (r === 2) {
        time3 += frequency[r];
    } else if (r === 3) {
        time4 += frequency[r];
    } else if (r === 4) {
        time5 += frequency[r];
    } else if (r === 5) {
        time6 += frequency[r];
    }
}

console.log(time1, time2, time3, time4, time5, time6);

}

console.log(`Probability time 1: ${time1 / numberOfSimulations}`);
console.log(`Probability time 2: ${time2 / numberOfSimulations}`);
console.log(`Probability time 3: ${time3 / numberOfSimulations}`);
console.log(`Probability time 4: ${time4 / numberOfSimulations}`);
console.log(`Probability time 5: ${time5 / numberOfSimulations}`);
console.log(`Probability time 6: ${time6 / numberOfSimulations}`);
