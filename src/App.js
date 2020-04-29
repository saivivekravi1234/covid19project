import React, { Component } from 'react'
import Cards from './Components/Cards/Cards'
import Chart from './Components/Chart/Chart'
import CountryPicker from './Components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import  CoronaImage from './images/image.png'
import { fetchData } from './API'
class App extends Component {
    state = {
        data: {}
    }
    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData },()=>console.log(this.state))
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ data: fetchedData, country: country })
        console.log("in fetch data of fetcheddata")
        console.log(fetchedData)
    }
    render() {
        const { data, country } = this.state
        return (
            <div className={styles.container}>
<img className={styles.image} src={CoronaImage} alt="Covid-19"/>
                <Cards data={data} />
 <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
               
            </div>
        )
    }
}

export default App
