'use strict';

var n = process.argv[2] || 0;

if (n){
    n = n * n / 2 + n/2
}
console.log(n);