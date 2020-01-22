numberArray = [0, 2, 20, 4, 13, -2, 9, 1];

bubbleSort(numberArray);

function bubbleSort(anArray) {
    for (let numCompare = 0; numCompare < anArray.length; numCompare++) {
        for (let i = 0; i < anArray.length - 1; i++) {
            if (anArray[i + 1] < anArray[i]) {
                [anArray[i], anArray[i + 1]] = [anArray[i + 1], anArray[i]]; 
                console.log(anArray);
            }
        }
    }
}

