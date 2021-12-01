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
                        },
                        {
                            url: '#schedule',
                            label: 'MySchedule',
                        },
                        {
                            url: '#podcast',
                            label: 'On-Demand Learning',
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
