import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      isLoading: true
    };
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        console.log('-----------------------------------------------------')
        console.log(response.data);
        this.setState({ countries: response.data, isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: false, requestError: true });
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading && (
          <p>LOADING</p>
        )}
        <ul>
          {this.state.countries.map((country) => {
            console.log(country);
            return (
              <li>
                Name: {country.name}
                <br />
                Capital: {country.capital}
                <br />
                Continent: {country.region}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
