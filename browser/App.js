import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// import components
import Main from './Main'

render(
  (
    <Router>
      <div className="app">
        <main>
          <Route path="/" component={Main} />
        </main>
      </div>
    </Router>
  ), document.getElementById('app')
)