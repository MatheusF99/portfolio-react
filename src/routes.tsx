import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './components/Landing/landing'

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Landing} />
    </BrowserRouter>
  )
}

export default Routes