import { ProductTypeEnum } from '../statics-datas'
import { IBasketItem } from './basket-item.dto'
import { IDish } from './dish.dto'
import { IOrderItem } from './order-item.dto'
import { IPicture } from './picture.dto'
import { IStructure } from './structure.dto'

export interface IProduct {
  id: string
  name: string
  profileImage?: string
  product_pictures: IPicture[]
  description: string
  availableQuantiy: number
  price: number
  productType: ProductTypeEnum
  shopStructure: IStructure
  shopID: string
  orderItemProducts: IOrderItem[]
  basketItems: IBasketItem[]
  ingredients_InDishes: IDish[]
}
