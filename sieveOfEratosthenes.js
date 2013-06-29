#!/usr/bin/env node
var fs = require('fs');

var outfile = "primes.txt";
var out = ;

var numbers = [];
var primes = [];

// Create a list of integers from 2 to 100
function generateNumbers() {
  for(var i = 0; i < 99; i++) {
    numbers[i] = i + 2;
  }
  console.log(numbers);
  return numbers;
}

function sieve(n){
  for (var i = 0; i < numbers.length - 1; i++) {
    var p = numbers[i];
    if (p && (p * p < n)) {
      for (var j = numbers.indexOf(p) + p; j <= numbers.length; j += p) {
        numbers[j] = null;
      }
    }
  }
}

function primeNumbers(){
  numbers.shift();
  for(var i = 0; i <= numbers.length; i++){
    if(numbers[i]){
      primes.push(numbers[i]);
    }
  }
  return primes;
}
sieve();
primeNumbers();

