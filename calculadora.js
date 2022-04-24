//Declara constantes
const btn = document.querySelectorAll('.botao');
const num = document.querySelectorAll('[data-type="numero"]');
const operador = document.querySelectorAll('[data-type="operador"]');
const clearAll = document.querySelector('#clear');
const desfazer = document.querySelector('#desfazer');
const display = document.querySelector('.tela');
const ponto = document.querySelector('#ponto');
//

//declara variáveis
let primeiroOp;
let segundoOp;
let calc;
let resultado;
//

//configura display inicial
display.textContent = '0';
//

//Listeners simples
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

ponto.addEventListener('click', () => {
    if(primeiroOp == undefined)
    {
        primeiroOp = "0.";
        display.textContent = primeiroOp;
    }
    else if(primeiroOp.includes('.')) 
    {
        return;
    }
    else if(primeiroOp != undefined)
    {
        primeiroOp = primeiroOp + '.';
        display.textContent = primeiroOp;
    }
});

window.addEventListener('keydown', (e) => teclado(e.key));
//

//Listeners de Nodes
num.forEach((numero) => {
    numero.addEventListener('click', () => gerarNum(numero.value));
});

operador.forEach((operacao) => {
    operacao.addEventListener('click', () => calculo(operacao.value));
});
//

//Funções
function gerarNum(input){
    if(primeiroOp == undefined)
    {
        primeiroOp = input;
        display.textContent = primeiroOp;
    }
    else if (primeiroOp.length > 12)
    {
        return;
    }
    else
    {
        primeiroOp += input;
        display.textContent = primeiroOp;
    }
};

function teclado(tecla){
    //numeros
    if(tecla >= 0 && tecla <= 9)
    {
        gerarNum(tecla);
    }
    //ponto
    else if(tecla == '.' || tecla ==',')
    {
        if(primeiroOp == undefined)
    {
        primeiroOp = "0.";
        display.textContent = primeiroOp;
    }
    else if(primeiroOp.includes('.')) 
    {
        return;
    }
    else if(primeiroOp != undefined)
    {
        primeiroOp = primeiroOp + '.';
        display.textContent = primeiroOp;
    }
    }
    //operadores
    else if(tecla == '/' || tecla == '+' || tecla == '-' || tecla == '*' || tecla == '=' || tecla == 'Enter')
    {
        calculo(tecla);
    }
    //backspace
    else if(tecla == 'Backspace')
    {
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
    }
    //limpar tudo
    else if(tecla == 'Delete')
    {
        primeiroOp = undefined;
        segundoOp = undefined;
        display.textContent = '0';
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
        calc = ope;
    }
    else if(primeiroOp != undefined && segundoOp != undefined && (ope == '=' || ope == 'enter'))
    {
        primeiroOp = parseInt(primeiroOp);
        segundoOp = parseInt(segundoOp);
        segundoOp = operar(calc, segundoOp, primeiroOp).toString();

        if(segundoOp.length > 12)
        {
            segundoOp = Math.round(segundoOp * 10000)/10000;
            display.textContent = segundoOp;
        }
        else
        {
            display.textContent = segundoOp;
        }
    }

    else if(primeiroOp != undefined && segundoOp != undefined && ope != '=')
    {
        primeiroOp = parseInt(primeiroOp);
        segundoOp = parseInt(segundoOp);
        segundoOp = operar(calc, segundoOp, primeiroOp).toString();

        if(segundoOp.length > 12)
        {
            segundoOp = Math.round(segundoOp * 10000)/10000;
            display.textContent = segundoOp;
        }
        else
        {
            display.textContent = segundoOp;
        }

        calc = ope;
    }
};

function operar(valor, a, b)
{
    if(valor == '+')
    {
        segundoOp = a + b;
        primeiroOp = undefined;
        return a + b;
    }

    else if(valor == '-')
    {
        segundoOp = a - b;
        primeiroOp = undefined;
        return a - b;
    }
    else if(valor == '/')
    {
        if(b == 0) 
        {
            segundoOp = undefined;
            primeiroOp = undefined;
            return display.textContent='ERROR';
        }
        else 
        {
        segundoOp = a / b;
        primeiroOp = undefined;
        return a / b;
        }
    }
    else if(valor == '*')
    {
        segundoOp = a * b;
        primeiroOp = undefined;
        return a * b
    }
};
//