import React, { Alert, Component, ListView, PropTypes, TabBarIOS, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ListHeader from '../components/ListHeader'
import { readHabits } from '../utils/readHabits'
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
    const { navigator } = this.props
    const { data } = this.state
    const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    const dataSource = ds.cloneWithRows(data.habits || [])
    const header = data.summary || 'Sorry, you can not select any habits.'
    const barTintColor = 'rgb(0,121,107)'
    const tintColor = 'rgb(255,255,255)'
    return (
      <TabBarIOS barTintColor={barTintColor} tintColor={tintColor}>
        <Icon.TabBarItemIOS
          iconName="home"
          selected={true}
          onPress={() => navigator.resetTo({ id: 'habitlist', title: 'Habits' })}>
          <View style={styles.container}>
            <ListHeader header={header} />
            <ListView
              automaticallyAdjustContentInsets={false}
              dataSource={dataSource}
              renderRow={this.renderRow} />
          </View>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          iconName="star"
          selected={false}
          onPress={() => navigator.resetTo({ id: 'dashboard', title: 'My Habits' })}>
        </Icon.TabBarItemIOS>
      </TabBarIOS>
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
    this.props.navigator.push({ id: 'habitdetail', title: rowData.title, data: rowData })
  }
}
