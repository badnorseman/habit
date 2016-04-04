import React, { Component, TabBarIOS, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './HabitMainStyles'

export default class HabitMain extends Component {
  constructor() {
    super()
    this.state = { tab: 1 }
  }
  setTab(tab) {
    this.setState({ tab })
  }
  render() {
    const barTintColor = 'rgb(0,150,136)'
    const tintColor = 'rgb(255,255,255)'
    return (
      <View style={styles.container}>
        <TabBarIOS
          barTintColor={barTintColor}
          tintColor={tintColor}
        >
          <Icon.TabBarItemIOS
            title="Back"
            iconName="arrow-back"
            iconSize={36}
            selected={this.state.tab === 1}
            onPress={() => this.setTab(1)}
          >
            <View><Text>{this.state}</Text></View>
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title="Start"
            iconName="play-arrow"
            iconSize={36}
            selected={this.state.tab === 2}
            onPress={() => this.setTab(2)}
          >
            <View><Text>{this.state}</Text></View>
          </Icon.TabBarItemIOS>
        </TabBarIOS>
      </View>
    )
  }
}
