import {
  REQUEST_TOP_STORIES,
  RECEIVE_TOP_STORIES,
} from './../actions/types'

export default function searchFilters(
  state = {
    isFetching: false,
    topStoriesItems: [],
  },
  action,
) {
  switch (action.type) {
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

