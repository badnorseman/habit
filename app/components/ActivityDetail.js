import React, { Alert, Component, PropTypes, TabBarIOS, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { checkHabit } from '../utils/checkHabit'
import { endHabit } from '../utils/endHabit'
import styles from './ActivityDetailStyles'

export default class ActivityDetail extends Component {
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
    const started = new Date(data.started).toDateString()
    const lastChecked = new Date(data.lastChecked).toDateString()
    const checkable = data.started && !data.lastChecked ? true :
      Date.parse(lastChecked) < Date.parse(new Date().toDateString()) ? true : false
    const barTintColor = 'rgb(0,121,107)'
    const tintColor = 'rgb(255,255,255)'
    return (
      <TabBarIOS barTintColor={barTintColor} tintColor={tintColor}>
        <Icon.TabBarItemIOS
          iconName="arrow-back"
          selected={true}
          onPress={() => navigator.resetTo({ id: 'dashboard', title: 'My Habits' })}>
          <View style={styles.container}>
            <Text style={styles.contentHeader}>My Activity</Text>
            <Text style={styles.contentText}>Started&#x20;{started}</Text>
            {(data.lastChecked) &&
              <Text style={styles.contentText}>Last checked&#x20;{lastChecked}</Text>
            }
          </View>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          iconName="remove-circle"
          selected={false}
          onPress={() => endHabit(data).then(data => this.change(data))}>
        </Icon.TabBarItemIOS>
        {(checkable) &&
          <Icon.TabBarItemIOS
            iconName="check-circle"
            selected={false}
            onPress={() => checkHabit(data).then(data => this.change(data))}>
          </Icon.TabBarItemIOS>
        }
      </TabBarIOS>
    )
  }
}
