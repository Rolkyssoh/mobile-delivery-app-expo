import { IOrdersDtoOut } from '@/hooks/order'
import { IBasketItem } from '../../dto'
import BaseMethods from '../BaseMethods'
import { orderUrls } from '../url'

export interface INewOrderDtoIn {
  structureID: string
  userID: string
  basketItems: IBasketItem[]
}

export interface IGetOrderById {
  userID: string
}

export class OrderService {
  // static get_basket_by_ID = (id: string) =>
  //   BaseMethods.getRequest(basketUrls.GET_BASKET_BY_ID(id), false);

  // =========================== Basket-item
  static readonly get_all_orders = () =>
    BaseMethods.getRequest<IOrdersDtoOut>(orderUrls.GET_ALL_ORDERS, true)

  static readonly get_order_by_user_id = (params: IGetOrderById) =>
    BaseMethods.getRequest(orderUrls.GET_ORDERS_BY_USER_ID, false, params)

  static readonly get_order_by_his_id = (id: string) =>
    BaseMethods.getRequest(orderUrls.GET_ORDER_BY_ID(id), false)
}
