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
    const checked = new Date(data.checked).toDateString()
    const checkable = data.started && !data.checked ? true :
      Date.parse(checked) < Date.parse(new Date().toDateString()) ? true : false
    return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {(data.started) &&
          <View>
            <Text style={styles.contentHeader}>My Activity</Text>
            <Text style={styles.contentText}>Started&#x20;{started}</Text>
            {(data.checked) &&
              <Text style={styles.contentText}>Last checked&#x20;{checked}</Text>
            }
          </View>
        }
        <Text style={styles.contentHeader}>{data.summary}</Text>
        <Text style={styles.contentText}>{data.description}</Text>
      </View>
      <View>
        {(checkable) && <Button onPress={() => {
          actions.checkUserHabit(data)
          navigator.pop()
        }}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>CHECK</Text>
          </View>
        </Button>}
        {(data.started) ?
          <Button onPress={() => {
            actions.endUserHabit(data)
            navigator.pop()
          }}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>END</Text>
            </View>
          </Button> :
          <Button onPress={() => {
            actions.startUserHabit(data)
            navigator.pop()
          }}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>START</Text>
            </View>
          </Button>
        }
      </View>
    </View>
  )}
}
