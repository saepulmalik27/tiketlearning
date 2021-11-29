import Link from 'next/link'
import React from 'react'
import Icon from '../icon'
import { mediaMaxWidth, MobileBreakpoint } from '@/utils/breakpoints'

const Logo = () => {
    return (
        <Link href={'/'}>
            <a>
                <Icon
                    name="tiketLogo"
                    multiplier={mediaMaxWidth(MobileBreakpoint) ? 0.625 : 1}
                />
            </a>
        </Link>
    )
}

export default Logo
