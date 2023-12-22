let countsNumbers = Number(prompt("Введите размер массива:"));
let arrA = [];
let resultArr = [];

for (let lenArrA = 0, i = 0; lenArrA < countsNumbers; lenArrA++) {
    arrA.push(Math.round(Math.random() * 50));
}
for(let i = arrA.length; i !== -1; i--){
    resultArr.push(arrA[i]);    
}
alert("Начальный массив: " + arrA + "\n" + "Конечный массив: " + resultArr);

