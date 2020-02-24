import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log(props)
  let { sushis } = props

  return (
    <Fragment>
      <div className="belt">
        {sushis.map((sushi) => {
          return <Sushi 
                  sushi={sushi} 
                  key={sushi.id}
                  handleSushiClick={props.handleSushiClick}
                  taken={props.eaten.includes(sushi)}
                   />
        })

        }
        <MoreButton more={props.more}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer