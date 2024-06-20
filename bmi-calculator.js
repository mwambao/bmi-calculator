/*
Set values for height in inches and weight in pounds, then convert the values to
centimeters and kilos, outputting the results to the console:
• 1 inch is equal to 2.54 cm
• 2.2046 pounds is equal to 1 kilo

Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos)
divided by squared height (in meters). Output the results to the console.

*/

let myHeightInches = 63.4;
let myWeightPounds = 160.93

let myHeightCm = myHeightInches * 2.54; //convert to cm
let myWeightkilos = myWeightPounds /  2.2046; //convert to kilos

let myHeightM = myHeightCm / 100; //convert height to meters

console.log("Height is " + myHeightM + "cm, Weight is " + myWeightkilos + " kilos");

let bmi = myWeightkilos / (myHeightM**2)

console.log("BMI is: "+ bmi); // BMI is: 28.14888904632535