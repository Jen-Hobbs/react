import React, { Component } from 'react';
import './App.css';
import PlayerChoice from './PlayerChoice';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedOptions: []
    };
    this.handleClickOption = this.handleClickOption.bind(this);
  }

  handleClickOption(choice) {
    // const newOptions = this.state.clickedOptions;
    // newOptions.push(choice);

    // const newItem = { id: Math.random(), value: choice };// if you need a unique id
    // const newOptions = this.state.clickedOptions.concat(choice);
    const newOptions = [...this.state.clickedOptions, choice];

    console.log('this.state.clickedOptions', this.state.clickedOptions);
    console.log('newOptions', newOptions);
    this.setState({
      clickedOptions: newOptions
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {/* <img src="" />
        <button>Click</button>

        <img src="" />
        <button>Click</button>

        <img src="" />
        <button>Click</button> */}

        <PlayerChoice
          choice="Paper"
          onClickButton={this.handleClickOption}
        />
        <PlayerChoice
          choice="Scissors"
          onClickButton={this.handleClickOption}
        />
        <PlayerChoice
          choice="Rock"
          onClickButton={this.handleClickOption}
        />

        <ul>
          {this.state.clickedOptions.map((option, i) => {
            return (
              <li key={i}>{option}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
