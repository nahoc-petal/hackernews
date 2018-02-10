import {
  REQUEST_TOP_STORIES,
  RECEIVE_TOP_STORIES,
  REQUEST_STORY,
  RECEIVE_STORY,
} from './../actions/types'

export default function searchFilters(
  state = {
    isFetching: false,
    topStoriesItems: [],
  },
  action,
) {
  switch (action.type) {
    case REQUEST_STORY:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_STORY:
      return Object.assign({}, state, {
        isFetching: false,
        storyItem: action.storyItem,
      })
    case REQUEST_TOP_STORIES:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_TOP_STORIES:
      return Object.assign({}, state, {
        isFetching: false,
        topStoriesItems: action.topStories,
      })
    default:
      return state
  }
}

