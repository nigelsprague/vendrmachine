import { AppState } from "../AppState.js"
import { snacksService } from "../services/SnacksService.js"

export class SnacksController {
  constructor() {
    console.log('Snacks Controller loaded')
    AppState.on('money', this.drawMoney)

    this.drawSnacks()
  }

  addQuarter() {
    snacksService.addQuarter()
    this.drawMoney()
  }

  drawMoney() {
    const money = AppState.money
    let moneyAmount = document.getElementById('money')
    moneyAmount.innerText = money.toFixed(2)
  }

  buySnack(snackName) {
    snacksService.buySnack(snackName)
  }

  drawSnacks() {
    const snacks = AppState.snacks
    let snacksHTML = ''
    snacks.forEach(snack => snacksHTML += snack.SnackHTMLTemplate)
    const snacksElem = document.getElementById('venderSnacks')
    snacksElem.innerHTML = snacksHTML
  }
}