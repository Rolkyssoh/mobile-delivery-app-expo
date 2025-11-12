import { TransportationModes, UserRoleEnum } from '../statics-datas'
import { IAskedFeature } from './asked-feature.dto'
import { IBasket } from './basket.dto'
import { IBug } from './bug.dto'
import { IOrder } from './order.dto'
import { IStructure } from './structure.dto'

export interface IUser {
  id: string
  username: string
  email: string
  emailConfirmed: boolean
  phonenumber: string
  address: string
  transportationMode?: TransportationModes
  picturePath?: string
  pictureFilename?: string
  pictureSize?: number
  lat: number
  lng: number
  password: string
  refreshToken?: string
  role: UserRoleEnum
  isActive: boolean
  created_structures: IStructure[]
  managedStructure?: IStructure
  managedStructureID?: string
  employeeOfStructure?: IStructure
  employeeOfStructureID?: string
  user_orders: IOrder[]
  user_baskets: IBasket[]
  user_favoriteStructures: IStructure[]
  user_askedFeatures: IAskedFeature[]
  user_bugs: IBug[]
}

export interface IVisitor {
  token: string
  user_orders_ids: string[]
  user_baskets_ids: string[]
  user_favoriteStructures_ids: string[]
}

export interface INewVisitorDtoIn {
  username: string
  email: string
  phonenumber: string
  address: string
  role: UserRoleEnum
  password: string
}
