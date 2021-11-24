import Link from 'next/link'
import React from 'react'
import Icon from '../icon'

const Logo = () => {
    return (
        <Link href={'/'}>
            <a>
                <Icon name="tiketLogo" multiplier={1} />
            </a>
        </Link>
    )
}

export default Logo
