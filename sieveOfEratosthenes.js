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
    if (p) {
      for (var j = numbers.indexOf(p) + p; j <= numbers.length; j += p) {
        numbers[j] = null;
      }
    }
  }
}
  for (var i = numbers.indexOf(3) + 3; i <= numbers.length; i += 3) {
    numbers[i] = null;
  }
  for (var i = numbers.indexOf(5) + 5; i <= numbers.length; i += 5) {
    numbers[i] = null;
  }
  for (var i = numbers.indexOf(7) + 7; i <= numbers.length; i += 7) {
    numbers[i] = null;
  }
  for (var i = numbers.indexOf(11) + 11; i <= numbers.length; i += 11) {
    numbers[i] = null;
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

