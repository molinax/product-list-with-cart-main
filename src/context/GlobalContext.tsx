import { ReactNode, createContext, useContext, useEffect, useReducer } from 'react'
import { useState, Dispatch } from 'react'
import { type DessertCardItem } from '../types'
import { cartInitialState, cartReducer } from '../reducers/cartReducer'
import { ActionType } from '../actions/cartActions'


export interface Cart {
  state: DessertCardItem[]
  dispatch: Dispatch<ActionType>
  totalPrice: number
}

interface Props {
  children: ReactNode
}

const GlobalContext = createContext({})

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  useEffect(() => {
    setTotalPrice(state.reduce((acc, item) => acc + (item.price * item.amount), 0))
  }, [state])
  
  return (
    <GlobalContext.Provider value={{state, dispatch, totalPrice}}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)