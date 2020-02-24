import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
          props.currentSushis.map(sushi => {
            return <Sushi 
              sushiObj = {sushi} 
              key={sushi.created_at}
              eat={props.eat}
              eaten={props.eaten}
            />
          })
        }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer