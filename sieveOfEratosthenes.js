#!/usr/bin/env node
var fs = require('fs');

var numbers = [];
var primes = [];
var primeNumbersString;

// Creates a list of integers from 2 to 100
function generateNumbers() {
  for(var i = 0; i < 99; i++) {
    numbers[i] = i + 2;
  }
  return numbers;
}

// Applies algorithm based on the Sieve of Eratosthenes
//   to mark non-prime integers in the numbers array
function sieve(intgerArray, n){
  for (var i = 0; i < intgerArray.length; i++) {
    var p = intgerArray[i];
    if (p && (p * p < n)) {
      for (var j = intgerArray.indexOf(p) + p; j <= intgerArray.length; j += p) {
        intgerArray[j] = null;
      }
    }
  }
  numbers = intgerArray;
  return numbers;
}

// Inserts remaining integers from numbers array into primes array
function primeNumbers(intgerArray) {
  for(var i = 0; i <= intgerArray.length; i++){
    if(intgerArray[i]){
      primes.push(intgerArray[i]);
    }
  }
  return primes;
}

// Generates a comma-separated string of prime numbers
function stringify(primeNumbersArray) {
  primeNumbersString = primeNumbersArray.join(", ");
  return primeNumbersString;
}

generateNumbers();
sieve(numbers, numbers.length);

var outfile = "primes.txt";
var out = stringify(primeNumbers(numbers));

fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "\nTo: " + outfile);
