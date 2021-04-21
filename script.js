const button = document.querySelector('button')//BUTTON
const inputtt = document.querySelector('input')//INPUT
const radomNumber = Number((Math.random()*100).toFixed(0))//NUMERO ALEATORIO
console.log(radomNumber);

button.addEventListener('click',function() {//FUNÇÃO DE CLICK
    const paragrafo = document.querySelector('.aside')   //RESPOSTA
    const tentativas = 10 //TENTATIVAS
    const reStrong = document.querySelector('.resNumber')//RESPOSTA DOS VALORES DIGITADOS
    const input = document.querySelector('input')// INPUT DENTRO DO CLICK
    const resInput = input.value //PEGANDO O VALOR DO INPUT

    const novo = document.createElement('p')// CRIAÇÃO DA TAG PARAGRAFO
    novo.append(resInput) // INCLUIDO O VALOR DO INPUT DENTRO DA TAG P CRIADA ACIMA
    
    function limite(){ // FUNÇÃO DE TENTATIVAS
        if((reStrong.children.length + 1) === tentativas ){
            reStrong.classList.add('acabou')
            reStrong.innerText = 'ACABOU!!!!!!'
            reStrong.style.backgroundColor = 'red'
            input.setAttribute('disabled',  true)
            paragrafo.classList.add('deleta')
        }
    }
    limite()

    if(+resInput == '' ){ // SE FOR INPUT.VALUE VAZIO ENTRA NESSA CONDIÇÃO
        resInput.value = ''
        paragrafo.innerHTML = 'Por favor! Digite um número'
        input.focus()
    }
    else if( +resInput > radomNumber ) { // PALPITE ACIMA DO VALOR ALEATORIO CRIADO 
        input.value = ''
        paragrafo.innerHTML = 'Seu palpite está muito alto!'
        paragrafo.style.backgroundColor = 'red'
        input.focus()
    }
    else if(+resInput < radomNumber ){ // PALPITE ABAIXO DO VALOR ALEATORIO CRIADO
        input.value = ''
        paragrafo.innerHTML = 'Seu palpite está muito baixo!'
        paragrafo.style.backgroundColor = 'blue'
        input.focus()
    }
    else if(+resInput === radomNumber){ // PALPITE IGUAL O VALOR ALEATORIO CRIADO
        input.value = ''
        paragrafo.innerHTML = 'Acertou!!!'
        paragrafo.style.backgroundColor = 'green'
        paragrafo.style.color = 'white'
        input.setAttribute('disabled',  true)
        button.setAttribute('disabled', true)
    }
        return reStrong.append(novo) //MOSTRAR OS NÚMEROS DIGITADOS NA TELA
    
})



