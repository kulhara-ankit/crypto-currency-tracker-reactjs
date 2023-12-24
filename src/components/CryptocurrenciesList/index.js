import {Component} from 'react'
import CryptoCurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptoCurrenciesList extends Component {
  renderCryptocurrenciesItemsView = () => {
    const {cryptocurrenciesDetails} = this.props
    return (
      <div className="cryptocurrencies-list-container">
        <div className="list-header">
          <p className="list-coin-type-heading">Coin Type</p>
          <div className="usd-and-euro-values-container">
            <p className="list-coin-value-heading">USD</p>
            <p className="list-coin-value-heading">EURO</p>
          </div>
        </div>
        <ul className="cryptocurrencies-list">
          {cryptocurrenciesDetails.map(eachCryptoCurrency => (
            <CryptoCurrencyItem
              key={eachCryptoCurrency.id}
              cryptoCurrencyDetails={eachCryptoCurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptocurrenciesItemsView()}
      </div>
    )
  }
}

export default CryptoCurrenciesList
