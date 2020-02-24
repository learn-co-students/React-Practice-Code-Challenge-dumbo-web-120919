import React from 'react'

const Sushi = (props) => { // i don't like this. make this into a class instead of a function. better for it to have it's own state.
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=> props.eat(props.sushi)}>
        { 
          props.eaten ?
            null
          :
            <img src={props.sushi.img_url} alt={props.sushi.name} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi