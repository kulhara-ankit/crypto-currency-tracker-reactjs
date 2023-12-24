import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptoCurrenciesList from '../CryptocurrenciesList'
import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptoCurrencyTracker extends Component {
  state = {
    cryptocurrenciesDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrencyData()
  }

  getCryptoCurrencyData = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    const updatedCurrencyData = data.map(eachData => ({
      id: eachData.id,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      currencyLogo: eachData.currency_logo,
    }))
    this.setState({
      cryptocurrenciesDetails: updatedCurrencyData,
      isLoading: false,
    })
  }

  loadingSpinner = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderCryptocurrenciesList = () => {
    const {cryptocurrenciesDetails} = this.state
    return (
      <CryptoCurrenciesList cryptocurrenciesDetails={cryptocurrenciesDetails} />
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.loadingSpinner() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptoCurrencyTracker
