import Navbar from '@/components/molecules/navbar'
import { toggleSidebar } from '@/redux/actions/sidebar'
import { connect } from 'react-redux'
const mapStateToProps = ({ activeSidebar }) => ({ activeSidebar })

export default connect(mapStateToProps, { toggleSidebar })(Navbar)
