export const r = 'http://127.0.0.1:4200/'
// export const prefixer = 'http://127.0.0.1:4200/api/v1/'
export const prefixer = 'http://192.168.8.155:4200/api/v1/'

export const structureUrls = {
  GET_ALL_STRUCTURES: `${prefixer}structure`,
  GET_STRUCTURE_BY_ID: (id: string) => `${prefixer}structure/${id}`,
  GET_ALL_RESTAURANTS: `${prefixer}structure/restaurants`,
  GET_ALL_SHOPS: `${prefixer}structure/shops`,
  GET_SHOP_BY_ID: (id: string) => `${prefixer}structure/shop/${id}`,
}

export const dishUrls = {
  GET_DISH_BY_ID: (id: string) => `${prefixer}dish/${id}`,
}

export const productUrls = {
  GET_PRODUCT_BY_ID: (id: string) => `${prefixer}product/${id}`,
}

export const basketUrls = {
  GET_BASKET_BY_USER_AND_STRUCTURE: `${prefixer}basket/user-structure`,
  GET_BASKET_BY_ID: (id: string) => `${prefixer}basket/${id}`,
  CREATE_NEW_BASKET_DISH: `${prefixer}basket-item/create-basket-dish`,
  CREATE_NEW_BASKET_PRODUCT: `${prefixer}basket-item/create-basket-product`,

  GET_BASKET_ITEM_BY_ID: (id: string) => `${prefixer}basket-item/${id}`,
  GET_BASKET_ITEMS_BY_ITEM_ID: `${prefixer}basket-item/item_id`,
  GET_BASKET_ITEM_BY_BASKET_ID: `${prefixer}basket-item/item-in-basket`,
  UPDATE_BASKET_ITEM: (id: string) => `${prefixer}basket-item/${id}/update`,
  // LOGOUT_USER: `${prefixer}logout`,
}

export const orderUrls = {
  CREATE_NEW_ORDER: `${prefixer}order/create`,
  // GET_ORDERS_BY_USER_ID:(uderID: string) => `${prefixer}order/user/${userID}`,
  GET_ORDERS_BY_USER_ID: `${prefixer}order/user`,
  GET_ORDER_BY_ID: (id: string) => `${prefixer}order/${id}`,
  GET_ALL_ORDERS: `${prefixer}order/all`

  // GET_BASKET_ITEM_BY_ID: (id: string) => `${prefixer}basket-item/${id}`,
  // GET_BASKET_ITEM_BY_BASKET_ID: `${prefixer}basket-item/item-in-basket`,
  // LOGOUT_USER: `${prefixer}logout`,
}

export const authUrls = {
  LOGIN_USER: `${prefixer}auth/email_login`,
  REGISTER_USER: `${prefixer}auth/register`,
  LOGOUT_USER: `${prefixer}logout`,
}

//===================================================================================

export const userUrls = {
  REGISTER_USER: `${prefixer}/register`,
  UPDATE_USER_PICTURE: `${prefixer}/profile-pic-update`,
}

export const restaurantUrls = {
  LIST_ALL_RESTAURANT: `${prefixer}/all-restaurants`,
  LIST_ALL_RESTAURANT_IN_PROMO: `${prefixer}/restaurant-offers`,
  GET_FAVORITES_RESTAURANT: `${prefixer}/favorites-restaurants-fetch`,
  SEARCH_RESTAURANT: `${prefixer}/search-restaurants`,
  ADD_RESTAURANT_TO_FAVORIS: `${prefixer}/add-favorites`,
}
