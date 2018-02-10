import {
  REQUEST_TOP_STORIES,
  RECEIVE_TOP_STORIES,
} from './../actions/types'

export default function searchFilters(
  state = {
    isFetching: false,
    topStories: [],
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
        topStories: action.topStories,
      })
    default:
      return state
  }
}

