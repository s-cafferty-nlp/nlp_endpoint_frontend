import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { textGenerationReducer } from './reducers/inferenceReducers'

const reducer = combineReducers({
  textGeneration: textGenerationReducer,
})

// const cartItemsFromStorage = localStorage.getItem('cartItems')
//   ? JSON.parse(localStorage.getItem('cartItems'))
//   : []

// const answerDataFromStorage = localStorage.getItem('answerData')
//   ? JSON.parse(localStorage.getItem('answerData'))
//   : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

// const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
//   ? JSON.parse(localStorage.getItem('shippingAddress'))
//   : {}

const initializeParametersFromStorage = localStorage.getItem(
  'initializeParameters'
)
  ? JSON.parse(localStorage.getItem('initializeParameters'))
  : {}

const initializeCustomParametersFromStorage = localStorage.getItem(
  'initializeCustomParameters'
)
  ? JSON.parse(localStorage.getItem('initializeCustomParameters'))
  : {}

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  // answers: {
  //   answerData: answerDataFromStorage,
  // },

  initialize: { initializeParameters: initializeParametersFromStorage },
  initializeCustom: {
    initializeCustomParameters: initializeCustomParametersFromStorage,
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
