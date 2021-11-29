import LoginForm from '@/components/templates/loginform'
import { authLogin } from '@/redux/actions/auth'
import { connect } from 'react-redux'

const mapStateToProps = ({ authData }) => ({ authData })

export default connect(mapStateToProps, { authLogin })(LoginForm)
