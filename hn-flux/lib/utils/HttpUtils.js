import SubmissionActionCreators from '../actions/SubmissionActionCreators'

export function ajaxGet(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject("Error Occured");
      }
    };
    xhr.send();
  });
}

export function fetchFrontPage() {
  ajaxGet("https://hacker-news.firebaseio.com/v0/topstories.json")
  .then(ids => {
    ids.map(id => ajaxGet(`https://hacker-news.firebaseio.com/v0/item/${id}.json`))
    .forEach(promise => {
      promise.then(submission => SubmissionActionCreators.receiveSubmission(submission));
    })
  })
}
