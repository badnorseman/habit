import React, { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './NavBarRouteMapperStyles'
import { logAllDoc } from '../utils/logAllDoc'

export const NavBarRouteMapper = {
  LeftButton: (route, navigator, index) => {
    if (index === 0) {
      return (
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigator.push({ id: 'habitlist', title: 'Habits' })}>
          <View style={styles.navBarLeftButton}>
            <Icon name="chevron-left" style={styles.navBarButtonIcon} />
            <Text style={styles.navBarButtonText}>Habits</Text>
          </View>
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigator.pop()}>
        <View style={styles.navBarLeftButton}>
          <Icon name="chevron-left" style={styles.navBarButtonIcon} />
        </View>
      </TouchableOpacity>
    )
  },
  RightButton: () => {
    // return null
    return (
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => logAllDoc()}>
        <View style={styles.navBarRightButton}>
          <Icon name="adb" style={styles.navBarButtonIcon} />
        </View>
      </TouchableOpacity>
    )
  },
  Title: (route) => <Text style={styles.navBarTitle}>{route.title}</Text>
}
