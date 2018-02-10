import React from 'react'
import { Dimensions, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import MainScreen from './../components/MainScreen'
import { addListener } from '../utils/redux'
import { AppColors } from '../theme'

const getOptions = (title, headerBackgroundColor, headerTextColor, headerBorderBottomWidth) => ({
  title: <Text numberOfLines={1}>{title}</Text>,
  headerStyle: {
    backgroundColor: headerBackgroundColor,
    borderBottomWidth: headerBorderBottomWidth,
  },
  headerBackTitle: null,
  headerTitleStyle: { width: Dimensions.get('window').width },
  headerTintColor: headerTextColor,
})

export const AppNavigator = StackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: getOptions('Hacker News', AppColors.brand.primary, AppColors.white, 0),
  },
})

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState)
