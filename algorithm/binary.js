const myList = [1, 3, 5, 7, 9];

function binaryList(list, item){
    let low = 0;
    let hing = list.length - 1;

    while (low <= hing){
        let mid = Math.ceil((low + hing) / 2);
        let guess = list[mid];

        if (guess == item) {
            return mid;
        } else if (guess > item) {
            hing = mid - 1;
        } else {
            low = mid + 1;
        };
    }
    return "None";
};


console.log(binaryList(myList, 3));
console.log(binaryList(myList, -1));
console.log(binaryList(myList, 7));