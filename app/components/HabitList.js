import React, { Component, ListView, PropTypes, Text, TouchableOpacity, View } from 'react-native'
// import { readHabits } from '../utils/readHabits'
import ListHeader from '../components/ListHeader'
import styles from './HabitListStyles'
import dbUrl from '../constants/dbUrl'
import headers from '../constants/headers'
import { readDoc } from '../utils/readDoc'

export default class HabitList extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
    this.renderRow = this.renderRow.bind(this)
    this.pressRow = this.pressRow.bind(this)
  }
  componentDidMount() {
    this.setState({ data: this.readHabits() })
    this.props.actions.getHabits()
  }
  async readHabits() {
    try {
      let res = await readDoc(`${dbUrl}/habit`, headers)
      let json = await res.json()
      return json
    } catch(err) {
      console.error(err)
    }
  }
  render() {
    console.log(this.state.data['_65'])
    const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    const dataSource = ds.cloneWithRows(this.props.data.habits || [])
    const header = this.props.data.summary || 'Sorry, you can not select any habits.'
    return (
      <View style={styles.container}>
        <ListHeader header={header} />
        <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={dataSource}
          renderRow={this.renderRow}
        />
      </View>
    )
  }
  renderRow(rowData: {}, sectionId: number, rowId: number) {
    return (
      <TouchableOpacity key={`${sectionId}${rowId}`} onPress={() => this.pressRow(rowData)}>
        <View style={styles.rowContentContainer}>
          <Text style={styles.rowContentHeader}>{rowData.title}</Text>
          <Text style={styles.rowContentText} numberOfLines={2}>{rowData.summary}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  pressRow(rowData: {}) {
    this.props.navigator.push({
      id: 'habitdetail', title: rowData.title, data: rowData, actions: this.props.actions
    })
  }
}
