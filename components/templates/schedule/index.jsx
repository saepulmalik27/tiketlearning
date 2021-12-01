import styles from './style.module.scss'
import React, { useEffect } from 'react'
import Label from '@/components/molecules/label'

import * as colors from '@/styles/App.module.scss'
import Carousel from '@/components/organisms/carousel'
import CardEvent from '@/components/organisms/card-event'
import PropTypes from 'prop-types'

const Schedule = ({ events, getEvents, type }) => {
    useEffect(() => {
        getEvents()
    }, [events.length])

    const renderEvent = () => {
        if (type === 'user') {
            return events.map((val, key) => {
                return (
                    <CardEvent
                        key={key}
                        banner={val.banner}
                        event={{
                            title: val.title,
                            content: val.description,
                            // date: '3 Desember 2021, 15.00 - 17:00',
                        }}
                        cta={val.actions}
                        variant={'column'}
                        label={{
                            category: 'Webinar',
                            style: {
                                backgroundColor: colors.subText,
                                color: colors.white,
                            },
                        }}
                    />
                )
            })
        } else {
            return null
        }
    }

    return (
        <div className={styles.schedule} id="schedule">
            <Label
                title={'My Schedule'}
                description={
                    "To see a variety of class schedules held by the Learning Festival Presented by tiket.com, you can access the classes below! You can immediately take the class by clicking Join Room and the link will be integrated directly with your zoom meeting. Prepare yourself to take the classes held and don't miss it!"
                }></Label>
            <Carousel>{renderEvent()}</Carousel>
        </div>
    )
}

Schedule.propTypes = {
    events: PropTypes.array,
    getEvents: PropTypes.func,
    type: PropTypes.string,
}

export default Schedule
