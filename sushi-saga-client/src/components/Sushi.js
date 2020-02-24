import React, { Fragment } from 'react'

const Sushi = (props) => {

  let { sushi } = props
  // console.log(sushi)
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.handleSushiClick(sushi)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.taken ?
            null
          :
            <img src={sushi.img_url} width="100%" alt="sushi" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi