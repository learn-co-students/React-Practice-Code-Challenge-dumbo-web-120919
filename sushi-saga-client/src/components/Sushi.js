import React from 'react'

class Sushi extends React.Component {

  state = {
    eaten: false
  }

  handleInitialEat = () => {
    if (this.props.sushi.price <= this.props.wallet) {
      this.setState({
        eaten: true
      })
      this.props.handleEat(this.props.sushi)
    } else {
      alert("You don't have enough money, bub!")
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.handleInitialEat}>
          { 
            this.state.eaten ? 
            null : 
            <img src={this.props.sushi.img_url} alt="sushi" width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
} 

export default Sushi