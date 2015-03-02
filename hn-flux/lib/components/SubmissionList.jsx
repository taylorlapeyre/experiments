import React from 'react'
import SubmissionStore from '../stores/SubmissionStore'
import Submission from './Submission.jsx!'

var SubmissionList = React.createClass({

  getInitialState() {
    return {submissions: SubmissionStore.getAllByScore()};
  },

  componentDidMount() {
    SubmissionStore.addChangeListener(this._onChange);
  },

  render() {
    let subs = this.state.submissions.map(sub => {
      return <Submission title={sub.title} url={sub.url} score={sub.score} />
    });

    return <ul>{subs}</ul>
  },

  _onChange() {
    this.setState({submissions: SubmissionStore.getAllByScore()});
  }

})

export default SubmissionList
