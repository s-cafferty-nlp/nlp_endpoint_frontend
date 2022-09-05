import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import classes from './App.module.css'

import TextInferenceScreen from './screensInference/TextInferenceScreen'
import LandingPage from './screens/LandingPage'

const App = () => {
  return (
    <div className={classes.main}>
      <Router>
        <Header />
        <main>
          <div className={classes.container}>
            <Routes>
              <Route path='/' element={<LandingPage />} exact={true} />
              <Route
                path='/textgen'
                element={<TextInferenceScreen />}
                exact={true}
              />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  )
}

export default App
