import { useQuery } from '@tanstack/react-query'
import { IOrder } from '../../dto'
import { OrderService } from '@/services'
import { userOrderStore } from '@/stores'

export interface IOrdersDtoOut {
  count_: number
  orders: IOrder[]
}

export const userGetAllOrders = () => {
  const { setAvailableOrders } = userOrderStore()

  return useQuery({
    queryKey: ['order-for-delivery'],
    queryFn: async (): Promise<IOrdersDtoOut> => {
      const response = await OrderService.get_all_orders()
      console.log("Response while getting all orders:::::", response.data)
      if(response.data){
        setAvailableOrders(response.data.orders)
      }
      return response.data as IOrdersDtoOut
    },
    enabled: false,
  })
}
