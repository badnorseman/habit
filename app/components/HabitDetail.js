import React, { Component, PropTypes, Text, View } from 'react-native'
import Button from '../components/Button'
import styles from './HabitDetailStyles'

export default class HabitDetail extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  render() {
    const { navigator, data, actions } = this.props
    const started = new Date(data.started).toDateString()
    return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {(data.started) &&
        <View>
          <Text style={styles.contentHeader}>My Activity</Text>
          <Text style={styles.contentText}>Started&#x20;{started}</Text>
        </View>}
        <Text style={styles.contentHeader}>{data.summary}</Text>
        <Text style={styles.contentText}>{data.description}</Text>
      </View>
      <View>
        {(data._id) ?
        <Button onPress={() => {
          actions.deleteUserhabit(data)
          navigator.pop()
        }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>END</Text>
          </View>
        </Button> :
        <Button onPress={() => {
          actions.createUserhabit(data)
          navigator.pop()
        }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>START</Text>
          </View>
        </Button>}
      </View>
    </View>
  )}
}
