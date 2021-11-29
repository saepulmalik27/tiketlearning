import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import Navbar from '../navbar'
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
                        url: 'https://google.com',
                        label: 'About',
                        behavior: '_blank',
                    },
                    {
                        url: 'https://google.com',
                        label: 'MySchedule',
                        behavior: '_blank',
                    },
                    {
                        url: 'https://google.com',
                        label: 'OndemandLearning',
                        behavior: '_blank',
                    },
                    {
                        url: 'https://google.com',
                        label: 'Leaderboard',
                        behavior: '_blank',
                    },
                    {
                        url: 'https://google.com',
                        label: 'Challenge',
                        behavior: '_blank',
                    },
                    {
                        url: 'https://google.com',
                        label: 'Post-it',
                        behavior: '_blank',
                    },
                    {
                        url: 'https://google.com',
                        label: 'PhotoBooth',
                        behavior: '_blank',
                    },
                ]}
            />
        </div>
    )
}

export default Sidebar
