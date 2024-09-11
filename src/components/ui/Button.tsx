interface Props {
  value: string
  disabled?: boolean
  onClick: () => void
}

const Button: React.FC<Props> = ({ value, disabled, onClick }) => {
  return (
    <button
      className={`${disabled ? "opacity-70 cursor-default" : "cursor-pointer"} bg-red py-3 px-4 rounded-full text-rose_50 hover:opacity-70 transition-d-200`}
      disabled={disabled}
      onClick={onClick}>
      {value}
    </button>
  )
}

export default Button