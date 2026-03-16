const calcularIMC = function(){

    const nomeUsuario       = document.getElementById('nome')
    const alturaUsuario     = document.getElementById('altura')
    const pesoUsuario       = document.getElementById('peso')
    const resultadoTextoImc = document.getElementById('resultado')

    let resultadoImc = Number( pesoUsuario.value / (alturaUsuario.value * alturaUsuario.value) ).toFixed(2)
    let statusImc

    removerClasses()

    if(resultadoImc < 18.5){
        statusImc = 'Abaixo do peso'

        resultadoTextoImc.textContent = `${nomeUsuario.value}. O seu IMC deu o resultado de: ${resultadoImc} Status do seu Peso é: ${statusImc}`
        resultadoTextoImc.classList.add('abaixo-peso')

    }else if(resultadoImc >= 18.5 && resultadoImc < 25){
         statusImc = 'Peso normal'
        
        resultadoTextoImc.textContent = `${nomeUsuario.value}. O seu IMC deu o resultado de: ${resultadoImc} Status do seu Peso é: ${statusImc}`
        resultadoTextoImc.classList.add('peso-normal')
       

    }else if(resultadoImc >= 25 && resultadoImc < 30){
        statusImc = 'Sobrepeso'

        resultadoTextoImc.textContent = `${nomeUsuario.valueo}. O seu IMC deu o resultado de: ${resultadoImc} Status do seu Peso é: ${statusImc}`
        resultadoTextoImc.classList.add('sobrepeso')

    }else if(resultadoImc >= 30 && resultadoImc < 35){
        statusImc = 'Obesidade grau I'

        resultadoTextoImc.textContent = `${nomeUsuario.value}. O seu IMC deu o resultado de: ${resultadoImc} Status do seu Peso é: ${statusImc}`
        resultadoTextoImc.classList.add('obesidade-grau-I')

    }else if(resultadoImc >= 35 && resultadoImc < 40){
        statusImc = 'Obesidade grau II'

        resultadoTextoImc.textContent = `${nomeUsuario.value}. O seu IMC deu o resultado de: ${resultadoImc} Status do seu Peso é: ${statusImc}`
        resultadoTextoImc.classList.add('obesidade-grau-II')

    }else{
        statusImc = 'Obesidade grau III"'

        resultadoTextoImc.textContent = `${nomeUsuario.value}. O seu IMC deu o resultado de: ${resultadoImc} Status do seu Peso é: ${statusImc}`
        resultadoTextoImc.classList.add('obesidade-grau-III')
    }
}

const removerClasses = function(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('abaixo-peso', 'peso-normal', 'sobrepeso', 'obesidade-grau-I', 'obesidade-grau-II', 'obesidade-grau-III')
}
