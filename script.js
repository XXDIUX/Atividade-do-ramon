document.getElementById("bt_tarefa").addEventListener('click', addTarefa)
function addTarefa(){
    //pegar o valor de dentro do Input
    const inputTarefa = document.getElementById("input_tarefa").value
    console.log(inputTarefa)
    // verificar o valor do input
    if (!inputTarefa) {
        alert('Tem nada garai')
        return
    }
    //Criar o elemento <li>
    const elemento_tarefa = document.createElement('li')
    elemento_tarefa.className = 'item_tarefa'
    //adicionar o texto do input no novo <li>
    const conteudoTarefa = document.createElement('p')
    conteudoTarefa.textContent = inputTarefa
    //adicionar um botao para deteletar a tarefa <li>
    const botaoDeletar = document.createElement('button')
    botaoDeletar.textContent = 'Deletar tarefa'
    botaoDeletar.addEventListener('click', () => {
        elemento_tarefa.remove()
    })

    //adicionar um botao para completar a tarefa <li>
    const botaoCompletar = document.createElement('button')
    botaoCompletar.textContent= 'Completar tarefa'
       conteudoTarefa.classList.toggle('completado')
       botaoCompletar.addEventListener('click', () => {
        conteudoTarefa.classList.toggle('completado')
    })

  
    //adicionar o novo elemento <li> e tag <ul>
    elemento_tarefa.appendChild(conteudoTarefa)
    elemento_tarefa.appendChild(botaoDeletar)
    elemento_tarefa.appendChild(botaoCompletar)
    document.getElementById('lista_tarefas').appendChild(elemento_tarefa)

}