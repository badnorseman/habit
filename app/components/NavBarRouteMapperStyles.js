import React from 'react-native'
const { StyleSheet } = React

export default StyleSheet.create({
  navBarTitle: {
    color: 'rgb(255,255,255)',
    fontSize: 24
  },
  navBarLeftButton: {
    paddingLeft: 8,
    width: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  navBarRightButton: {
    paddingRight: 8,
    width: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  navBarButtonText: {
    color: 'rgba(255,255,255,0.70)',
    fontSize: 14,
    marginLeft: -8
  },
  navBarButtonIcon: {
    color: 'rgba(255,255,255,0.70)',
    fontSize: 32
  }
})
