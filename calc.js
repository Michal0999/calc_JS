function getNumber(num) {
    var number = document.getElementById('input');
    switch (num) {
        case 1:
            number.value += '1';
            break;
        case 2:
            number.value += '2';
            break;
        case 3:
            number.value += '3';
            break;
        case 4:
            number.value += '4';
            break;
        case 5:
            number.value += '5';
            break;
        case 6:
            number.value += '6';
            break;
        case 7:
            number.value += '7';
            break;
        case 8:
            number.value += '8';
            break;
        case 9:
            number.value += '9';
            break;
        case 0:
            number.value += '0';
            break;
    }
}

// czyszczenie ekranu

function clearScreen() {
    document.getElementById('input').value = "";
    document.getElementById('result').value = "";
}

// operacje
function getOperand(operand) {
    var oper = document.getElementById('input');
    switch (operand) {
        case '+':
            oper.value += '+';
            break;
        case '-':
            oper.value += '-';
            break;
        case 'x':
            oper.value += '*';
            break;
        case '/':
            oper.value += '/';
            break;
        case '+/-':
            oper.value += '-' + oper.value;
            break;
    }
}

// usuwanie znaku
function backspace() {
    var number = document.getElementById('input');
    var x = number.value;
    if (x.length > 0) {
        x = x.substring(0, x.length - 1);
        number.value = x;
    }
}

// nawiasy
i = 0;

function brackets() {
    var number = document.getElementById('input');
    if (i == 0) {
        number.value += '(';
        i = 1;
    } else if (i == 1) {
        number.value += ')';
        i = 0;
    }
}

// wyliczanie
function compute() {
    var number = document.getElementById('input');
    result = Math.floor(+eval(number.value));
    document.getElementById('result').value = '=' + result;
}