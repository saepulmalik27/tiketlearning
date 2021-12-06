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
                        id: 'about_sidebar',
                    },
                    {
                        url: '#schedule',
                        label: 'MySchedule',
                        id: 'schedule_sidebar',
                    },
                    {
                        url: '#podcast',
                        label: 'On-Demand Learning',
                        id: 'podcast_sidebar',
                    },
                    {
                        url: '#leaderboard',
                        label: 'Leaderboard',
                        id: 'leaderboard_sidebar',
                    },
                    {
                        url: '#challenge',
                        label: 'Challenge',
                        id: 'challenge_sidebar',
                    },
                    {
                        url: '#postit',
                        label: 'Post-it',
                        id: 'postit_sidebar',
                    },
                    {
                        url: '#photobooth',
                        label: 'PhotoBooth',
                        id: 'photobooth_sidebar',
                    },
                    {
                        url: 'https://member.inspigo.id/forgot-password',
                        label: 'Forgot Password',
                        id: 'forgot-password_menu',
                    },
                ]}
            />
        </div>
    )
}

export default Sidebar
