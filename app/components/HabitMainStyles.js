import React from 'react-native'
const { StyleSheet } = React
import PADDINGTOP from '../constants/paddingTop'

export default StyleSheet.create({
  container: {
    paddingTop: PADDINGTOP,
    flex: 1,
    flexDirection: 'column'
  }
})
