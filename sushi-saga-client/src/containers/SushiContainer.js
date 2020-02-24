import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  let sushiCards = props.sushi.map( sushi => <Sushi key={sushi.id} sushi={sushi} handleEat={props.handleEat} wallet={props.wallet} />)

  return (
    <Fragment>
      <div className="belt">
        {sushiCards}
        <MoreButton handleMoreButtonClick={props.handleMoreButtonClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer