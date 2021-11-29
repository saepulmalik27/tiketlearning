import Logo from '@/components/atoms/logo'
import styles from './style.module.scss'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../navbar'
import Humberger from '../humberger'
import Sidebar from '../sidebar'

const Appbar = ({ activeSidebar, sidebarState }) => {
    const [activeNav, setActiveNav] = useState(true)

    const renderSidebar = () => {
        if (activeNav) {
            return null
        } else {
            return <Sidebar />
        }
    }

    const toggleNav = () => {
        setActiveNav(!activeNav)
    }

    return (
        <div className={styles.appbar}>
            <Logo />
            <div className={styles.toolbar}>
                <Navbar
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
            {renderSidebar()}
            <div className={styles.humberger}>
                <Humberger
                    open={!activeNav}
                    toggleNav={() => {
                        toggleNav()
                    }}
                />
            </div>
        </div>
    )
}

Appbar.propTypes = {
    activeSidebar: PropTypes.func,
    sidebarState: PropTypes.bool,
}

export default Appbar
