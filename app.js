/*
JavaScript Fundamentals – Part 1
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter) */

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / (markHeight * markHeight);

let johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
}
console.log(markBMI, johnBMI);

console.log('First Challenge Done');

/*
The Complete JavaScript Course 7
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// average score calculator here 
function averageScoreCalculator (score1, score2, score3){
    return (score1 + score2 + score3) / 3;
}

// set score here 
let dolphinsScore1 = [96, 108, 91,];
let dolphinsScore2 = [97, 112, 101];
let dolphinsScore3 = [97, 112, 101];

// set score here 
let koalasScore1 = [88, 91, 110,];
let koalasScore2 = [109, 95, 123];
let koalasScore3 = [109, 95, 106];

// set average score here 
let dolphinsAverageScore1 = averageScoreCalculator(...dolphinsScore1); //pass dolphinsScore1 array as three parameters of averageScoreCalculator function
let dolphinsAverageScore2 = averageScoreCalculator(...dolphinsScore2); //pass dolphinsScore1 array as three parameters of averageScoreCalculator function
let dolphinsAverageScore3 = averageScoreCalculator(...dolphinsScore3); //pass dolphinsScore1 array as three parameters of averageScoreCalculator function

let koalasAverageScore1 = averageScoreCalculator(...koalasScore1); //pass koalasScore1 array as three parameters of averageScoreCalculator function
let koalasAverageScore2 = averageScoreCalculator(...koalasScore2); //pass koalasScore2 array as three parameters of averageScoreCalculator function
let koalasAverageScore3 = averageScoreCalculator(...koalasScore3); //pass koalasScore3 array as three parameters of averageScoreCalculator function

function checkWinner(dolphinsAverageScore, koalasAverageScore){
    if(dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore > 100){
        console.log('Dolphins win the trophy');
    }else if(koalasAverageScore > dolphinsAverageScore && koalasAverageScore > 100){
        console.log('Koalas win the trophy');
    }else if(dolphinsAverageScore == koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >- 100){
        console.log('It\'s a draw');
    }else{
        console.log('No team wins the trophy');
    }
}

// test winner for data 1
console.log('For data 1');
checkWinner(dolphinsAverageScore1, koalasAverageScore1);

// test winner for data 2
console.log('For data 2');
checkWinner(dolphinsAverageScore2, koalasAverageScore2);

// test winner for data 3
console.log('For data 3');
checkWinner(dolphinsAverageScore3, koalasAverageScore3);

console.log('Second Challenge Done');


/*
The Complete JavaScript Course 8
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/

let bills = [275, 40, 430];

bills.forEach(function(bill){
    let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20; // set tip to bill ;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`); //print bill
});

console.log('Third Challenge Done');
