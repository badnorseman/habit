import React, { Alert, Component, ListView, PropTypes, Text, TouchableOpacity, View } from 'react-native'
import { readCustomer } from '../utils/readCustomer'
import ListHeader from '../components/ListHeader'
import styles from './DashboardStyles'

export default class Dashboard extends Component {
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
    this.readCustomer().then(data => this.setState({ data }))
  }
  async readCustomer() {
    try {
      return await readCustomer()
    } catch(err) {
      Alert.alert(null, err)
    }
  }
  render() {
    const { data } = this.state
    const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    const dataSource = ds.cloneWithRows(data.habits || [])
    const header = data.habits ? `Hey, your score is ${data.score}. Let\'s do a habit.` : 'Hey, I see nothing here. Let\'s start a habit.'
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
      <TouchableOpacity key={`${sectionId}${rowId}`} onPress={() => this.pressRow(rowData, rowId)}>
        <View style={styles.rowContentContainer}>
          <Text style={styles.rowContentHeader}>{rowId}</Text>
          <Text style={styles.rowContentText} numberOfLines={2}>{rowData.summary}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  pressRow(rowData: {}, rowId: number) {
    const data = Object.assign({}, rowData, { ['id']: rowId })
    this.props.navigator.push({ id: 'activitydetail', title: rowId, data })
  }
}
