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
    displayIndex: 0
  }

  componentDidMount(){ // executes as soon as component loads
    fetch(API)
    .then(res => res.json())
    .then((res) => {
      this.setState({
        sushis: res
      })
    })
  }

  eat = (sushi) => {
    const newMoney = this.state.money - sushi.price

    if (!this.state.eaten.includes(sushi) && newMoney >= 0) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: newMoney
      })
    }
  }

  renderFourSushis = () => {
    return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex + 4)
  }

  getMoreSushis = (event) => {
    let getFourMore = this.state.displayIndex + 4
    if(getFourMore >= this.state.sushis.length){
      getFourMore = 0
    }
    this.setState({
      displayIndex: getFourMore
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eat={this.eat} eaten={this.state.eaten} sushis={this.renderFourSushis()} more={this.getMoreSushis}/>
        <Table money={this.state.money} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;