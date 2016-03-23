import React from 'react-native'
const { StyleSheet } = React
import PADDINGTOP from '../constants/paddingTop'

export default StyleSheet.create({
  container: {
    paddingTop: PADDINGTOP,
    flex: 1,
    flexDirection: 'column'
  },
  contentContainer: {
    backgroundColor: 'rgb(255,255,255)',
    paddingLeft: 16,
    paddingRight: 8,
    flex: 1
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
  },
  buttonContainer: {
    backgroundColor: 'rgb(0,150,136)',
    height: 72,
    marginBottom: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'rgb(255,255,255)',
    fontSize: 16,
    fontWeight: '500'
  }
})
