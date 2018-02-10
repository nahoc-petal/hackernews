// @flow

import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { fetchStoryById, fetchTopStoriesIds } from './../actions/stories'
import { AppColors } from './../theme'
import Row from './Row'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.brand.secondary,
  },
})

class MainScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentWillMount() {
    this.props.fetchTopStoriesIds().then((response) => {
      this.renderTopStories(response.topStoriesItems)
    }).catch((error) => {
      console.log(error)
    })
  }

  renderTopStories(topStoriesIds) {
    topStoriesIds.forEach((storyId) => {
      this.props.fetchStoryById(storyId).then(response => (
        this.setState(prevState => ({
          data: [...prevState.data, response.storyItem],
        }))
      ))
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.data ?
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <Row key={item.id} title={item.title} />)}
          /> : null }
      </View>
    )
  }
}

MainScreen.propTypes = {
  fetchTopStoriesIds: PropTypes.func.isRequired,
  fetchStoryById: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
}

MainScreen.defaultProps = {
  isFetching: false,
}

// MAP STATE TO PROPS
const mapStateToProps = ({ stories }) => {
  const { isFetching, topStoriesItems, storyItem } = stories
  return { isFetching, topStoriesItems, storyItem }
}

const mapDispatchToProps = dispatch => ({
  fetchStoryById: storyId =>
    dispatch(fetchStoryById(storyId)),
  fetchTopStoriesIds: () =>
    dispatch(fetchTopStoriesIds()),
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Login' })),
})

MainScreen.navigationOptions = {
  title: 'Hacker News',
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)

