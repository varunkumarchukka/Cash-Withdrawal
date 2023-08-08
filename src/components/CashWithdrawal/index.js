// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {rupees: 2000}

  denominationValue = value => {
    this.setState(prevState => ({rupees: prevState.rupees - value}))
  }

  render() {
    const {rupees} = this.state
    const {denominationsList} = this.props
    return (
      <div className="container">
        <div className="text-container">
          <div className="name-container">
            <div className="letter-bg">
              <p className="letter">v</p>
            </div>
            <p className="name">Varun Kumar</p>
          </div>
          <div className="your-balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{rupees}</p>
              <p className="in-rupees">In rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                eachItem={eachItem}
                key={eachItem.id}
                denominationValue={this.denominationValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
