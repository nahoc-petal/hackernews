import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
  },
})

const Row = props => (
  <View key={props.id} style={styles.container}>
    {/*<Image source={{ uri: props.picture.large }} style={styles.photo} />*/}
    <Text style={styles.text}>
      {`${props.title}`}
    </Text>
  </View>
)

export default Row
