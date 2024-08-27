import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Snack } from './models/Snack.js'

class ObservableAppState extends EventEmitter {

  // AppState.js
  snacks = [
    new Snack({ name: 'Tater Chips', price: 3.50.toFixed(2), imgUrl: 'https://s7d5.scene7.com/is/image/CentralMarket/001194545-1?hei=233&wid=233&$large$' }),
    new Snack({ name: 'Gummy Worms', price: 2.50.toFixed(2), imgUrl: 'https://s7d5.scene7.com/is/image/CentralMarket/001194545-1?hei=233&wid=233&$large$' }),
    new Snack({ name: 'Handfull of Grape Jelly', price: 0.75.toFixed(2), imgUrl: 'https://s7d5.scene7.com/is/image/CentralMarket/001194545-1?hei=233&wid=233&$large$' }),
    new Snack({ name: '3-Layer Cake', price: 12.25.toFixed(2), imgUrl: 'https://s7d5.scene7.com/is/image/CentralMarket/001194545-1?hei=233&wid=233&$large$' }),
    new Snack({ name: 'Nuts and Bolts', price: 2.00.toFixed(2), imgUrl: 'https://s7d5.scene7.com/is/image/CentralMarket/001194545-1?hei=233&wid=233&$large$' }),
    new Snack({ name: 'Sam', price: 0.05.toFixed(2), imgUrl: 'https://s7d5.scene7.com/is/image/CentralMarket/001194545-1?hei=233&wid=233&$large$' }),
    new Snack({ name: 'Chocolate Bar', price: 2.25.toFixed(2), imgUrl: 'https://s7d5.scene7.com/is/image/CentralMarket/001194545-1?hei=233&wid=233&$large$' })
  ]

  pantry = []

  money = 0
}

export const AppState = createObservableProxy(new ObservableAppState())