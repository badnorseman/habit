import React, { Component, PropTypes, TouchableOpacity } from 'react-native'

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onPress: PropTypes.func.isRequired
  };
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        {this.props.children}
      </TouchableOpacity>
    )
  }
}
