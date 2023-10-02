// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// const lengthArr = arr.length;

// for(let i = 0; i < lengthArr ; i++){
//     result[i] = arr[i];
// }

// console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const lengthData = data.length;

// for(let i = 0; i < lengthData ; i++){
//     if (typeof(data[i]) == "number"){
//         data[i] = data[i] * 2;
//     } else {
//         data[i] = data[i] + " - done";
//     }
// }

// console.log(data);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// const lengthData = data.length;

// for(let i = 0, j = lengthData; i < lengthData ; i++, j--){
//     result[i] = data[j-1];
// }

// console.log(result);

const lines = 6;
let result = '';

for(let i = 1; i <= lines; i++){
    for(let j = lines; j > i; j--){
        result += " ";
    }
    for(let k = 1; k < i*2; k++){
        result += "*";
    }
    result += "\n";
}
console.log(result);