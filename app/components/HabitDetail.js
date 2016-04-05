import React, { Alert, Component, PropTypes, TabBarIOS, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { startHabit } from '../utils/startHabit'
import styles from './HabitDetailStyles'

export default class HabitDetail extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
  };
  change(data) {
    if (data.response && data.response.error) {
      Alert.alert(null, data.response.error)
    } else {
      this.props.navigator.resetTo({ id: 'dashboard', title: 'My Habits' })
    }
  }
  render() {
    const { navigator, data } = this.props
    const startable = data.started ? false : true
    const barTintColor = 'rgb(0,121,107)'
    const tintColor = 'rgb(255,255,255)'
    return (
      <TabBarIOS barTintColor={barTintColor} tintColor={tintColor}>
        <Icon.TabBarItemIOS
          iconName="arrow-back"
          selected={true}
          onPress={() => navigator.resetTo({ id: 'habitlist', title: 'Habits' })}>
          <View style={styles.container}>
            <Text style={styles.contentHeader}>{data.summary}</Text>
            <Text style={styles.contentText}>{data.description}</Text>
          </View>
        </Icon.TabBarItemIOS>
        {(startable) &&
          <Icon.TabBarItemIOS
            iconName="add-circle"
            selected={false}
            onPress={() => startHabit(data).then(data => this.change(data))}>
          </Icon.TabBarItemIOS>
        }
      </TabBarIOS>
    )
  }
}
