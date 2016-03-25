import React, { Component, PropTypes, TouchableOpacity } from 'react-native'

export default class Button extends Component {
  static propTypes = {
    ...TouchableOpacity.propTypes,
    disabled: PropTypes.bool,
    children: PropTypes.element.isRequired
  };
  render() {
    let touchableProps = {}
    if (!this.props.disabled) {
      touchableProps.onPress = this.props.onPress
      touchableProps.onPressIn = this.props.onPressIn
      touchableProps.onPressOut = this.props.onPressOut
      touchableProps.onLongPress = this.props.onLongPress
    }
    return (
      <TouchableOpacity {...touchableProps}>
        {this.props.children}
      </TouchableOpacity>
    )
  }
}
