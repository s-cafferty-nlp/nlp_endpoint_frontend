import {
  TEXT_GENERATION_FAIL,
  TEXT_GENERATION_REQUEST,
  TEXT_GENERATION_SUCCESS,
} from '../constants/inferenceConstants'

export const textGenerationReducer = (state = { output: '' }, action) => {
  switch (action.type) {
    case TEXT_GENERATION_REQUEST:
      return { loading: true }
    case TEXT_GENERATION_SUCCESS:
      return {
        loading: false,
        output: action.payload,
      }
    case TEXT_GENERATION_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
