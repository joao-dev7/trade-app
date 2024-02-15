import { trades } from "../index.js"
import { renderTrade } from "./render.js"
import { updateBalance } from "./updatebalance.js"

export async function saveTrade(ev) {
    ev.preventDefault()

    const id = document.querySelector('#id').value
    const name = document.querySelector('#name').value
    const value = parseFloat(document.querySelector('#value').value)

    if (id) {
        const response = await fetch(`http://localhost:3000/trades/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, value }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const trade = await response.json()
        const indexToRemve = trades.findIndex((t) => t.id === id)
        trades.splice(indexToRemve, 1, trade)
        document.querySelector('#id').value = ""
        document.querySelector(`#trade-${id}`).remove()
        renderTrade(trade)
        document.querySelector('form > h2').textContent = 'Nova Transação'
        document.querySelector('#form-btn').textContent = 'Salvar'
    } else {
        const response = await fetch('http://localhost:3000/trades', {
            method: 'POST',
            body: JSON.stringify({ name, value }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const trade = await response.json()
        trades.push(trade)
        renderTrade(trade)
    }


    ev.target.reset()
    updateBalance()
}


