import Link from 'next/link'
import React from 'react'
import Icon from '../icon'
import styles from './style.module.scss'

const Logo = () => {
    return (
        <Link href={'/'}>
            <a className={styles.logo}>
                <Icon name="tiketLogo" multiplier={1} />
            </a>
        </Link>
    )
}

export default Logo
