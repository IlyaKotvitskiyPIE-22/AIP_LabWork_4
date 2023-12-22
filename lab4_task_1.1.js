let countsNumbers = Number(prompt("Введите размер массива:"));
let arrA = [];
let oddNumbers = []; // Нечетные числа
let evenNumbers = []; // Четные числа

for (let lenArrA = 0; lenArrA < countsNumbers; lenArrA++) {
    arrA[lenArrA] = Math.round(Math.random() * 50);
}

for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] % 2 === 0) {
        evenNumbers.push(arrA[i]);
    } else {
        oddNumbers.push(arrA[i]);
    }
}

oddNumbers.sort((a, b) => a + b); // Сортировка нечетных чисел по возрастанию
evenNumbers.sort((a, b) => b - a); // Сортировка четных чисел по убыванию

alert("Изначальный массив: " + arrA + "\n" + oddNumbers + "," + evenNumbers);
