import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userhabitActions from '../actions/userhabitActions'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  data: state.userhabits
})

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userhabitActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
