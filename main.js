console.log("hello");

var m = "Hey Mechu";
var t = new Date();
var T = t.getFullYear();
console.log(T);

alert(m);

greetings();



var strike1 =  " wants to be " + prompt('What is ur dream?');
document.getElementById('dream').innerHTML = strike1;

var birthYear     = prompt('which year were you born?');
document.getElementById('Year').innerHTML = "First cry was in " + birthYear;
document.getElementById('age').innerHTML  = " I survived for " + (T - birthYear) +" Years "
function greetings() {

    var name = prompt("What do i call you?");
    var result = "ichichi " + name ;
    document.getElementById('greet').innerHTML = result;
}


sumfunc(1,8);
function sumfunc(a,b){
    var sum  =  a + b ;
    console.log(sum);
}