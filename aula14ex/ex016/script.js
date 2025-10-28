function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resposta = document.getElementById('resposta')




if (inicio.value.length == 0|| fim.value.length == 0 || passo.value.length == 0) {
    alert('[ERRO] Faltam dados!') 
} else {

    let msg = ''

    msg += 'Contando: '

    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)

    for (let index = inicio; index < fim; index=index+passo) {
       msg += ' > ' + index + ' > '
    }
    
    resposta.innerHTML = msg
}
   


}