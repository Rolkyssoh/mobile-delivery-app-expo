import { IProduct } from './product.dto'
import { IStructure } from './structure.dto'

export interface IPicture {
  id: string
  imagePath: string
  imageFilename?: string
  imageSize?: number
  product?: IProduct
  productID?: string
  dish?: number
  dishID?: string
  structure?: IStructure
  structureID?: string
}
