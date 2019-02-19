import React, { Component } from 'react';
import City from './components/City'

class App extends Component {
  constructor() {
    super()
    this.state = {
      search: '', // current value in the search form
      city: { name: 'Helsinki', temperature: 21 },  // current city that is displayed
    }
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Searched for', this.state.search)
  }

  render() {
    return (
      <div>
        <h1>Sää</h1>
          Etsi kaupunki:
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.search} onChange={this.handleChange}/>
            <input type="submit" value="Etsi" />
          </form>
          <City city={this.state.city} />
      </div>
    );
  }
}

export default App;
