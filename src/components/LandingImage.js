import React from 'react'
import classes from './LandingImage.module.css'

const LandingImage = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <img className={classes.img} src={'/images/nlp_image.png'} />
      </div>
    </div>
  )
}

export default LandingImage
