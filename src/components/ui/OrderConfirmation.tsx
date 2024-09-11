import { useEffect } from 'react'
import { type Cart, useGlobalContext } from '../../context/GlobalContext'
import Button from './Button'
import ListItemCart from "./ListItemCart"
import check from '../../../public/images/icon-order-confirmed.svg'

interface Props {
  hiddenOrder: () => void
}

const OrderConfirmation: React.FC<Props> = ({ hiddenOrder }) => {
  const { state, dispatch, totalPrice } = useGlobalContext() as Cart
  
  useEffect(() => {
    state.length === 0 && hiddenOrder()
  }, [state])

  return (
    <div className="absolute top-0 left-0 h-full w-full bg-black/30 flex items-center justify-center pt-[4.2rem] sm:py-6">
      <section className="sticky bg-white w-full max-w-2xl h-full rounded-lg py-6 px-4 flex flex-col gap-6 text-sm sm:py-8 sm:px-6 sm:h-auto sm:max-w-xl">
        <header className="flex flex-col gap-2">
          <img src={check} alt="Check green icon" className="self-start mb-3" />
          <h2 className="font-bold text-5xl">Order Confirmed</h2>
          <p className="text-rose_400 font-semibold">We hope you enjoy your food!</p>
        </header>
        <div className="flex flex-col gap-6 bg-rose_50 rounded-lg p-4 overflow-hidden">
          <ul className="flex flex-col gap-6 overflow-y-scroll not-scroll-bar">
              {state.map(item => <ListItemCart key={item.id} data={item} canDeleted={false} />)}
          </ul>
          <div className="flex justify-between items-center">
            <p className="text-rose_400 font-semibold">Order total</p>
            <span className="font-bold text-2xl">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <Button value='Start New Order' onClick={() => {
          hiddenOrder()
          dispatch({ type: 'RESET_CART' })
        }}/>
      </section>
    </div>
  )
}

export default OrderConfirmation