import OnBoarding from '@/components/molecules/onboarding'
import { connect } from 'react-redux'

const mapStateToProps = ({ authData }) => ({ user: authData })

export default connect(mapStateToProps)(OnBoarding)
