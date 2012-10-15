/*jslint plusplus: true, browser: true, devel: true */
function insertSort(numbers) {
    "use strict";
    var x, i, j;
    for (i = 0; i < numbers.length; i++) {
        x = numbers[i];
        for (j = i - 1; j >= 0 && numbers[j] > x; j--) {
            numbers[j + 1] = numbers[j];
        }
        numbers[j + 1] = x;
    }
    return numbers;
}

function getNumb() {
    "use strict";
    var numbers = [];
    numbers[0] = parseFloat(prompt("Please enter your first favourite number", 777));
    numbers[1] = parseFloat(prompt("Please enter your first favourite number", 777));
    numbers[2] = parseFloat(prompt("Please enter your first favourite number", 777));
    numbers = insertSort(numbers);
    document.getElementById("result").innerHTML = numbers;
}