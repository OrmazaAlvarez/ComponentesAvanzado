import { Product } from "../interfaces/product"

export class Store {
    itemsStore:Array<Product>
    
    constructor() {
        this.itemsStore = [
            {
                text:
                  "H + Sport is dedicated to creating high-quality, nutrient-rich, organic nutritional products that enhance active lifestyles.",
                title: "Orange Mineral Water",
                image: "mineralwater-orange.jpg",
                price: 20
              },
              {
                text:
                  "H + Sport is dedicated to creating high-quality, nutrient-rich, organic nutritional products that enhance active lifestyles.",
                title: "Strawberry Mineral Water",
                image: "mineralwater-strawberry.jpg",
                price: 33
              },
              {
                text:
                  "H + Sport is dedicated to creating high-quality, nutrient-rich, organic nutritional products that enhance active lifestyles.",
                title: "Chocolate Protein Bar",
                image: "proteinbar-chocolate.jpg",
                price: 120
              }
        ]
        
    }
}
