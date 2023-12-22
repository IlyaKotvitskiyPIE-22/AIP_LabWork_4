let countsNumbers = Number(prompt("Введите размер массива:"));
let arrA = [];
let oddNumbers = []; // Нечетные числа
let evenNumbers = []; // Четные числа

for (let lenArrA = 0, i = 0; lenArrA < countsNumbers; lenArrA++, i++) {
    arrA[i] = Math.round(Math.random() * 50);
}

for (let i = 0; i < arrA.length; i++) {
    if (i % 2 == 0) {
        evenNumbers.push(arrA[i]);
    }
    else {
        oddNumbers.push(arrA[i]);
    }
}

for (let i = 0; i < evenNumbers.length + 1; i++) {
    for (let j = 0; j < evenNumbers.length - 1 - i; j++) {
        if (j < j + 1) {
            [evenNumbers[j], evenNumbers[j + 1]] = [evenNumbers[j + 1], evenNumbers[j]];
        }
    }
}
alert("Изначальный массив: " + arrA + "\n" + "Конечный массив: " + oddNumbers + "," + evenNumbers);

