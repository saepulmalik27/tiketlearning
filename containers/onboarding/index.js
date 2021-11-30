import OnBoarding from '@/components/molecules/onboarding'
import { LogoutAction } from '@/redux/actions/auth'
import { connect } from 'react-redux'

export default connect(null, { LogoutAction })(OnBoarding)
