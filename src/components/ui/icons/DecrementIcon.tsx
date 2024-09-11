import decrementIcon from '../../../../public/images/icon-decrement-quantity.svg'

interface Props {
  style: string
  onClick: () => void
}

const DecrementIcon: React.FC<Props> = ({ style, onClick }) => {
  return (
    <span className={style} onClick={onClick}>
      <img src={decrementIcon} alt="Decrement icon" />
    </span>
  )
}

export default DecrementIcon