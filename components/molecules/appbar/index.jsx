import Logo from '@/components/atoms/logo'
import styles from './style.module.scss'
import React from 'react'
// import Humberger from '@/components/molecules/humberger'
import PropTypes from 'prop-types'
import Navbar from '../navbar'
import Humberger from '../humberger'
// import SidebarContainer from '@/containers/SidebarContainer'

const Appbar = ({ activeSidebar, sidebarState }) => {
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
            <div className={styles.humberger}>
                <Humberger />
            </div>
        </div>
    )
}

Appbar.propTypes = {
    activeSidebar: PropTypes.func,
    sidebarState: PropTypes.bool,
}

export default Appbar
