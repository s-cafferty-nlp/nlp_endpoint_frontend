import React from 'react'
import { Card } from 'react-bootstrap'
import classes from './ParagraphBox.module.css'
import { LinkContainer } from 'react-router-bootstrap'

const ParagraphBox = (props) => {
  return (
    <div>
      {/* <LinkContainer to={`/studentclassrooms/${classroom.classroom._id}`}> */}
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
      {/* // </LinkContainer> */}
    </div>
  )
}

export default ParagraphBox
