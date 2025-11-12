import { IDish } from './dish.dto'
import { IOrder } from './order.dto'
import { IProduct } from './product.dto'

export interface IOrderItem {
  id: string
  quantity: number
  order: IOrder
  orderID: string
  dish?: IDish
  dishID?: string
  product?: IProduct
  productID?: string
}
