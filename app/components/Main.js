import React, { Component, Navigator, View } from 'react-native'
import Dashboard from '../containers/Dashboard'
import HabitDetail from '../components/HabitDetail'
import HabitList from '../containers/HabitList'
import { NavBarRouteMapper } from '../components/NavBarRouteMapper'
import styles from './MainStyles'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.renderScene = this.renderScene.bind(this)
  }
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          ref="navigator"
          initialRoute={{ id: 'dashboard', title: 'My Habits', index: 0 }}
          renderScene={this.renderScene}
          navigationBar={this.renderNavBar()}
          configureScene={this.configureScene}
        />
      </View>
    )
  }
  renderScene(route, navigator) {
    switch (route.id) {
      case 'dashboard':
        return (<Dashboard navigator={navigator} />)
      case 'habitlist':
        return (<HabitList navigator={navigator} />)
      case 'habitdetail':
        return (<HabitDetail navigator={navigator} data={route.data} actions={route.actions} />)
    }
  }
  renderNavBar() {
    return (<Navigator.NavigationBar routeMapper={NavBarRouteMapper} style={styles.navBar}/>)
  }
  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom
  }
}
