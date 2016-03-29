import React, { Text, TouchableOpacity } from 'react-native'
import styles from './NavBarRouteMapperStyles'

export const NavBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    if (index === 0) {
      return (
        <TouchableOpacity
          style={styles.navBarLeftButton}
          onPress={() => navigator.push({ id: 'habitlist', title: 'Habits' })}>
          <Text style={styles.navBarButtonText}>
            &#x276e;&#xA0;Habits
          </Text>
        </TouchableOpacity>
      )
    }
    const previousRoute = navState.routeStack[index - 1]
    return (
      <TouchableOpacity
        style={styles.navBarLeftButton}
        onPress={() => navigator.pop()}>
        <Text style={styles.navBarButtonText}>
          &#x276e;&#xA0;{previousRoute.title}
        </Text>
      </TouchableOpacity>
    )
  },
  RightButton: () => { return null },
  Title: (route) => <Text style={styles.navBarTitle}>{route.title}</Text>
}
