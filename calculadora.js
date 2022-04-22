//Operações
function soma(a, b){
    return a+b;
};

function sub(a, b){
    return a-b;
};

function multi(a, b){
    return a*b;
};

function div(a, b){
    return a/b;
};

function listener(){
    //constantes e variáveis
    const num = document.querySelectorAll('.botao');
    const display = document.querySelector('.tela')
    let input;

    //escuta e preenchimento de variáveis;
    let a = num.forEach((btn) => {
        btn.addEventListener('click', () => 
        {
            //define comportamento dos botões especiais
            if(btn.id === 'clear')
            {
                input = undefined;
                display.textContent = '0';
            }

            else if(input !== undefined && btn.id === 'desfazer')
            {
                if(input.length == 1)
                {
                    input = undefined;
                    display.textContent = '0';
                }
                else
                {
                    input = input.slice(0, -1);
                    display.textContent = input;
                }

            }

            else if(input !== undefined && btn.dataset.type == 'operador')
            {
                console.log(input + btn.id);
                return input + btn.id;
            }

            //define comportamento dos números
            else
            {
                if(input == undefined && btn.dataset.type == 'numero')
                {
                    if(btn.id === 'zero')
                    {
                        input = "0";
                        display.textContent = input;
                    }
                    else 
                    {
                    input = btn.id;
                    display.textContent = input;
                    }
                }

                else if(input.length > 12)
                {
                    input = input;
                }

                else if(btn.dataset.type == 'numero'){
                    if(btn.id === 'zero')
                    {
                        input = input + "0";
                        display.textContent = input;
                    }
                    else 
                    {
                    input = input + btn.id;
                    display.textContent = input;
                    }
                }
            }
            console.log(input)
        });  
    });
};

//Calculo

function calculo(){
    let a = listener();
    console.log(a);
};

calculo();