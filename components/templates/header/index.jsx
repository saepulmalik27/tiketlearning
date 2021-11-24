import Appbar from '@/components/molecules/appbar'
import React from 'react'
import styles from './style.module.scss'
const Header = () => {
    return (
        <header className={styles.header}>
            <Appbar />
        </header>
    )
}

export default Header
