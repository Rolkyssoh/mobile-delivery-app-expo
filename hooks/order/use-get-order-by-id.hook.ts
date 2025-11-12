import { useQuery } from '@tanstack/react-query'
import { IOrder } from '../../dto'
import { OrderService } from '../../services'

export const useGetOrderByIDHook = (orderID: string) => {
  return useQuery({
    queryKey: ['order-details', orderID],
    queryFn: async (): Promise<IOrder> => {
      const response = await OrderService.get_order_by_his_id(orderID)
      return response.data
    },
    enabled: !!orderID,
  })
}
