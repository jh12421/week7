/*1.
numbers array*/
let ages =[3,9,23,64,2,8,28,93];
let subtract = ages[0] - ages[ages.length - 1];
console.log(subtract);
//adding new age to the end of the array
let newAge = 37;
ages.push(newAge);
console.log(ages);
//running the subtract variable on the added age
subtract = ages[0] - ages[ages.length - 1];
console.log(subtract);
//creating a loop
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let averageAge = sum / ages.length;
console.log(averageAge);

/*2.
names array
finding the average number of letters in
A.*/
let names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];
let letters = 0;
for (let i = 0; i < names.length; i++){
  letters += names[i];
}
let averageLetters = sum / names.length;
console.log(averageLetters);
/*loop concatenating the names together
B.*/
let concateNames = "";
for (let i = 0; i < names.length; i++){
  concateNames += names[i];
  //space between names
  concateNames += " ";
}
console.log(concateNames);

/*3. you access the last element in an array
by using the .length - 1 method.*/

/*4. you access the first element in an array
by using this, variable[0];,*/

//5.
let nameLengths = [];
//loop through each name 
for (let i = 0; i < names.length; i++){
  let name = names[i];
  let countLetters = 0;

//loop through each letter
for (let j = 0; j < name.length; j++) {
  if (name[j] !== ' ') {//will not count spaces
    countLetters++;
  }
}
nameLengths.push(countLetters);
}
console.log(nameLengths);

//6.
//calculating the sum of the letters 
let letterSum = 0;
for ( let i = 0;i < nameLengths.length; i++){
  letterSum += nameLengths[i];
}
console.log(letterSum);

//7.
// this function repeats the word
function concatenateWord (word, n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += word;
  }
  return result;
}
let word = 'Hello';
let n = 3;
console.log(concatenateWord(word, n));

//8.
//this function returns first and last name
function fullName(firstName, lastName) {
  //this statement puts a space between the name
  return firstName + ' ' + lastName;
}
let firstName = 'Jake';
let lastName = 'Harris';
console.log(fullName(firstName, lastName));

//9.
function greaterThanHundred(numbers) {
  let sum1 = 0;
  //this loop will iterate through the array and get the sum
for (let i = 0; i < numbers.length; i++) {
  sum1 += numbers[i];
}
// see if sum is more than 100
return sum1 > 100;
}
let numbers = [10, 20, 50, 50];
let numbers1 = [10, 20, 10];
console.log(greaterThanHundred(numbers));//true
console.log(greaterThanHundred(numbers1));//false

//10.
function returnAverage(numbers) {
  let sum2 = 0;
  //iterate through array
  for (let i = 0; i < numbers.length; i++){
    sum2 += numbers[i];
  }
  //figure the average
  let average = sum2 / numbers.length;
  return average;
}
let numbers3 = [21, 32, 51, 61, 84];//array
console.log(returnAverage(numbers));
