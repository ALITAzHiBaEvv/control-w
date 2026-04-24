// ===ЗАДАЧА 2 ОЦЕНКИ===




function calculateGrade() {
    const test = Number(prompt("Баллы за тест (0-50):"));
    const homework = Number(prompt("Баллы за ДЗ (0-30):"));
    const attendance = Number(prompt("Баллы за посещаемость (0-20):"));
    if (isNaN(test) || isNaN(homework) || isNaN(attendance)) {
        return console.error("Ошибка: Введены не числа");
    }
    if (test < 0 || test > 50 || homework < 0 || homework > 30 || attendance < 0 || attendance > 20) {
        return console.error("Ошибка: Баллы вне диапазона");
    }
    const total = test + homework + attendance;
    let grade = "";
    if (total >= 90) {
        grade = "Отлично";
    } else if (total >= 75) {
        grade = "Хорошо";
    } else if (total >= 60) {
        grade = "Удовлетворительно";
    } else {
        grade = "Неудовлетворительно";
    }
    console.log("--- Задача 2 ---");
    console.log("Общий балл: " + total);
    console.log("Итоговая оценка: " + grade);
}
calculateGrade();
     


// === ЗАДАЧА 3. РАБОТА С МАССИВАМИ===





var numbers = [5, 12, 8, 130, 44, 2, 9];

function processNumbers(arr) {
    var sum = 0;
    var countGreaterThanTen = 0;
    var max = arr[0];
    var min = arr[0];

    console.log("--- Задача 3 ---");
    console.log("Числа больше 10:");
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        sum += num;
        if (num > 10) {
            console.log(num);
            countGreaterThanTen++;
        }
        if (num > max) max = num;
        if (num < min) min = num;
    }
    console.log("Сумма всех чисел: " + sum);
    console.log("Максимальное число: " + max);
    console.log("Минимальное число: " + min);
    console.log("Количество чисел больше 10: " + countGreaterThanTen);
}
processNumbers(numbers);