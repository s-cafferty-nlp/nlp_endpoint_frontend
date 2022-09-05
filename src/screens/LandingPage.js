import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import LandingImage from '../components/LandingImage'
import classes from './LandingPage.module.css'

const LandingPage = () => {
  let history = useNavigate()

  const startButtonHandler = (e) => {
    history('/textgen')
  }

  return (
    <div className={classes.landingContainer}>
      <Row>
        <Col>
          <div className={classes.languageJourneyDiv}>
            <h1 className={classes.languageJourney}>
              {'How to deploy an NLP endpoint!'}
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <LandingImage />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={classes.footerDiv}>
            <h1 className={classes.footerText}>
              {'Click below to start using the NLP endpoint!'}
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className={classes.letsGoButton} onClick={startButtonHandler}>
            CLICK HERE
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default LandingPage
