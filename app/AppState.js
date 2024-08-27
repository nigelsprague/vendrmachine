import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Snack } from './models/Snack.js'

class ObservableAppState extends EventEmitter {

  // AppState.js
  snacks = [
    new Snack({ name: 'Tater Chips', price: 3.50.toFixed(2), imgUrl: 'https://s7d5.scene7.com/is/image/CentralMarket/001194545-1?hei=233&wid=233&$large$' }),
    new Snack({ name: 'Gummy Worms', price: 2.50.toFixed(2), imgUrl: 'https://i5.walmartimages.com/asr/b3fdbd4d-1294-4b5c-af63-e402aa3c174f.6f21712221583f7a2daac8820d13016d.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF' }),
    new Snack({ name: 'Handfull of Grape Jelly', price: 0.75.toFixed(2), imgUrl: 'https://theimaginationtree.com/wp-content/uploads/2013/05/Squishing-hands-in-defrosted-jello.jpg' }),
    new Snack({ name: '3-Layer Cake', price: 12.25.toFixed(2), imgUrl: 'https://images.squarespace-cdn.com/content/v1/62a8cd0c70480340a0fc608a/1666285416291-DHOUV50JSABN2XRPGC9B/6C7A2150.jpg?format=1000w' }),
    new Snack({ name: 'Nuts and Bolts', price: 2.00.toFixed(2), imgUrl: 'https://choosewashingtonstate.com/wp-content/uploads/2015/08/nuts-bolts.jpg' }),
    new Snack({ name: 'Sam', price: 0.05.toFixed(2), imgUrl: 'https://preview.redd.it/w1jrw5p4kl761.jpg?width=606&format=pjpg&auto=webp&s=798ab55f55d07b9615a2cfb63ca707fd31c30187' }),
    new Snack({ name: 'Chocolate Bar', price: 2.25.toFixed(2), imgUrl: 'https://s7d2.scene7.com/is/image/hersheysassets/0_34000_00240_5_701_24000_097_Item_Front?fmt=webp-alpha&hei=908&qlt=75' })
  ]

  pantry = []

  money = 0
}

export const AppState = createObservableProxy(new ObservableAppState())