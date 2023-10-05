'use strict';

function sayHello(name) {
    return "Привет, " + name;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

// Место для третьей задачи
function getMathResult(num, repeat) {
    if (repeat <= 1 || typeof(repeat) != "number") return num;
    let result = "";
    for(let i = 1; i <= repeat; i++){
        result += num * i;
        if(i != repeat) result += "---";
    }
    return result;
}
console.log(getMathResult(5, 4));