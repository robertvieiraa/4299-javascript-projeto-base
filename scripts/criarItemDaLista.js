import gerarDiaDaSem from "./gerarDiaDaSem.js"
const inputItem = document.getElementById("input-item")
let contador = 0
export function criarItemDaLista() {
    if (inputItem.value == 0) {
        window.alert('Insira o nome da tarefa!')
        return
    }
    
    const itemDaLista = document.createElement('li')
    const containerItemDaLista = document.createElement('div')
    containerItemDaLista.classList.add('lista-item-container')
    const inputCheckbox = document.createElement('input')
    inputCheckbox.type = 'checkbox'
    inputCheckbox.id = 'checkbox-' + contador++
    const nomeItem = document.createElement('p')
    nomeItem.innerText = inputItem.value

    inputCheckbox.addEventListener('click', function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = 'line-through'
        } else {
            nomeItem.style.textDecoration = 'none'
        }
    })

    containerItemDaLista.appendChild(inputCheckbox)
    containerItemDaLista.appendChild(nomeItem)
    itemDaLista.appendChild(containerItemDaLista)
    const dataCompleta = gerarDiaDaSem()

    const itemData = document.createElement('p')
    itemData.innerHTML = dataCompleta
    itemData.classList.add('texto-data')
    itemDaLista.appendChild(itemData)
    inputItem.value = ' '
    return itemDaLista
}