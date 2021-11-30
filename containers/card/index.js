import Card from '@/components/organisms/card'
import { connect } from 'react-redux'

const mapStateToProps = ({ authData }) => ({ user: authData })

export default connect(mapStateToProps)(Card)
