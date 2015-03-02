import events from 'nodelibs/events'
import Dispatcher from '../dispatchers/AppDispatcher'
import SubmissionConstants from '../constants/SubmissionConstants'


let EventEmitter = events.EventEmitter
let CHANGE_EVENT = "change";
var _submissions = [];

var SubmissionStore = Object.assign({}, EventEmitter.prototype, {

  getAll() {
    return _submissions;
  },

  getAllByScore() {
    return _submissions.sort((a, b) => {
      if (a.score > b.score) return -1
      if (a.score < b.score) return 1
      if (a.score === b.score) return 0
    })
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});


Dispatcher.register(action => {
  var text;

  switch (action.type) {

    case SubmissionConstants.RECEIVE_SUBMISSION:
      _submissions.push(action.submission);
      SubmissionStore.emitChange();
      break;

    default:
      // no op
  }
});

export default SubmissionStore
