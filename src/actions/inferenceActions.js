import axios from 'axios'
import {
  TEXT_GENERATION_FAIL,
  TEXT_GENERATION_REQUEST,
  TEXT_GENERATION_SUCCESS,
} from '../constants/inferenceConstants'

export const generateText = (text) => async (dispatch) => {
  try {
    dispatch({
      type: TEXT_GENERATION_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('api/predict', { text }, config)

    dispatch({
      type: TEXT_GENERATION_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: TEXT_GENERATION_FAIL,
      payload: message,
    })
  }
}
