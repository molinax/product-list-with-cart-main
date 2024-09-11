import { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/GlobalContext'
import { type Cart } from '../../context/GlobalContext'
import emptyCartIllustration from '../../../public/images/illustration-empty-cart.svg'
import ListItemCart from '../ui/ListItemCart'
import CarbonNeutralIcon from '../ui/icons/CarbonNeutralIcon'
import Button from '../ui/Button'

interface Props {
  showOrder: () => void
}

const YourCart: React.FC<Props> = ({ showOrder }) => {
  const { state, totalPrice } = useGlobalContext() as Cart
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(state.reduce((acc, item) => acc + item.amount, 0))
  }, [state])

  return (
    <section className="flex flex-col self-start gap-8 p-6 bg-white text-sm shadow-sm rounded-lg md:col-start-5 md:col-span-full md:py-8">
      <h2 className="text-red font-bold text-2xl">Your Cart ({totalAmount})</h2>
      {
        state.length === 0
          ? (
            <div className="self-center">
              <img src={emptyCartIllustration} alt="Brown cake" className="mx-auto" />
              <p className="text-rose_500 font-semibold">Your added items will appear here</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {state.map(item => <ListItemCart key={item.id} data={item}/>)}
            </ul>
          )
      }
      <div className="flex items-center justify-between">
        <span>Order Total</span>
        <span className="font-bold text-2xl">${totalPrice.toFixed(2)}</span>
      </div>
      <div className="bg-rose_50 p-4 rounded-lg inline-flex gap-2 justify-center items-center">
        <CarbonNeutralIcon />
        <p>
          This is a <span className="font-semibold">carbon-neutral</span> delivery
        </p>
      </div>
      <Button value='Confirm Order' disabled={totalPrice === 0} onClick={() => {
        showOrder()
        window.scrollTo({ top: 0 });
        }}/>
    </section>
  )
}

export default YourCart