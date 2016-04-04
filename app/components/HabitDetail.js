import React, { Alert, Component, PropTypes, Text, View } from 'react-native'
import { startHabit } from '../utils/startHabit'
import Button from '../components/Button'
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
    const { data } = this.props
    const startable = data.started ? false : true
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.contentHeader}>{data.summary}</Text>
          <Text style={styles.contentText}>{data.description}</Text>
        </View>
        <View>
          {(startable) &&
            <Button onPress={() => startHabit(data).then(data => this.change(data))}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>START</Text>
              </View>
            </Button>
          }
        </View>
      </View>
    )
  }
}
