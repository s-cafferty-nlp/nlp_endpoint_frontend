import React, { useEffect, useState } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import { generateText } from '../actions/inferenceActions'
import Loader from '../components/Loader'
import ParagraphBox from '../components/ParagraphBox'
import classes from './TextInferenceScreen.module.css'

const TextInferenceScreen = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const textGeneration = useSelector((state) => state.textGeneration)
  const { loading, error, output } = textGeneration

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(generateText(input))
    console.log(input)
  }

  useEffect(() => {
    if (output) {
      setResult(output['message'])
    }
  }, [output])

  return (
    <div>
      <div className={classes.scrollContainer}>
        <Form>
          <Form.Group className='mb-3' controlId='Input'>
            <Form.Label>ENTER KEYWORD TO GENERATE TEXT</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter keyword.'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Form.Group>

          <Button
            variant='primary'
            type='submit'
            disabled={input.length == 0 ? true : false}
            onClick={submitHandler}
          >
            Submit
          </Button>
        </Form>
      </div>
      <div>
        <Row>
          <Col>
            {input.length > 0 ?? <h1>hello</h1>}
            {loading ? (
              <Loader />
            ) : output ? (
              <ParagraphBox
                title={`Keyword: ${input}`}
                paragraph={`Output: ${result.length > 0 ? result : ''}`}
              />
            ) : (
              <ParagraphBox title={`ERROR`} paragraph={`Try Again.`} />
            )}
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default TextInferenceScreen
