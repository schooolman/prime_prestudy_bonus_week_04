var theNumber = 1;
 
var michelangelo = function(value){
    value = (value * 2);
    return value;
}
 
var donatello = function(value, anotherValue){
    value = anotherValue + value;
    anotherValue = value * anotherValue;
    return anotherValue;
}
 
var leonardo = function(value){
    var anotherValue = value;
    value *= 4;
    theNumber = value / 2;
    return (value + anotherValue);
}
 
var raphael = function(value, anotherValue, yetAnotherValue){
    value = value * anotherValue + yetAnotherValue;
    return yetAnotherValue;
}
 
//In your email, tell me what the answer to this expression would be:
michelangelo(theNumber) + leonardo(theNumber);
 
theNumber = theNumber * 2;
 
//In your email, tell me what the answer to this expression would be:
(donatello(theNumber, 2)) - (raphael(3, 2, theNumber));


var splinter = function(numA, numB){
    var z = (numA * numB);
    var pizza = [numA, numB, z];
    return pizza;
}

console.log(splinter(1, 2));