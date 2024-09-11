import { type DessertData } from '../../types'
import { type Cart } from '../../context/GlobalContext'
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../../context/GlobalContext'
import CartBtn from './CartBtn'
import AmountBtn from './AmountBtn'

interface Props {
  data: DessertData
  id: string
}

const DessertCard: React.FC<Props> = ({ data, id }) => {
  const { state, dispatch } = useGlobalContext() as Cart 
  const [isActive, setIsActive] = useState<Boolean>()
  const { image, name, category, price } = data
  
  useEffect(() => {
    const hasAmount = (state.find(item => item.id === id)?.amount ?? 0) > 0
    setIsActive(hasAmount)
  }, [state])

  return (
    <article className="flex flex-col">
      <picture>
        <source media="(min-width: 1024px)" srcSet={image.desktop} />
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        <img
          src={image.mobile}
          alt={name}
          className={`rounded-xl w-full object-cover ${isActive ? 'border-[3px] border-red' : 'border-none'}`}
        />
      </picture>
      {isActive
          ? <AmountBtn style='self-center mt-[-1.3rem] mb-3' data={data} id={id} />
          : <CartBtn
              style='self-center mt-[-1.2rem] mb-3'
              onClick={() => dispatch({ type: 'ADD_CART', payload: { name, price, id, amount: 1 } })}
            />}
      <p className="text-rose_400 text-sm">{category}</p>
      <h3 className="text-rose_900 font-semibold">{name}</h3>
      <p className="text-red font-semibold">${price.toFixed(2)}</p>
    </article>
  )
}

export default DessertCard