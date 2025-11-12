import { IOrder } from '@/dto'
import { create } from 'zustand'

type ShopStore = {
  availableOrders: IOrder[]
  setAvailableOrders: (datas: IOrder[]) => void
}

export const userOrderStore = create<ShopStore>()((set) => ({
  availableOrders: [],

  setAvailableOrders: (orders) => set({ availableOrders: orders }),
}))
