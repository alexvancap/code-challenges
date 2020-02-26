// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
function findOutlier(integers){
    var length = integers.length, i;
    var evens = [];
    var odds = [];
    var k
    for (i=0; i<length; i++) {
        if (integers[i] % 2 == 0) {
        evens.push(integers[i]);
        }
        if (Math.abs(integers[i] % 2) == 1) {
        odds.push(integers[i]);
        }
    }
    if (evens.length > odds.length)
    return odds[0];
    else
    return evens[0];
  }