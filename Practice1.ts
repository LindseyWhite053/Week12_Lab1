// ===Interval Practice 1===
let printTime = function(){
    console.log(new Date());
}

setInterval (printTime, 5000);

// ===Interval Practice 2===
setInterval (
    () => {
        console.log(new Date())
    }, 5000
);

// ===Timeout Practice 1===
let sayHello = function(){
    console.log("Hello!");
};

setTimeout(sayHello, 3000);

// ===forEach Practice 1===
let names: string[] = ["Lindsey", "Brynn", "Jesse", "Al", "Jeff"];

let func1 = (name: string) => {
    console.log(`Hello ${name}`);
}

names.forEach(func1);

// ===forEach Practice 2===
let nums: number[] = [3,5,2,8,6,5];
let sum: number = 0;

let func2 = (num: number) => {
    sum += num;
};

nums.forEach(func2);
console.log(sum);


