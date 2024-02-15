import { renderTrade } from "./modules/render.js"
import { saveTrade } from "./modules/saveTrade.js"
import { updateBalance } from "./modules/updatebalance.js"

export let trades = []

async function fetchTrade() {
    return await fetch('http://localhost:3000/trades').then(res => res.json())
}

async function setup() {
    const results = await fetchTrade()
    trades.push(...results)
    trades.forEach(renderTrade)
    updateBalance()
}

document.addEventListener('DOMContentLoaded', setup)
document.querySelector('form').addEventListener('submit', saveTrade)