import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      requestFailed: false
    };

    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount() {
    // Here, make request for data
    const promise = axios.get('https://dog.ceo/api/breed/chihuahua/images');
    promise
      .then(this.handleSuccess)
      .catch(this.handleError);

    // Can also write like this
    // axios.get('https://dog.ceo/api/breed/chihuahua/images')
    //   .then((response) => {
    //     this.setState({ images: response.data.message });
    //   })
    //   .catch(() => {
    //     this.setState({ requestFailed: true });
    //   });
  }

  handleSuccess(response) {
    console.log(response);
    this.setState({ images: response.data.message });
  }

  handleError() {
    this.setState({ requestFailed: true });
    // Handle Error
  }

  render() {
    console.log('render', this.state);

    if (this.state.requestFailed) {
      return <p>Something went wrong</p>;
    }

    return (
      <div className="App">
        <h1>Dog Images</h1>
        {this.state.images.map((imageUrl) => {
          return (
            <div key={imageUrl}>
              <img src={imageUrl} style={{ width: 200 }} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
