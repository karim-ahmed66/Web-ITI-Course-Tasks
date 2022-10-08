const sum = document.querySelector('.sum');
const sup = document.querySelector('.sup');
const mul = document.querySelector('.mul');
const div = document.querySelector('.divi');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const numbers = document.querySelectorAll('.number');
const result = document.querySelector('.result');
const screen = document.querySelector('input[type=number]');

let num1 = null;
let op = null;
let num2 = null;

numbers.forEach(function (button) {
    button.addEventListener('click', function(){
        screen.value += parseFloat(button.innerHTML);
    })
});

clear.addEventListener('click', function(){
    screen.value = '';
    num1 = null;
    op = null;
    result.innerHTML = '';
});

sum.addEventListener('click', function(){
    op = '+'
    if(num1 === null){
        num1 = parseFloat(screen.value);
        screen.value = '';
        result.innerHTML = num1;
    }
    else{
        num2 = parseFloat(screen.value);
        num1 += num2;
        screen.value = '';
        result.innerHTML = num1;
    }
});

sup.addEventListener('click', function(){
    op = '-'
    if(num1 === null){
        num1 = parseFloat(screen.value);
        screen.value = '';
        result.innerHTML = num1;
    }
    else{
        num2 = parseFloat(screen.value);
        num1 -= num2;
        screen.value = '';
        result.innerHTML = num1;
    }
});

mul.addEventListener('click', function(){
    op = '*'
    if(num1 === null){
        num1 = parseFloat(screen.value);
        screen.value = '';
        result.innerHTML = num1;
    }
    else{
        num2 = parseFloat(screen.value);
        num1 *= num2;
        screen.value = '';
        result.innerHTML = num1;
    }
});

div.addEventListener('click', function(){
    op = '/'
    if(num1 === null){
        num1 = parseFloat(screen.value);
        screen.value = '';
        result.innerHTML = num1;
    }
    else{
        num2 = parseFloat(screen.value);
        num1 /= num2;
        screen.value = '';
        result.innerHTML = num1;
    }
});

equal.addEventListener('click', function(){
    num2 = parseFloat(screen.value);
    if(op == '+'){
        num1 += num2;
    }
    else if(op == '-'){
        num1 -= num2;
    }
    else if(op == '*'){
        num1 *= num2;
    }
    else if(op == '/'){
        num1 /= num2;
    }
    else result.innerHTML = 'Not Valid';
    
    screen.value = num1;
    result.innerHTML = '';
    num1 = null
})