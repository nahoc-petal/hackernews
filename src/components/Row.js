import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { AppColors } from '../theme'

const styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: AppColors.white,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
    borderRadius: 2,
  },
  text: {
    fontSize: 14,
  },
  by: {
    fontSize: 11,
    color: AppColors.brand.secondary,
  },
  time: {
    fontSize: 11,
    color: AppColors.brand.secondary,
  },
  footer: {
    marginTop: 4,
  },
})

function timeAgo(ts) {
  const d = new Date()
  const nowTs = Math.floor(d.getTime() / 1000)
  const seconds = nowTs - ts

  if (seconds < 3600) {
    return `${Math.floor(seconds / 60)} minutes ago`
  } else if (seconds < 3600 * 2) {
    return '1 hour ago'
  } else if (seconds < 24 * 3600) {
    return `${Math.floor(seconds / 60 / 60)} hours ago`
  } else if (seconds < 48 * 3600) {
    return 'Yesterday'
  }
  return `${Math.floor(seconds / 60 / 60 / 24)} days ago`
}

const Row = props => (
  <TouchableOpacity
    onPress={() => Linking.openURL(props.url).catch(err => console.error('An error occurred', err))}
  >
    <View style={styles.card}>
      <Text style={styles.text}>
        {`${props.title}`}
      </Text>
      <Text style={styles.footer}>
        <Text style={styles.by}>
          {`by ${props.by} `}
        </Text>
        <Text style={styles.time}>
          {timeAgo(`${props.time}`)}
        </Text>
      </Text>
    </View>
  </TouchableOpacity>
)

Row.propTypes = {
  id: PropTypes.number.isRequired,
  by: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
}

export default Row
