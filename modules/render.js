import { createTradeContainer, createTradeDeleteBtn, createTradeEditBtn, createTradeTitle, createTradeValue } from "./create.js"

export function renderTrade(tradeData) {
    const tradeSection = createTradeContainer(tradeData.id)
    const title = createTradeTitle(tradeData.name)
    const value = createTradeValue(tradeData.value)
    const editBtn = createTradeEditBtn(tradeData)
    const deleteBtn = createTradeDeleteBtn(tradeData.id)

    document.querySelector('#trades').appendChild(tradeSection)
    tradeSection.append(title, value, editBtn, deleteBtn)
}