import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    displayIndex: 0,
    eaten: [],
    budget: 100,
  }

  handleSushiClick = (sushi) => {
    const newBudget = this.state.budget - sushi.price

    if(!this.state.eaten.includes(sushi) && newBudget >= 0 ) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        budget: newBudget
      })
    }
  }

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then(sushis => {
      this.setState({
        sushis
      })
    })
  }

  renderFirstFourSushis = () => {
    return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex + 4)
  }

  renderMoreSushis = (e) => {
    let newDisplayIndex = this.state.displayIndex + 4
    this.setState({
      displayIndex: newDisplayIndex
    })
  }

  handleAddMoney = (e) => {
    e.preventDefault()

    let addedMoney = Number(e.currentTarget.children[0].value)
    // console.log(e.target.value)

    if (!addedMoney) {
      addedMoney = 0
    }

    this.setState({
      budget: this.state.budget + addedMoney
    })

  }

  render() {
    return (
      <div className="app">

        <form onSubmit={this.handleAddMoney}> Add More Money
          <input type="number" />
          <input type="submit" />
        </form>

        <SushiContainer 
        sushis={this.renderFirstFourSushis()} 
        more={this.renderMoreSushis}
        handleSushiClick={this.handleSushiClick}
        eaten={this.state.eaten} />
        <Table 
        budget={this.state.budget} 
        eaten={this.state.eaten} />
      
      </div>
    );
  }
}

export default App;