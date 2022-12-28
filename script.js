
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('buttonMinMax').click();
  });

let min;
let max;
let minValue;
let maxValue;
let minValueDefault = 0;
let maxValueDefault = 100;
let minValueLimit = -999;
let maxValueLimit = 999;

  document.getElementById('buttonOk1').addEventListener('click', function() {
    document.getElementById('buttonMinMax').click();
    min = parseInt((document.getElementById('inputMin')).value);
    max = parseInt((document.getElementById('inputMax')).value);
    minValue = min;
    maxValue = max;
    document.getElementById('buttonModal').click();
    let text2 = document.getElementById('modalText');
    text2 = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
    document.getElementById('modalText').innerHTML = text2;
   console.log(minValue);
   console.log(maxValue);  
  })

console.log(minValue);
console.log(maxValue);

    document.getElementById('buttonOk1').addEventListener('click', function() { 
//валидация вводимых значений min и max по Nan и Limit
if (isNaN(minValue) || isNaN(maxValue)) {
    minValue = minValueDefault;
    maxValue = maxValueDefault;
}
((minValue < minValueLimit) ? minValue = minValueLimit : minValue = minValue);
((maxValue > maxValueLimit) ? maxValue = maxValueLimit : maxValue = maxValue);
//конец блока валидации
console.log(minValue);
console.log(maxValue);
})

let answerNumber;
let orderNumber;
let gameRun;
let orderNumberField;
let answerField;

document.getElementById('buttonOk1').addEventListener('click', function() {  
answerNumber = Math.floor((minValue + maxValue) / 2);
orderNumber = 1;
gameRun = true;

orderNumberField = document.getElementById('orderNumberField');
answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;

((textName().length <= 21) ? answerField.innerText = `\n\u{1F600} Вы загадали ${textName()}` : answerField.innerText = `\n\u{1F600} Вы загадали ${answerNumber}?`);
})

document.getElementById('btnRetry').addEventListener('click', function () {
    let text = document.getElementById('newgame');
    text = '<button>сыграем еще раз?&#128521</button>';
    document.getElementById('newgame').innerHTML = text;
    orderNumber = 1;
    answerField.innerText = ``;
    orderNumberField.innerText = orderNumber;
})

document.getElementById('newgame').addEventListener('click', function () {
    document.getElementById('newgame').innerHTML = '';
    minValue = 0;
    maxValue = 100;
    gameRun = true;
    document.getElementById('buttonMinMax').click();
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random() * 4);
            let answerPhrase;

            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1:
                    answerPhrase = `Так не честно!\n\u{1F633}`;
                    break;
                case 2:
                    answerPhrase = `Однако...!\n\u{1F62C}`;
                    break;
                case 3:
                    answerPhrase = `Я сдаюсь!\n\u{1F622}`;
                    break;
                case 4:
                    answerPhrase = `Старайтесь лучше!\n\u{1F618}`;
                    break;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            phraseRandom = Math.round(Math.random() * 4);
            console.log(answerNumber);
            
            ((textName().length <= 21) ? answerField.innerText = `${AnswerPh()} ${textName()}` : answerField.innerText = `${AnswerPh()} ${answerNumber}?`);
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (maxValue <= minValue) {
            const phraseRandom = Math.round(Math.random() * 4);
            let answerPhrase;
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1:
                    answerPhrase = `Так не честно!\n\u{1F633}`;
                    break;
                case 2:
                    answerPhrase = `Однако...!\n\u{1F62C}`;
                    break;
                case 3:
                    answerPhrase = `Я сдаюсь!\n\u{1F622}`;
                    break;
                case 4:
                    answerPhrase = `Старайтесь лучше!\n\u{1F618}`;
                    break;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            console.log(answerNumber);
            let answerPhrase2;
            phraseRandom = Math.round(Math.random() * 4);

            ((textName().length <= 21) ? answerField.innerText = `${AnswerPh()} ${textName()}` : answerField.innerText = `${AnswerPh()} ${answerNumber}?`);
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        phraseRandom = Math.round(Math.random() * 2);
        let winPhrase
        switch (phraseRandom) {
            case 0:
                winPhrase = `Я всегда угадываю\n\u{1F60E}`;
                break;
            case 1:
                winPhrase = `Ага! Угадал!\n\u{1F60D}`;
                break;
            case 2:
                winPhrase = `Это было просто!\n\u{1F607}`;
                break;
        }

        answerField.innerText = winPhrase;
        gameRun = false;

    }
})

