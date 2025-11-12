import { IUser } from './user.dto'

export interface IAskedFeature {
  id: string
  title: string
  details: string
  user: IUser
  userID: string
}
