function itensSalvos() {
    let container = document.getElementById('lista-tarefas')
    if (localStorage.testando) {
        let textoSalvo = []
        let textoRiscado = []
        textoSalvo = JSON.parse(localStorage.getItem('testando'))
        textoRiscado = JSON.parse(localStorage.getItem('riscado'))
        for (let i5 = 0; i5 < textoSalvo.length; i5 += 1) {
            let li = document.createElement('li')
            li.innerText = textoSalvo[i5]
            li.classList.add('item')
            // container.appendChild(li)
            for (let i6 = 0; i6 < textoRiscado.length; i6 += 1) {
                if (textoSalvo[i5] === textoRiscado[i6]) {
                    li.classList.add('completed')
                    container.appendChild(li)
                } else {
                    container.appendChild(li)
                }
            }
        }
    }
}

itensSalvos()

let saveButton = document.getElementById('salvar-tarefas')

let removeItem = document.getElementById('remover-selecionado')

let textoBotao = document.getElementById('criar-tarefa')
textoBotao.innerText = 'Criar tarefa'

let textoClear = document.getElementById('apaga-tudo')
textoClear.innerText = 'Limpar'

let textoRemove = document.getElementById('remover-finalizados')
textoRemove.innerText = 'Limpar completos'

saveButton.addEventListener('click', function () {
    localStorage.testando = JSON.stringify(textoSalvo)
    localStorage.riscado = JSON.stringify(textoRiscado)
})

textoClear.addEventListener('click', function () {
    localStorage.clear()
    textoRiscado = []
    textoSalvo = []
    let container = document.getElementById('lista-tarefas')
    let intensLista = document.querySelectorAll('.item')
    for (let i2 = 0; i2 < intensLista.length; i2 += 1) {
        container.removeChild(intensLista[i2])
    }
})

removeItem.addEventListener('click', function () {
    let container = document.getElementById('lista-tarefas')
    let intensCompletos = document.querySelectorAll('.background')
    for (let i7 = 0; i7 < intensCompletos.length; i7 += 1) {
        container.removeChild(intensCompletos[i7])
        textoSalvo.pop(intensCompletos[i7])
    }
})

textoRemove.addEventListener('click', function () {
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

let textoSalvo = []

let button = document.getElementById('criar-tarefa')
button.addEventListener('click', function () {
    let text = document.getElementById('texto-tarefa').value
    createItem(text)
    textoSalvo.push(text)
    console.log(textoSalvo)
})


lista.addEventListener('click', function (event) {
    let intensLista = document.querySelectorAll('.item')
    let itemSelecionado = event.target
    for (let i = 0; i < intensLista.length; i += 1) {
        intensLista[i].classList.remove('background')
    }
    itemSelecionado.classList.add('background')
})

let textoRiscado = []

lista.addEventListener('dblclick', function () {
    let itemMark = event.target
    console.log(itemMark.className)
    if (itemMark.className === 'item completed background') {
        let text2 = event.target.innerText
        textoRiscado.pop(text2.innerText)
        textoSalvo.push(text2)
        itemMark.classList.remove('completed')
        // console.log(textoRiscado)
        console.log(textoSalvo)


    } else if (itemMark.className === 'item background') {
        itemMark.classList.add('completed')
        let text2 = event.target.innerText
        // textoSalvo.pop(text2)
        textoRiscado.push(text2)
        // console.log(textoRiscado)
        console.log(textoSalvo)
    }
})