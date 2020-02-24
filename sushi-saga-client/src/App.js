import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:4000/sushis"

class App extends Component {

  state = {
    sushi: [],
    page: 1,
    plates: [],
    wallet: 100
  }

  // initial fetch on render
  componentDidMount() {
    this.initialSushiFetch()
  }
  initialSushiFetch = () => {
    fetch(API + "?_limit=4&_page=1")
    .then( r => r.json() )
    .then( sushi => {
      this.setState({
        sushi: sushi
      })
    })
  }

  // pulls the next 4 sushi on button click
  handleMoreButtonClick = () => {
    let newPage = this.state.page + 1
    fetch(API + `?_limit=4&_page=${newPage}`)
    .then( r => r.json() )
    .then( sushi => {
      this.setState({
        sushi: sushi,
        page: newPage
      })
    })
  }

  // handles a sushi being eaten and increments the plate count
  handleEat = (sushi) => {
    let newWallet = (this.state.wallet - sushi.price)
    let newPlatesArr = [...this.state.plates, "plate"]
    this.setState({ 
      plates: newPlatesArr,
      wallet: newWallet
    })
  }

  // render component
  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} handleMoreButtonClick={this.handleMoreButtonClick} handleEat={this.handleEat} wallet={this.state.wallet} />
        <Table plates={this.state.plates} wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;