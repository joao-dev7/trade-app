import { trades } from "../index.js"
import { updateBalance } from "./updatebalance.js"

function createTradeContainer(id) {
    const tradeSection = document.createElement('div')
    tradeSection.classList.add('trade')
    tradeSection.id = `trade-${id}`
    return tradeSection
}

function createTradeTitle(name) {
    const title = document.createElement('span')
    title.classList.add('trade-title')
    title.textContent = name
    return title
}

function createTradeValue(value) {
    const span = document.createElement('span')
    span.classList.add('trade-value')
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    const formatedValue = formater.format(value)
    if (value > 0) {
        span.textContent = `${formatedValue} C`
        span.classList.add('debit')
    } else {
        span.textContent = `${formatedValue} D`
        span.classList.add('credit')
    }
    return span
}

function createTradeEditBtn(tradeData) {
    const editBtn = document.createElement('button')
    editBtn.classList.add('options','edit-btn')
    editBtn.textContent = 'Editar'
    editBtn.addEventListener('click', () => {
        document.querySelector('form > h2').textContent = 'Editar Transação'
        document.querySelector('#form-btn').textContent = 'Editar'
        document.querySelector('#id').value = tradeData.id
        document.querySelector('#name').value = tradeData.name
        document.querySelector('#value').value = tradeData.value
    })
    return editBtn
}

function createTradeDeleteBtn(id) {
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('options','delete-btn')
    deleteBtn.textContent = 'Excluir'
    deleteBtn.addEventListener('click',async () => {
        await fetch(`http://localhost:3000/trades/${id}`, { method: 'DELETE' })
        const indexToRemve = trades.findIndex((t) => t.id === id)
        deleteBtn.parentElement.remove()
        trades.splice(indexToRemve, 1)
        updateBalance()
    })
    return deleteBtn
}

export { createTradeContainer, createTradeDeleteBtn, createTradeEditBtn, createTradeTitle, createTradeValue}