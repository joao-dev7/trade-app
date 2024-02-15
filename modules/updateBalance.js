import { trades } from "../index.js"

export function updateBalance() {
    const balanceSpan = document.querySelector('#balance')
    const balance = trades.reduce((sum, transaction) => sum + transaction.value, 0)
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency'
    })
    balanceSpan.textContent = formater.format(balance)
}