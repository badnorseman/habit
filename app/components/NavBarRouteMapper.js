import React, { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './NavBarRouteMapperStyles'
import { logAllDoc } from '../utils/logAllDoc'

export const NavBarRouteMapper = {
  LeftButton: (route, navigator, index) => {
    if (index === 0) {
      return (
        <TouchableOpacity
          style={styles.navBarLeftButton}
          onPress={() => navigator.push({ id: 'habitlist', title: 'Habits' })}>
          <Icon name="chevron-left" style={styles.navBarButtonIcon} />
          <Text style={styles.navBarButtonText}>Habits</Text>
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        style={styles.navBarLeftButton}
        onPress={() => navigator.pop()}>
        <Icon name="chevron-left" style={styles.navBarButtonIcon} />
      </TouchableOpacity>
    )
  },
  RightButton: () => {
    // return null
    return (
      <TouchableOpacity
        style={styles.navBarRightButton}
        onPress={() => logAllDoc()}>
        <Icon name="adb" style={styles.navBarButtonIcon} />
      </TouchableOpacity>
    )
  },
  Title: (route) => <Text style={styles.navBarTitle}>{route.title}</Text>
}
