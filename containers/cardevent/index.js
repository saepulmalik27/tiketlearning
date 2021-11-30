import CardEvent from '@/components/organisms/card-event'
import { connect } from 'react-redux'

const mapStateToProps = ({ authData }) => ({ user: authData })

export default connect(mapStateToProps)(CardEvent)
