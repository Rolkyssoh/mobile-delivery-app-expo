import { IBasket } from './basket.dto'
import { IDish } from './dish.dto'
import { IProduct } from './product.dto'

export interface IBasketItem {
  id: string
  quantity: number
  basket: IBasket
  basketID: string
  dish?: IDish
  dishID?: string
  product?: IProduct
  productID?: string
}
