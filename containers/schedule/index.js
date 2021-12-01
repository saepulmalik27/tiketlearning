import Schedule from '@/components/templates/schedule'
import { getEvents } from '@/redux/actions/event'
import { connect } from 'react-redux'
const mapStateToProps = ({ eventData }) => ({
    events: eventData.schedules,
    type: eventData.type,
})

export default connect(mapStateToProps, { getEvents })(Schedule)
