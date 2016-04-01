import React, { Component } from 'react-native'
import { initializeDatabase } from '../utils/initializeDatabase'
import Main from '../components/Main'

initializeDatabase()

export default class App extends Component {
  render() {
    return (
      <Main />
    )
  }
}
