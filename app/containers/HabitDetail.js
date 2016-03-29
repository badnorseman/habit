import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userhabitActions from '../actions/userhabitActions'
import HabitDetail from '../components/HabitDetail'

const mapStateToProps = ownProps => ({
  ...ownProps
})

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userhabitActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitDetail)
