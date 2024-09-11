import { DessertCardItem } from '../types'

export type ActionType =
  | { type: 'ADD_CART', payload: DessertCardItem}
  | { type: 'REMOVE_CART', payload: string }
  | { type: 'DELETE_CART', payload: string }
  | { type: 'RESET_CART' }