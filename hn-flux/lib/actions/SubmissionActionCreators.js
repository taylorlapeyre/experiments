import Dispatcher from '../dispatchers/AppDispatcher'
import SubmissionConstants from '../constants/SubmissionConstants'

export default {

  receiveSubmission(submission) {
    Dispatcher.dispatch({
      type: SubmissionConstants.RECEIVE_SUBMISSION,
      submission: submission
    })
  }

};
