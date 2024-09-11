import { type DessertCardItem } from '../types'
import { ActionType } from '../actions/cartActions'

export const cartInitialState: DessertCardItem[] = []

export const cartReducer = (state: typeof cartInitialState, action: ActionType) => {
  switch (action.type) {
    case 'ADD_CART':
      return addCartItem(state, action.payload)
    
    case 'REMOVE_CART':
      return removeCartItem(state, action.payload)

    case 'DELETE_CART':
      return deleteCartItem(state, action.payload)
    
    case 'RESET_CART':
      return []
      
    default:
      return state
  }
}

const addCartItem = (state: typeof cartInitialState, dessert: DessertCardItem) => {
  const { name, price, id, amount } = dessert
  const hasRepeated = state.some(item => item.id === id)

  if (hasRepeated) {
    return state.map(item =>
      item.id === id 
        ? { ...item, amount: item.amount + 1 }
        : item
    )
  }

  const newCart = { name, price, id, amount }
  return [...state, newCart]
}


const removeCartItem = (state: typeof cartInitialState, id: string) => {
  const cartItem = state.find(item => item.id === id)
  
  if (cartItem?.amount === 1) {
    const newCart = state.filter(item => item.id !== id)
    return newCart
  }
  
  return state.map(item =>
    item.id === id 
      ? { ...item, amount: item.amount - 1 }
      : item
  )
}

const deleteCartItem = (state: typeof cartInitialState, id: string) => {
  return state.filter(item => item.id !== id)
}
