import Logo from '@/components/atoms/logo'
import styles from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../navbar'
import Humberger from '../humberger'
import Sidebar from '../sidebar'

const Appbar = ({ activeSidebar, toggleSidebar }) => {
    const renderSidebar = () => {
        if (!activeSidebar) {
            return null
        } else {
            return <Sidebar />
        }
    }

    return (
        <div className={styles.appbar}>
            <Logo />
            <div className={styles.toolbar}>
                <Navbar
                    navitem={[
                        {
                            url: '#about',
                            label: 'About',
                            id: 'about_menu',
                        },
                        {
                            url: '#schedule',
                            label: 'MySchedule',
                            id: 'schedule_menu',
                        },
                        {
                            url: '#podcast',
                            label: 'On-Demand Learning',
                            id: 'podcast_menu',
                        },
                        {
                            url: '#leaderboard',
                            label: 'Leaderboard',
                            id: 'leaderboard_menu',
                        },
                        {
                            url: '#challenge',
                            label: 'Challenge',
                            id: 'challenge_menu',
                        },
                        {
                            url: '#postit',
                            label: 'Post-it',
                            id: 'postit_menu',
                        },
                        {
                            url: '#photobooth',
                            label: 'PhotoBooth',
                            id: 'photobooth_menu',
                        },
                        {
                            url: 'https://member.inspigo.id/forgot-password',
                            label: 'Forgot Password',
                            id: 'forgot-password_menu',
                        },
                    ]}
                />
            </div>
            {renderSidebar()}
            <div className={styles.humberger}>
                <Humberger
                    open={activeSidebar}
                    toggleNav={() => {
                        toggleSidebar(!activeSidebar)
                    }}
                />
            </div>
        </div>
    )
}

Appbar.propTypes = {
    activeSidebar: PropTypes.bool,
    toggleSidebar: PropTypes.func,
}

export default Appbar
