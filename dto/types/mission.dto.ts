import { IUser } from './user.dto'

export interface IMission {
  id: string
  title: string
  details: string
  user: IUser
  userID: string
  structureID: string
  status:string
  updatedAt:string
}
