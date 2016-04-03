import React from 'react-native'
const { StyleSheet } = React

export default StyleSheet.create({
  navBarTitle: {
    color: 'rgb(255,255,255)',
    fontSize: 24
  },
  navBarLeftButton: {
    height: 100,
    width: 100,
    paddingLeft: 8,
    alignItems: 'flex-start'
  },
  navBarRightButton: {
    height: 100,
    width: 100,
    paddingRight: 8,
    alignItems: 'flex-end'
  },
  navBarButtonText: {
    color: 'rgba(255,255,255,0.70)',
    fontSize: 14
  },
  navBarButtonIcon: {
    color: 'rgba(255,255,255,0.70)',
    fontSize: 32
  }
})
