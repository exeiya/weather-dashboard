import React, { Component } from 'react';
import City from './components/City'
import FavoriteCities from './components/FavoritedCities'
import weatherService from './services/weather'
import SearchForm from './components/SearchForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      search: '',   // current value in the search form
      city: null,   // current city that is displayed
      favorites: [] // cities that have been added to favorites
    }
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const cityData = await weatherService.getCurrentTemp(this.state.search)
      this.setState({
        search: '',
        city: cityData
      })
    } catch (e) {
      console.log(e)
    }
  }

  getFavoriteTemp = (city) => async () => {
    try {
      const cityData = await weatherService.getCurrentTemp(city)
      this.setState({
        city: cityData
      })
    } catch (e) {
      console.log(e)
    }
  } 

  addFavorite = (cityName) => () => {
    if (!this.state.favorites.includes(cityName)){
      this.setState({
        favorites: this.state.favorites.concat(cityName)
      })
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Sää</h1>
          <SearchForm 
            search={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <City city={this.state.city} favorite={this.addFavorite}/>
          <FavoriteCities favorites={this.state.favorites} getCurrentTemp={this.getFavoriteTemp}/>
      </div>
    );
  }
}

export default App;
