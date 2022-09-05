import React from 'react'
import { Card } from 'react-bootstrap'
import classes from './ParagraphBox.module.css'

const ParagraphBox = (props) => {
  return (
    <div>
      <Card className={classes.paragraphCard}>
        <Card.Body>
          <Card.Title as='h3'>
            <strong>
              <h3 className={classes.paragraphHeader}>{props.title}</h3>
            </strong>
          </Card.Title>
          <Card.Text as='div'>
            <h3 className={classes.h3}>{props.paragraph}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ParagraphBox
