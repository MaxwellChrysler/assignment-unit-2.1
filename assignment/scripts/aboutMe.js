let firstname = 'maxwell';
let lastname = 'chrysler';
let fullname = firstname+ ' '+lastname+ " ";
console.log(fullname);
let luckyNumber = 5;
console.log('My name is '+ fullname+ 'and I think', luckyNumber+ ' is a winner.');

// 6 - Console log this sentence, adding in the variables you created above: 

let adventurous = true;

let food = 'BBQ ribs';
let pets = 6;
let friendsPets = 8;
// pets = pets+2 made this a comment to test question 16
let allowedPets = 5

console.log(pets);
if (adventurous) {
    console.log('adventures are great');
} 
else {
    console.log('how about we stay home')
}


if(luckyNumber===2 && adventurous===true){
    console.log('Roll the dice!')
}
else{
    console.log('Lets just not');
}
if(allowedPets>=pets){
    console.log('I can have more pets!')
}
if(allowedPets===pets){
    console.log('I have enough pets')
}
if(allowedPets<=pets){
    console.log('Oh no, I have too many pets!')
}
// 15 - Write a conditional that console logs "I can have more pets!" 
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.


let mostPets;

if(pets <=friendsPets){
     mostPets = friendsPets;
}
else if(pets>=friendsPets){
    mostPets = pets ;
}
else if(pets===friendsPets){
    mostPets = pets;
    console.log('we both have',mostPets,'pets');
}
else if (pets<=friendsPets){
     mostPets = friendsPets;
}
else if (pets && friendsPets ==0){
     mostPets = 0;
     console.log('we both do not have pets');
}
console.log(mostPets);

// 17 - Write a *switch* statement that logs:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, log "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!
switch(luckyNumber){
    case 1:
        console.log("first is the worst")
        break;
    case 2:
        console.log("second is the best")
        break;
    case 3:
        console.log("Third is the one with the polka dot dress")
        break;
    default:
        console.log("Luck is what happens when preparation meets oppurtunity")
        break;
}
// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!", 
// if it's not true, console log "How about we stay home?   

console.log(adventurous ? "adventures are great!" : "how about we stay home?");
//example from zoom chat
//let mostPets = pets > friendsPets ? pets : friendsPets;
//let leastPets = pets < friendsPets ? pets : friendsPets;
