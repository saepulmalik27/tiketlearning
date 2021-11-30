import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import Navbar from '@/containers/navbar'
const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Image
                src="/images/logo-tiket-learning.png"
                width="300"
                height="130"
            />
            <Navbar
                txcolor={'white'}
                variant={'column'}
                align="center"
                navitem={[
                    {
                        url: '#about',
                        label: 'About',
                    },
                    {
                        url: '#schedule',
                        label: 'MySchedule',
                    },
                    {
                        url: '#podcast',
                        label: 'OndemandLearning',
                    },
                    {
                        url: '#leaderboard',
                        label: 'Leaderboard',
                    },
                    {
                        url: '#challenge',
                        label: 'Challenge',
                    },
                    {
                        url: '#postit',
                        label: 'Post-it',
                    },
                    {
                        url: '#photobooth',
                        label: 'PhotoBooth',
                    },
                ]}
            />
        </div>
    )
}

export default Sidebar
