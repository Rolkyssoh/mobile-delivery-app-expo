import { IBasketItem } from './basket-item.dto'
import { IStructure } from './structure.dto'
import { IUser } from './user.dto'

export interface IBasket {
  id: string
  structure: IStructure
  structureID: string
  user: IUser
  userID: string
  basket_basketItems: IBasketItem[]
}
