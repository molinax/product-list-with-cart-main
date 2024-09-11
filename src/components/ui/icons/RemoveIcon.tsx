import removeIcon from '../../../../public/images/icon-remove-item.svg'

interface Props {
  style: string
  onClick: () => void
}

const RemoveIcon: React.FC<Props> = ({ style, onClick }) => {
  return (
    <span className={style} onClick={onClick}>
      <img src={removeIcon} alt="Decrement icon" />
    </span>
  )
}

export default RemoveIcon