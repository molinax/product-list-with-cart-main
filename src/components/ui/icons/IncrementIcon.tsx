import incrementIcon from '../../../../public/images/icon-increment-quantity.svg'

interface Props {
  style: string
  onClick: () => void
}

const IncrementIcon: React.FC<Props> = ({ style, onClick }) => {
  return (
    <span className={style} onClick={onClick}>
      <img src={incrementIcon} alt="Increment icon" />
    </span>
  )
}

export default IncrementIcon