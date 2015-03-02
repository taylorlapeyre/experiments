import React from 'react'
import SubmissionList from './SubmissionList.jsx!'

var style = {
  width: "70%",
  margin: "0 auto",
  fontFamily: "verdana",
  fontSize: "13px"
}


var App = React.createClass({

  render() {
    return (
      <div style={style}>
        <h1>Hacker News</h1>
        <SubmissionList />
      </div>
    )
  }

});


export default App
