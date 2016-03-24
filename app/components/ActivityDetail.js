import React, { Component, PropTypes, Text, View } from 'react-native'
import Button from '../components/Button'
import styles from './ActivityDetailStyles'

export default class ActivityDetail extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  render() {
    const { navigator, data, actions } = this.props
    const started = new Date(data.started).toDateString()
    const checked = new Date(data.checked).toDateString()
    return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.contentHeader}>My Activity</Text>
        <Text style={styles.contentText}>Started&#x20;{started}</Text>
        {(data.checked) &&
          <Text style={styles.contentText}>Last checked&#x20;{checked}</Text>
        }
      </View>
      <View>
        <Button onPress={() => {
          actions.checkHabit(data)
          navigator.pop()
        }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>CHECK</Text>
          </View>
        </Button>
        <Button onPress={() => {
          actions.endHabit(data)
          navigator.pop()
        }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>END</Text>
          </View>
        </Button>
      </View>
    </View>
  )}
}
