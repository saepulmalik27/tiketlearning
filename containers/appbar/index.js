import Appbar from '@/components/molecules/appbar'
import { toggleSidebar } from '@/redux/actions/sidebar'
import { connect } from 'react-redux'
const mapStateToProps = ({ activeSidebar }) => ({ activeSidebar })

export default connect(mapStateToProps, { toggleSidebar })(Appbar)
