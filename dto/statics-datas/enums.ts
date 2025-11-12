export enum TransportationModes {
  DRIVING = 'DRIVING',
  BICYCLING = 'BICYCLING',
}

export enum OrderStatus {
  NEW = 'NEW',
  COOKING = 'COOKING',
  READY_FOR_PICKUP = 'READY_FOR_PICKUP',
  PICKED_UP = 'PICKED_UP',
  COMPLETED = 'COMPLETED',
  ACCEPTED = 'ACCEPTED',
  DECLINED_BY_STRUCTURE = 'DECLINED_BY_STRUCTURE',
}

export enum UserType {
  CUSTOMER = 'CUSTOMER',
  DRIVER = 'DRIVER',
  ADMIN = 'ADMIN',
  RESTORER = 'RESTORER',
  EMPLOYEE = 'EMPLOYEE',
}

export enum StructureType {
  RESTAURANT = 'RESTAURANT',
  SHOP = 'SHOP',
}

export enum ProductTypeEnum {
  INGREDIENT,
  ARTICLE,
}

export enum UserRoleEnum {
  CUSTOMER = 'CUSTOMER',
  DRIVER = 'DRIVER',
  ADMIN = 'ADMIN',
  RESTORER = 'RESTORER',
  EMPLOYEE = 'EMPLOYEE',
  VISITOR = 'VISITOR',
}
