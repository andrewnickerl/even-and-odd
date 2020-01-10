function evenAndOdd(inputArray) {
    var outputArray = [[], []]
    for(let i=0; i<inputArray.length; i++) {
        if(inputArray[i]%2===0) {
            outputArray[0].push(inputArray[i])
        }
        else {outputArray[1].push(inputArray[i])}
    }
    return outputArray;
}
