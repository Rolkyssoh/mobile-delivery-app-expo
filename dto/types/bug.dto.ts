import { IUser } from './user.dto'

export interface IBug {
  id: string
  title: string
  details: string
  user: IUser
  userID: string
}
