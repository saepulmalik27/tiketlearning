import styles from './style.module.scss'
import React from 'react'
import Label from '@/components/molecules/label'

import * as colors from '@/styles/App.module.scss'
import Carousel from '@/components/organisms/carousel'
import CardEvent from '@/components/organisms/card-event'

const Schedule = () => {
    return (
        <div className={styles.schedule} id="schedule">
            <Label
                title={'My Schedule'}
                description={
                    "To see a variety of class schedules held by the Learning Festival Presented by tiket.com, you can access the classes below! You can immediately take the class by clicking Join Room and the link will be integrated directly with your zoom meeting. Prepare yourself to take the classes held and don't miss it!"
                }></Label>
            <Carousel>
                <CardEvent
                    banner={'/images/speaker.png'}
                    event={{
                        title: 'Collaboration A cross Generation',
                        content: '<p>Harry Prasetyo</p>',
                        date: '3 Desember 2021, 15.00 - 17:00',
                    }}
                    cta={[{ title: 'Gabung', url: 'https://google.com' }]}
                    variant={'column'}
                    label={{
                        category: 'Webinar',
                        style: {
                            backgroundColor: colors.subText,
                            color: colors.white,
                        },
                    }}
                />
                <CardEvent
                    banner={'/images/speaker.png'}
                    event={{
                        title: 'Collaboration A cross Generation',
                        content: '<p>Harry Prasetyo</p>',
                        date: '3 Desember 2021, 15.00 - 17:00',
                    }}
                    cta={[{ title: 'Gabung', url: 'https://google.com' }]}
                    variant={'column'}
                    label={{
                        category: 'Webinar',
                        style: {
                            backgroundColor: colors.subText,
                            color: colors.white,
                        },
                    }}
                />
                <CardEvent
                    banner={'/images/speaker.png'}
                    event={{
                        title: 'Collaboration A cross Generation',
                        content: '<p>Harry Prasetyo</p>',
                        date: '3 Desember 2021, 15.00 - 17:00',
                    }}
                    cta={[{ title: 'Gabung', url: 'https://google.com' }]}
                    variant={'column'}
                    label={{
                        category: 'Webinar',
                        style: {
                            backgroundColor: colors.subText,
                            color: colors.white,
                        },
                    }}
                />
                <CardEvent
                    banner={'/images/speaker.png'}
                    event={{
                        title: 'Collaboration A cross Generation',
                        content: '<p>Harry Prasetyo</p>',
                        date: '3 Desember 2021, 15.00 - 17:00',
                    }}
                    cta={[{ title: 'Gabung', url: 'https://google.com' }]}
                    variant={'column'}
                    label={{
                        category: 'Webinar',
                        style: {
                            backgroundColor: colors.subText,
                            color: colors.white,
                        },
                    }}
                />
            </Carousel>
        </div>
    )
}

export default Schedule