//функия для перевода числа в текствую форму
function textName() {
    let znak;
    let div100;
    let div10;
    let div1;
    let div120;
    let answerPhraseDiv2;
    let answerPhraseDiv1;
    let answerPhraseDiv3;
    let answerPhraseDiv4;
    let textAnswer;

    if (answerNumber < 0) {
        znak = 'минус';
    } else {
        znak = '';
    }

    if (Math.abs(answerNumber) < 1000 && Math.abs(answerNumber) >= 120) {
        div100 = Math.abs(Math.trunc(answerNumber / 100));
        div10 = Math.abs(Math.trunc((Math.abs(answerNumber) - div100 * 100) / 10));
        div1 = Math.abs(Math.trunc(Math.abs(answerNumber) - div100 * 100 - div10 * 10));

        switch (div100) {

            case 1:
                answerPhraseDiv3 = `сто`;
                break;
            case 2:
                answerPhraseDiv3 = `двести`;
                break;
            case 3:
                answerPhraseDiv3 = `триста`;
                break;
            case 4:
                answerPhraseDiv3 = `четыреста`;
                break;
            case 5:
                answerPhraseDiv3 = `пятьсот`;
                break;
            case 6:
                answerPhraseDiv3 = `шестьсот`;
                break;
            case 7:
                answerPhraseDiv3 = `семьсот`;
                break;
            case 8:
                answerPhraseDiv3 = `восемьсот`;
                break;
            case 9:
                answerPhraseDiv3 = `девятьсот`;
                break;
            default:
                answerPhraseDiv3 = ``;
        }


        switch (div10) {
            case 1:
                answerPhraseDiv2 = `десять`;
                break;

            case 2:
                answerPhraseDiv2 = `двадцать`;
                break;
            case 3:
                answerPhraseDiv2 = `тридцать`;
                break;
            case 4:
                answerPhraseDiv2 = `сорок`;
                break;
            case 5:
                answerPhraseDiv2 = `пятьдесят`;
                break;
            case 6:
                answerPhraseDiv2 = `шестьдесят`;
                break;
            case 7:
                answerPhraseDiv2 = `семьдесят`;
                break;
            case 8:
                answerPhraseDiv2 = `восемьдесят`;
                break;
            case 9:
                answerPhraseDiv2 = `девяноста`;
                break;
            default:
                answerPhraseDiv2 = ``;
        }

        switch (div1) {


            case 1:
                answerPhraseDiv1 = `один`;
                break;
            case 2:
                answerPhraseDiv1 = `два`;
                break;
            case 3:
                answerPhraseDiv1 = `три`;
                break;
            case 4:
                answerPhraseDiv1 = `четыре`;
                break;
            case 5:
                answerPhraseDiv1 = `пять`;
                break;
            case 6:
                answerPhraseDiv1 = `шесть`;
                break;
            case 7:
                answerPhraseDiv1 = `семь`;
                break;
            case 8:
                answerPhraseDiv1 = `восемь`;
                break;
            case 9:
                answerPhraseDiv1 = `девять`;
                break;
            case 10:
                answerPhraseDiv1 = `десять`;
                break;
            case 11:
                answerPhraseDiv1 = `одиннадцать`;
                break;
            case 12:
                answerPhraseDiv1 = `двенадцать`;
                break;
            case 13:
                answerPhraseDiv1 = `тринадцать`;
                break;
            case 14:
                answerPhraseDiv1 = `четырнадцать`;
                break;
            case 15:
                answerPhraseDiv1 = `пятнадцать`;
                break;
            case 16:
                answerPhraseDiv1 = `шестнадцать`;
                break;
            case 17:
                answerPhraseDiv1 = `семнадцать`;
                break;
            case 18:
                answerPhraseDiv1 = `восемнадцать`;
                break;
            case 19:
                answerPhraseDiv1 = `девятнадцать`;
                break;
            default:
                answerPhraseDiv1 = ``;
        }
        textAnswer = `${znak} ${answerPhraseDiv3} ${answerPhraseDiv2} ${answerPhraseDiv1}?`;
    }

    if (Math.abs(answerNumber) <= 119 && Math.abs(answerNumber) >= 100) {

        div120 = Math.abs(answerNumber);

        switch (div120) {
            case 100:
                answerPhraseDiv4 = `сто`;
                break;
            case 101:
                answerPhraseDiv4 = `сто один`;
                break;

            case 102:
                answerPhraseDiv4 = `сто два`;
                break;
            case 103:
                answerPhraseDiv4 = `сто три`;
                break;
            case 104:
                answerPhraseDiv4 = `сто четыре`;
                break;
            case 105:
                answerPhraseDiv4 = `сто пять`;
                break;
            case 106:
                answerPhraseDiv4 = `сто шесть`;
                break;
            case 107:
                answerPhraseDiv4 = `сто семь`;
                break;
            case 108:
                answerPhraseDiv4 = `сто весемь`;
                break;
            case 109:
                answerPhraseDiv4 = `сто девять`;
                break;
            case 110:
                answerPhraseDiv4 = `сто десять`;
                break;
            case 111:
                answerPhraseDiv4 = `сто одиннадцать`;
                break;
            case 112:
                answerPhraseDiv4 = `сто двенадцать`;
                break;
            case 113:
                answerPhraseDiv4 = `сто тринадцать`;
                break;
            case 114:
                answerPhraseDiv4 = `сто четырнадцать`;
                break;
            case 115:
                answerPhraseDiv4 = `сто пятнадцать`;
                break;
            case 116:
                answerPhraseDiv4 = `сто шестнадцать`;
                break;
            case 117:
                answerPhraseDiv4 = `сто семнадцать`;
                break;
            case 118:
                answerPhraseDiv4 = `сто восемнадцать`;
                break;
            case 119:
                answerPhraseDiv4 = `сто девятнадцать`;
                break;

            default:
                answerPhraseDiv4 = ``;
        }
        textAnswer = `${znak} ${answerPhraseDiv4}?`;
    }

if (Math.abs(answerNumber) < 100 && Math.abs(answerNumber) >= 20) {
    div10 = Math.abs(Math.trunc(answerNumber / 10));
    div1 = Math.abs(answerNumber % 10);

    switch (div10) {
        case 2:
            answerPhraseDiv2 = `двадцать`;
            break;
        case 3:
            answerPhraseDiv2 = `тридцать`;
            break;
        case 4:
            answerPhraseDiv2 = `сорок`;
            break;
        case 5:
            answerPhraseDiv2 = `пятьдесят`;
            break;
        case 6:
            answerPhraseDiv2 = `шестьдесят`;
            break;
        case 7:
            answerPhraseDiv2 = `семьдесят`;
            break;
        case 8:
            answerPhraseDiv2 = `восемьдесят`;
            break;
        case 9:
            answerPhraseDiv2 = `девяноста`;
            break;
        default:
            answerPhraseDiv2 = ``;
    }

    switch (div1) {
        case 1:
            answerPhraseDiv1 = `один`;
            break;
        case 2:
            answerPhraseDiv1 = `два`;
            break;
        case 3:
            answerPhraseDiv1 = `три`;
            break;
        case 4:
            answerPhraseDiv1 = `четыре`;
            break;
        case 5:
            answerPhraseDiv1 = `пять`;
            break;
        case 6:
            answerPhraseDiv1 = `шесть`;
            break;
        case 7:
            answerPhraseDiv1 = `семь`;
            break;
        case 8:
            answerPhraseDiv1 = `восемь`;
            break;
        case 9:
            answerPhraseDiv1 = `девять`;
            break;
        case 10:
            answerPhraseDiv1 = `десять`;
            break;
        case 11:
            answerPhraseDiv1 = `одиннадцать`;
            break;
        case 12:
            answerPhraseDiv1 = `двенадцать`;
            break;
        case 13:
            answerPhraseDiv1 = `тринадцать`;
            break;
        case 14:
            answerPhraseDiv1 = `четырнадцать`;
            break;
        case 15:
            answerPhraseDiv1 = `пятнадцать`;
            break;
        case 16:
            answerPhraseDiv1 = `шестнадцать`;
            break;
        case 17:
            answerPhraseDiv1 = `семнадцать`;
            break;
        case 18:
            answerPhraseDiv1 = `восемнадцать`;
            break;
        case 19:
            answerPhraseDiv1 = `девятнадцать`;
            break;
        default:
            answerPhraseDiv1 = ``;
    }
    textAnswer = `${znak} ${answerPhraseDiv2} ${answerPhraseDiv1}?`;
}

if (Math.abs(answerNumber) < 20 && Math.abs(answerNumber) >= 0) {
    let div3 = Math.abs(answerNumber);
    switch (div3) {
        case 0:
            answerPhraseDiv1 = `0`;
            break;
        case 1:
            answerPhraseDiv1 = `один`;
            break;
        case 2:
            answerPhraseDiv1 = `два`;
            break;
        case 3:
            answerPhraseDiv1 = `три`;
            break;
        case 4:
            answerPhraseDiv1 = `четыре`;
            break;
        case 5:
            answerPhraseDiv1 = `пять`;
            break;
        case 6:
            answerPhraseDiv1 = `шесть`;
            break;
        case 7:
            answerPhraseDiv1 = `семь`;
            break;
        case 8:
            answerPhraseDiv1 = `восемь`;
            break;
        case 9:
            answerPhraseDiv1 = `девять`;
            break;
        case 10:
            answerPhraseDiv1 = `десять`;
            break;
        case 11:
            answerPhraseDiv1 = `одиннадцать`;
            break;
        case 12:
            answerPhraseDiv1 = `двенадцать`;
            break;
        case 13:
            answerPhraseDiv1 = `тринадцать`;
            break;
        case 14:
            answerPhraseDiv1 = `четырнадцать`;
            break;
        case 15:
            answerPhraseDiv1 = `пятнадцать`;
            break;
        case 16:
            answerPhraseDiv1 = `шестнадцать`;
            break;
        case 17:
            answerPhraseDiv1 = `семнадцать`;
            break;
        case 18:
            answerPhraseDiv1 = `восемнадцать`;
            break;
        case 19:
            answerPhraseDiv1 = `девятнадцать`;
            break;
        default:
            answerPhraseDiv1 = ``;
    }
    textAnswer = `${znak} ${answerPhraseDiv1}?`;
}
return (textAnswer);
    }
//   конец функции для перевода числа в текствую форму

//  функция текста выбора вопроса
function AnswerPh() {
    let answerPhrase2;
    switch (phraseRandom) {
        case 0:
            answerPhrase2 = `\n\u{1F60B} Попробую так... число`;
            break;
        case 1:
            answerPhrase2 = `\n\u{1F601} Легкотня! это число`;
            break;
        case 2:
            answerPhrase2 = `\n\u{1F61F} Наверное, это число`;
            break;
        case 3:
            answerPhrase2 = `\n\u{1F64B} Я знаю, это число`;
            break;
        case 4:
            answerPhrase2 = `\n\u{1F615} Может это число`;
            break;
    }
    return (answerPhrase2);
}
//  конец функции текста выбора вопроса

