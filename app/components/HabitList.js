import React, { Alert, Component, ListView, PropTypes, Text, TouchableOpacity, View } from 'react-native'
import { readHabits } from '../utils/readHabits'
import ListHeader from '../components/ListHeader'
import styles from './HabitListStyles'

export default class HabitList extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props)
    this.state = { data: {} }
    this.renderRow = this.renderRow.bind(this)
    this.pressRow = this.pressRow.bind(this)
  }
  componentDidMount() {
    this.readHabits().then(data => this.setState({ data }))
  }
  async readHabits() {
    try {
      return await readHabits()
    } catch(err) {
      Alert.alert(null, err)
    }
  }
  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    const dataSource = ds.cloneWithRows(this.state.data.habits || [])
    const header = this.state.data.summary || 'Sorry, you can not select any habits.'
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
      id: 'habitdetail', title: rowData.title, data: rowData
    })
  }
}
