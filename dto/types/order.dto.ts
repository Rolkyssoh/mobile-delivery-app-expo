import { IOrderItem } from './order-item.dto'
import { IStructure } from './structure.dto'
import { IUser } from './user.dto'

export interface IOrder {
  id: string
  status: string
  structure: IStructure
  structureID: string
  user: IUser
  userID: string
  order_orderItems: IOrderItem[]
  createdAt: Date
  updatedAt: Date
}
