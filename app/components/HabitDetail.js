import React, { Alert, Component, PropTypes, Text, View } from 'react-native'
import { startHabit } from '../utils/startHabit'
import { checkHabit } from '../utils/checkHabit'
import { endHabit } from '../utils/endHabit'
import Button from '../components/Button'
import styles from './HabitDetailStyles'

export default class HabitDetail extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
  };
  handleResponse(data) {
    if (data.response && data.response.error) {
      Alert.alert(null, data.response.error)
    } else {
      // navigator.pop()
      this.props.navigator.replace({ id: 'dashboard', title: 'My Habits' })
    }
  }
  render() {
    const { data } = this.props
    const started = new Date(data.started).toDateString()
    const lastChecked = new Date(data.lastChecked).toDateString()
    const checkable = data.started && !data.lastChecked ? true :
      Date.parse(lastChecked) < Date.parse(new Date().toDateString()) ? true : false
    return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {(data.started) &&
          <View>
            <Text style={styles.contentHeader}>My Activity</Text>
            <Text style={styles.contentText}>Started&#x20;{started}</Text>
            {(data.lastChecked) &&
              <Text style={styles.contentText}>Last checked&#x20;{lastChecked}</Text>
            }
          </View>
        }
        <Text style={styles.contentHeader}>{data.summary}</Text>
        <Text style={styles.contentText}>{data.description}</Text>
      </View>
      <View>
        {(checkable) &&
          <Button onPress={() => checkHabit(data).then(data => this.handleResponse(data))}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>CHECK</Text>
            </View>
        </Button>}
        {(data.started) ?
          <Button onPress={() => endHabit(data).then(data => this.handleResponse(data))}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>END</Text>
            </View>
          </Button> :
          <Button onPress={() => startHabit(data).then(data => this.handleResponse(data))}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>START</Text>
            </View>
          </Button>
        }
      </View>
    </View>
  )}
}
