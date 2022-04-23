//Declara constantes
const btn = document.querySelectorAll('.botao');
const num = document.querySelectorAll('[data-type="numero"]');
const operador = document.querySelectorAll('[data-type="operador"]');
const clearAll = document.querySelector('#clear');
const desfazer = document.querySelector('#desfazer');
const display = document.querySelector('.tela');

//declara variáveis
let primeiroOp;
let segundoOp;
let calc;
let resultado;

//configura display inicial
display.textContent = '0';

//
clearAll.addEventListener('click', () => {
    primeiroOp = undefined;
    segundoOp = undefined;
    display.textContent = '0';
});

desfazer.addEventListener('click', () => {
    if(primeiroOp.length > 1)
    {
        primeiroOp = primeiroOp.slice(0, -1);
        display.textContent = primeiroOp;
    }
    else
    {
        primeiroOp = undefined;
        display.textContent = '0';
    }
});

//
num.forEach((numero) => {
    numero.addEventListener('click', () => gerarNum(numero.value));
});

operador.forEach((operacao) => {
    operacao.addEventListener('click', () => calculo(operacao.value));
});

//
function gerarNum(input){
    if(primeiroOp == undefined)
    {
        primeiroOp = input;
        display.textContent = primeiroOp;
    }
    else if (primeiroOp.length > 12)
    {
        primeiroOp = primeiroOp;
    }
    else
    {
        primeiroOp += input;
        display.textContent = primeiroOp;
    }
};

function calculo(ope){
    if(primeiroOp == undefined)
    {
        return false
    }

    else if(primeiroOp != undefined && segundoOp == undefined)
    {
        segundoOp = primeiroOp;
        primeiroOp = undefined;
    }
    else if(primeiroOp != undefined && segundoOp !=undefined)
    {
        primeiroOp = parseInt(primeiroOp);
        segundoOp = parseInt(segundoOp);
        console.log(primeiroOp, segundoOp, ope);
        display.textContent = operar(ope, primeiroOp, segundoOp);
    }
};

function operar(valor, a, b)
{
    if(valor == '+')
    {
        primeiroOp = a + b;
        segundoOp = undefined;
        return a + b;
    }

    else if(valor == '-')
    {
        primeiroOp = a - b;
        segundoOp = undefined;
        return a - b;
    }
    else if(valor == '/')
    {
        primeiroOp = a / b;
        segundoOp = undefined;
        return a / b;
    }
    else if(valor == '*')
    {
        primeiroOp = a * b;
        segundoOp = undefined;
        return a * b
    }
};