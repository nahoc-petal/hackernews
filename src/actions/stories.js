import {
  REQUEST_TOP_STORIES,
  RECEIVE_TOP_STORIES,
  REQUEST_STORY,
  RECEIVE_STORY,
} from './types'
import Api from './../utils/api'

function requestStory() {
  return {
    type: REQUEST_STORY,
  }
}

function receiveStory(json) {
  return {
    type: RECEIVE_STORY,
    storyItem: json,
  }
}

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

export function fetchStoryById(id) {
  console.log(id)
  return function (dispatch) {
    dispatch(requestStory())
    return Api.get(`/item/${id}.json`)
      .then(
        response => dispatch(receiveStory(response)),
        error => console.log(error),
      )
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

