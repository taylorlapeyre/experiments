import React from 'react'

var style = {
  li: {
    padding: 5,
    listStyle: "none"
  },

  score: {
    paddingRight: 10
  }
}

var Submission = React.createClass({
  render() {
    return (
      <li style={style.li}>
        <span style={style.score}>({this.props.score})</span>
        <a href={this.props.url}>{this.props.title}</a>
      </li>
    )
  }
})

export default Submission
