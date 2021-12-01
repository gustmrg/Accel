

// get the values from the user input
// * starts or controller function
function getValues() {
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call generateNumbers
        let numbers = generateNumbers(startValue, endValue);    
        // call displayNumbers
        displayNumbers(numbers);
    } else {
        console.log("You must enter integers.");
    }

    

}

// generate numbers from startValue to the endValue
// * logic function
function generateNumbers(startValue, endValue) {
    let numbers = [];

    // get all the numbers from start to end
    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index);
    }

    return numbers;

}

// display even numbers in bold
// * display or view functions
function displayNumbers(numbers) {
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        let className = "even";
        
        if (number % 2 == 0) {
            className = "even";   
        } else {
            className = "odd";
        }
        
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}