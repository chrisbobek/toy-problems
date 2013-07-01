#!/usr/bin/env node
var fs = require('fs');

var numbers = [];
var primes = [];
var primeNumbersString;

// Creates a list of integers from 2 to 600
function generateNumbers() {
  for(var i = 0; i < 599; i++) {
    numbers[i] = i + 2;
  }
  return numbers;
}

// Applies algorithm based on the Sieve of Eratosthenes
//   to mark non-prime integers in the numbers array
function sieve(integerArray, n){
  for (var i = 0; i < integerArray.length; i++) {
    var p = integerArray[i];
    if (p && (p * p < n)) {
      for (var j = integerArray.indexOf(p) + p; j <= integerArray.length; j += p) {
        integerArray[j] = null;
      }
    }
  }
  numbers = integerArray;
  return numbers;
}

// Inserts remaining integers from numbers array into primes array
function primeNumbers(integerArray) {
  for(var i = 0; i <= integerArray.length; i++){
    if(integerArray[i]){
      primes.push(integerArray[i]);
    }
  }
  if (primes.length > 100)
    primes.length = 100;
  return primes;
}

// Generates a comma-separated string of prime numbers
function stringify(primeNumbersArray) {
  primeNumbersString = primeNumbersArray.join(",");
  return primeNumbersString;
}

generateNumbers();
sieve(numbers, numbers.length);

var outfile = "primes.txt";
var out = stringify(primeNumbers(numbers));

fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "\nTo: " + outfile);
