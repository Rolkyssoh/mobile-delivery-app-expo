import { StructureType } from '../statics-datas'
import { IBasket } from './basket.dto'
import { IDish } from './dish.dto'
import { IOrder } from './order.dto'
import { IPicture } from './picture.dto'
import { IProduct } from './product.dto'
import { IUser } from './user.dto'

export interface IStructure {
  id: string
  name: string
  profileImage: string
  structure_pictures?: IPicture[]
  deliveryFee: number
  minDeliveryTime: number
  maxDeliveryTime: number
  rating?: number
  address: string
  lat: number
  lng: number
  inService: boolean
  structureType: StructureType
  createdBy: IUser
  createdByID: IUser
  managedBy?: IUser
  managedByID?: string
  structure_employees: IUser[]
  structure_orders: IOrder[]
  baskets: IBasket[]
  restaurant_dishes: IDish[]
  shop_products: IProduct[]
  structureFavoritedBy: IUser[]
}

export type StructureDtoOut = {
  count_: number
  structures: IStructure[]
}
