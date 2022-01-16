// Кодирование в функции giveMeFive, функция принимает 1 параметр: obj, это объект.Вам нужно пройти по obj, если длина
// ключа объекта равна 5, то запихнуть значение ключа в массив Дополнительно протолкните значение в массив, если длина
// значения равна 5. Верните пятерку после окончания работ.
// giveMeFive({Our:"earth",is:"a",beautyful:"world"}),["earth","world"];
// giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}),["Ihave","money","model"]);
// giveMeFive({Pears:"than",apple:"sweet"}),["Pears","apple","sweet"]

function giveMeFive(obj){
    const arr = [];
    for (const objKey in obj) {
        if(objKey.length === 5) arr.push(objKey);
        if(obj[objKey].length === 5) arr.push(obj[objKey]);
    }
    return arr;
}
