let textoBotao = document.getElementById('criar-tarefa')
textoBotao.innerText = 'Criar tarefa'

let textoClear = document.getElementById('apaga-tudo')
textoClear.innerText = 'Limpar'

let textoRemove = document.getElementById('remover-finalizados')
textoRemove.innerText = 'Limpar completos'

textoClear.addEventListener('click', function(){
    let container = document.getElementById('lista-tarefas')
    let intensLista = document.querySelectorAll('.item')
    for (let i2 = 0; i2 < intensLista.length; i2 += 1) {
        container.removeChild(intensLista[i2])
    }
})

textoRemove.addEventListener('click', function(){
    let container = document.getElementById('lista-tarefas')
    let intensCompletos = document.querySelectorAll('.completed')
    for (let i3 = 0; i3 < intensCompletos.length; i3 += 1) {
        container.removeChild(intensCompletos[i3])
    }
})

let lista = document.getElementById('lista-tarefas')
function createItem(par1) {
    let item = document.createElement('li')
    item.innerText = par1
    item.classList.add('item')
    lista.appendChild(item)
}

let button = document.getElementById('criar-tarefa')
button.addEventListener('click', function () {
    let text = document.getElementById('texto-tarefa').value
    createItem(text)
})


lista.addEventListener('click', function (event) {
    let intensLista = document.querySelectorAll('.item')
    let itemSelecionado = event.target
    for (let i = 0; i < intensLista.length; i += 1) {
        intensLista[i].classList.remove('background')
    }
    itemSelecionado.classList.add('background')
})

lista.addEventListener('dblclick', function () {
    // let listaMark = document.querySelectorAll('.item')
    let itemMark = event.target
    console.log(itemMark.className)
    if (itemMark.className === 'item completed background') {
        itemMark.classList.remove('completed')

    } else if (itemMark.className === 'item background') {
        itemMark.classList.add('completed')
    }
})