import React from 'react-native'
const { StyleSheet } = React
import PADDINGTOP from '../constants/paddingTop'

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255,255,255)',
    paddingTop: PADDINGTOP,
    paddingLeft: 16,
    paddingRight: 8,
    flex: 1,
    flexDirection: 'column'
  },
  contentHeader: {
    color: 'rgba(0,105,92,0.87)',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 24,
    marginBottom: 16
  },
  contentText: {
    color: 'rgba(0,0,0,0.54)',
    fontSize: 14
  }
})
