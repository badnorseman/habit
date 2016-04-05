import React, { Text } from 'react-native'
import styles from './NavBarRouteMapperStyles'

export const NavBarRouteMapper = {
  LeftButton: () => null,
  RightButton: () => null,
  Title: (route) => <Text style={styles.navBarTitle}>{route.title}</Text>
}
