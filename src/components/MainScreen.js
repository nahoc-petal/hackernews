import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { fetchTopStories } from './../actions/stories'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

class MainScreen extends React.Component {
  componentWillMount() {
    this.props.fetchTopStories()
  }

  render() {
    return (
      <View style={styles.container}>
       {/*
        <Button
          title="Open Login Screen"
          onPress={this.props.loginScreen}
       />*/}
      </View>
    )
  }
}

MainScreen.propTypes = {
  loginScreen: PropTypes.func.isRequired,
  fetchTopStories: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  // isLoggedIn: state.auth.isLoggedIn,
})

const mapDispatchToProps = dispatch => ({
  fetchTopStories: () =>
    dispatch(fetchTopStories()),
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Login' })),
})

MainScreen.navigationOptions = {
  title: 'Hacker News',
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)

