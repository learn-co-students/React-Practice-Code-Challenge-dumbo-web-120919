import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
          onClick={() => props.eat(props.sushiObj)}>
        { 
          props.eaten.includes(props.sushiObj)
          ?
            null
          :
            <img alt = "sushi" src={props.sushiObj.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiObj.name} - ${props.sushiObj.price}
      </h4>
    </div>
  )
}

export default Sushi