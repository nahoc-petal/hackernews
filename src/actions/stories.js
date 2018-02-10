import {
  REQUEST_TOP_STORIES,
  RECEIVE_TOP_STORIES,
} from './types'
import Api from './../utils/api'

function requestTopStories() {
  return {
    type: REQUEST_TOP_STORIES,
  }
}

function receiveTopStories(json) {
  return {
    type: RECEIVE_TOP_STORIES,
    topStoriesItems: json,
  }
}

export function fetchTopStoriesIds() {
  return function (dispatch) {
    dispatch(requestTopStories())
    return Api.get('/topstories.json')
      .then(
        response => dispatch(receiveTopStories(response)),
        error => console.log(error),
      )
  }
}

