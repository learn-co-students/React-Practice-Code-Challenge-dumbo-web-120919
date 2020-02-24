import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    money: 100,
    displayIndex: 0,
  }

  //upload API: initial render
  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then((res) => {
      this.setState({
        sushis: res
      })
    })
  }

  chooseFourSushis = () => {
    return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex+4)
  }

  more = (event) => {
    let newDisplayIndex = this.state.displayIndex + 4
    // takes the current display and adds 4 more

    this.setState({
      displayIndex: newDisplayIndex
    })
  }

  eat = (sushi) => {
    const newMoney = this.state.money - sushi.price

    if (!this.state.eaten.includes(sushi) && newMoney >=0 ) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: newMoney
      })
    }
  }

  render() {
  
    return (
      <div className="app">
        <SushiContainer 
        sushis={this.chooseFourSushis()}
        more={this.more}
        eat={this.eat}
        eaten={this.state.eaten}
        />
        <Table remainingBudget={this.state.money}
        eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;