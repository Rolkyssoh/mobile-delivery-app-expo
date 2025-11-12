import { IBasketItem } from './basket-item.dto'
import { IOrderItem } from './order-item.dto'
import { IPicture } from './picture.dto'
import { IProduct } from './product.dto'
import { IStructure } from './structure.dto'

export interface IDish {
  id: string
  name: string
  profileImage: string
  dish_pictures: IPicture[]
  description: string
  availableQuantiy: number
  price: number
  restaurantStructure: IStructure
  restaurantID: string
  orderItemDishes: IOrderItem[]
  basketItems: IBasketItem[]
  dish_Ingredients: IProduct[]
}
