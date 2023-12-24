import './index.css'

const CryptoCurrencyItem = props => {
  const {cryptoCurrencyDetails} = props
  const {
    currencyLogo,
    euroValue,
    usdValue,
    currencyName,
  } = cryptoCurrencyDetails

  return (
    <li className="crypto-currency-item">
      <div className="logo-and-title-container">
        <img className="currency-logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-and-euro-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoCurrencyItem
