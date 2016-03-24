import React, { Component, PropTypes, Text, View } from 'react-native'
import Button from '../components/Button'
import styles from './HabitDetailStyles'

export default class HabitDetail extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props)
    this.renderActivity = this.renderActivity.bind(this)
    this.renderActivityButtonBar = this.renderActivityButtonBar.bind(this)
  }
  render() {
    const { navigator, data, actions } = this.props
    return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {(data.started) && this.renderActivity(data)}
        <Text style={styles.contentHeader}>{data.summary}</Text>
        <Text style={styles.contentText}>{data.description}</Text>
      </View>
      <View>
        {(data.started) ? this.renderActivityButtonBar(navigator, data, actions) :
          <Button onPress={() => {
            actions.startHabit(data)
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
  renderActivity(data) {
    const started = new Date(data.started).toDateString()
    const checked = new Date(data.checked).toDateString()
    return (
      <View>
        <Text style={styles.contentHeader}>My Activity</Text>
        <Text style={styles.contentText}>Started&#x20;{started}</Text>
        {(data.checked) &&
          <Text style={styles.contentText}>Last checked&#x20;{checked}</Text>
        }
      </View>
    )
  }
  renderActivityButtonBar(navigator, data, actions) {
    return (
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
    )
  }
}
