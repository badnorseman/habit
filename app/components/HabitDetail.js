import React, { Component, PropTypes, Text, View } from 'react-native'
import Button from './Button'
import styles from './HabitDetailStyles'

export default class HabitDetail extends Component {
  static propTypes = {
    nav: PropTypes.object.isRequired,
    habit: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  render = () => {
    const { habit } = this.props
    return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{habit.nameLong}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{habit.description}</Text>
      </View>
      <View>
        {(habit.selected)
          ?
          <Button onPress={() => this.props.actions.unselectHabit(habit)}>
            <View style={styles.buttonContainer}>
              <Text style={[ styles.buttonText, styles.unselect ]}>UNSELECT</Text>
            </View>
          </Button>
          :
          <Button onPress={() => this.props.actions.selectHabit(habit)}>
            <View style={[ styles.buttonContainer, styles.select ]}>
              <Text style={styles.buttonText}>SELECT</Text>
            </View>
          </Button>
        }
      </View>
      <View>
        <Button onPress={() => this.onBack}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>BACK</Text>
          </View>
        </Button>
      </View>
    </View>
  )};
  onBack = () => this.props.nav.pop();
}
