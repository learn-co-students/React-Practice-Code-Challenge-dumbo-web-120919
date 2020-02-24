import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    allSushis: [],
    eaten: [],
    currentSushi: 0,
    moneyRemaining: 100
  }
  //call fetch sushis when compoenent mounts
  componentDidMount() {
    this.fetchSushis()
  }
  //get all sushis and cache
  fetchSushis = () => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({
          allSushis: data
        })
      })
  }
  //get the current four sushis to render
  getCurrentSushis = () => {
    return this.state.allSushis.slice(this.state.currentSushi, this.state.currentSushi + 4)
  }
  //increase current sushi by 4
  moreSushi = () => {
    this.setState(prevState => ({
      currentSushi: prevState.currentSushi + 4
    }))
    console.log(this.state.currentSushi)
  }
  //eat a sushi
  eat = (sushi) => {
    if (sushi.price < this.state.moneyRemaining) {
      this.setState(prevState => ({
        eaten: [...this.state.eaten, sushi],
        moneyRemaining: prevState.moneyRemaining - sushi.price
      }))
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          currentSushis={this.getCurrentSushis()}
          moreSushi={this.moreSushi}
          eat={this.eat}
          eaten={this.state.eaten}
        />
        <Table
          moneyRemaining={this.state.moneyRemaining}
          eaten={this.state.eaten}
        />
      </div>
    );
  }
}

export default App;