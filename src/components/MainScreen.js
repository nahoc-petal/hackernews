import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { fetchTopStoriesIds } from './../actions/stories'
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
      data: null,
    }
  }

  componentWillMount() {
    this.props.fetchTopStoriesIds().then((response) => {
      /*this.setState({
        data: response.topStoriesItems,
      })*/

    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.data ?
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <Row id={item} />)}
          /> : null }

        <Button
          title="Open Login Screen"
          onPress={() => console.log(this.state.dataSource)}
        />
      </View>
    )
  }
}

MainScreen.propTypes = {
  fetchTopStoriesIds: PropTypes.func.isRequired,
  topStoriesItems: PropTypes.array,
  isFetching: PropTypes.bool,
}

MainScreen.defaultProps = {
  topStoriesItems: [],
  isFetching: false,
}

// MAP STATE TO PROPS
const mapStateToProps = ({ stories }) => {
  const { isFetching, topStoriesItems } = stories
  return { isFetching, topStoriesItems }
}

const mapDispatchToProps = dispatch => ({
  fetchTopStoriesIds: () =>
    dispatch(fetchTopStoriesIds()),
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Login' })),
})

MainScreen.navigationOptions = {
  title: 'Hacker News',
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)

