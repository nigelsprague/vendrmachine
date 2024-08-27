import { AppState } from "../AppState.js"

class SnacksService {
  addQuarter() {
    AppState.money += 0.25
    console.log(AppState.money)
  }

  buySnack(snackName) {
    const snackToBuy = AppState.snacks.find(snack => snack.name == snackName)
    if (AppState.money < snackToBuy.price) {
      alert('feed me more quarters if you want to feed your family')
      return
    }
    AppState.money -= snackToBuy.price
  }
}

export const snacksService = new SnacksService()