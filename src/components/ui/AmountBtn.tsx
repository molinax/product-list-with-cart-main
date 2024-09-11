import { type Cart, useGlobalContext } from '../../context/GlobalContext'
import { type DessertData } from '../../types'
import IncrementIcon from './icons/IncrementIcon'
import DecrementIcon from './icons/DecrementIcon'

interface Props {
  style: string
  data: DessertData
  id: string
}

const AmountBtn: React.FC<Props> = ({ style, data, id }) => {
  const { name, price } = data
  const { state, dispatch } = useGlobalContext() as Cart
  const amount = state.find(item => item.id === id)?.amount

  return (
    <div className={`${style} flex justify-between w-40 items-center py-2 px-4 rounded-full bg-red text-white`}>
      <DecrementIcon
        style="border-2 border-rose_200 py-2 px-1 rounded-full hover-icons"
        onClick={() => dispatch({ type: 'REMOVE_CART', payload: id })}
      />
      {amount}
      <IncrementIcon
        style="border-2 border-rose_100 p-1 rounded-full hover-icons"
        onClick={() => dispatch({ type: 'ADD_CART', payload: { name, price, id, amount: 1 } })}
      />
    </div>
  )
}

export default AmountBtn