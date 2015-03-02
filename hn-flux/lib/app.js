import React from 'react'
import {fetchFrontPage} from './utils/HttpUtils'
import App from './components/App.jsx!'

fetchFrontPage();

React.render(
  React.createElement(App, null),
  document.getElementById('app')
)
