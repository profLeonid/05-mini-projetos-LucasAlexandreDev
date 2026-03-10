'use strict'

const validarIntervaloNumericoNota = function(nota1, nota2, nota3){
    
    if(nota1 >= 0 && nota1 <= 10 || nota2 >= 0 && nota2 <= 10 || nota3 >= 0 && nota3 <= 10){
        return false
    }

    return true
}

const calcularMedia = function(){

    const notaAluno1 = document.getElementById('nota1')
    const notaAluno2 = document.getElementById('nota2')
    const notaAluno3 = document.getElementById('nota3')
    
    let resultadoMedia = (notaAluno1.value + notaAluno2.value + notaAluno3.value) / 3
    let statusAluno

    if(resultadoMedia >= 7){
        
    }

}   