import { type Cart, useGlobalContext } from '../../context/GlobalContext'
import { type DessertCardItem } from '../../types'
import RemoveIcon from './icons/RemoveIcon'

interface Props {
  data: DessertCardItem
  canDeleted: boolean
}

const ListItemCart: React.FC<Props> = ({ data, canDeleted = true }) => {
  const { name, price, amount, id } = data
  const { dispatch } = useGlobalContext() as Cart
  
  return (
    <li className="list-none flex items-center justify-between text-sm border-b pb-3 border-rose_100">
      <div>
        <h4 className="text-rose_900 font-semibold mb-2">{name}</h4>
        <div className="flex gap-2">
          <span className="font-semibold text-red pr-3">{amount}x</span>
          <span className="text-rose_400">@${price.toFixed(2)}</span>
          <span className="text-rose_400 font-semibold">${(price * amount).toFixed(2)}</span>
        </div>
      </div>
      {canDeleted && (
        <RemoveIcon
          style="border-2 border-rose_300 p-1 rounded-full hover-icons"
          onClick={() => dispatch({ type: 'DELETE_CART', payload: id })}
        />
      )}
    </li>
  )
}

export default ListItemCart