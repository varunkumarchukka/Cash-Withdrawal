// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachItem, denominationValue} = props
  const {value} = eachItem

  const onDecrement = () => {
    denominationValue(value)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onDecrement}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
