import React, { Component, TabBarIOS, View } from 'react-native'
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
      <TabBarIOS
        barTintColor={barTintColor}
        tintColor={tintColor}
        style={styles.container}
      >
        <Icon.TabBarItemIOS
          title="Back"
          iconName="arrow-back"
          iconSize={36}
          selected={this.state.tab === 1}
          onPress={() => this.setTab(1)}
        >
          <View></View>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Start"
          iconName="add-circle-outline"
          iconSize={36}
          selected={this.state.tab === 2}
          onPress={() => this.setTab(2)}
        >
          <View></View>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="End"
          iconName="remove-circle-outline"
          iconSize={36}
          selected={this.state.tab === 3}
          onPress={() => this.setTab(3)}
        >
          <View></View>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Check"
          iconName="check"
          iconSize={36}
          selected={this.state.tab === 4}
          onPress={() => this.setTab(4)}
        >
          <View></View>
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    )
  }
}
