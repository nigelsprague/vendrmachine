export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get SnackHTMLTemplate() {
    return `
    <div class="col">
          <div class="card">
            <img src="${this.imgUrl}"
              class="card-img-top" alt="snack">
            <div class="card-body bg-dark text-light">
              <div class="row justify-content-center">
                <div class="col-6 p-0">
                  <h5 class="card-title">${this.name}</h5>
                  <p class="card-text">$${this.price}</p>
                </div>
                <button onclick="app.SnacksController.buySnack(${this.name})" class="col-4 btn bg-success text-light fs-5">Buy</button>
              </div>
            </div>
          </div>
        </div>`
  }
}