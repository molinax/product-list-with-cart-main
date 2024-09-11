import CartIcon from './icons/CartIcon'

interface Props {
  style: string
  onClick: () => void
}

const CartBtn: React.FC<Props> = ({ style, onClick }) => {
  return (
    <button
      className={`${style} flex justify-center gap-1 text-sm text-rose_900 font-semibold py-2 px-4 border border-black rounded-full bg-white transition-d-200 hover:border-red hover:text-red`}
      onClick={onClick}
    >
      <CartIcon />
      Add to Cart
    </button>
  )
}

export default CartBtn