function factorial(num) {
    if(!Number.isInteger(num)) return "Error";
    if(num <= 0) return 1;

    let result = num;
    if(num > 1){
        result *= factorial(num -1);
    };
    return result;

}

