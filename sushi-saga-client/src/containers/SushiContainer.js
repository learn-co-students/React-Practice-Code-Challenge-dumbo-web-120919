import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  console.log(props.sushis)
  return (
    <Fragment>
      <div className="belt">
        { props.sushis ? props.sushis.map(sushi => {
          return <Sushi sushi={sushi}
          key={sushi.id}
          eat={props.eat}
          eaten={props.eaten.includes(sushi)} />
        }) : null

        }
        <MoreButton getMore={props.more}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer