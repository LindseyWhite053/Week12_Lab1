// ===Interval Practice 1===
var printTime = function () {
    console.log(new Date());
};
setInterval(printTime, 5000);
// ===Interval Practice 2===
setInterval(function () {
    console.log(new Date());
}, 5000);
// ===Timeout Practice 1===
var sayHello = function () {
    console.log("Hello!");
};
setTimeout(sayHello, 3000);
// ===forEach Practice 1===
var names = ["Lindsey", "Brynn", "Jesse", "Al", "Jeff"];
var func1 = function (name) {
    console.log("Hello ".concat(name));
};
names.forEach(func1);
// ===forEach Practice 2===
var nums = [3, 5, 2, 8, 6, 5];
var sum = 0;
var func2 = function (num) {
    sum += num;
};
nums.forEach(func2);
console.log(sum);
