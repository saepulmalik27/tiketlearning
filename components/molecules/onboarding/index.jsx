import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Link from 'next/link'
import cx from 'classnames'
const OnBoarding = ({ user }) => {
    return (
        <div className={cx(styles.onboarding, 'text-primary')}>
            <div>
                <p>Hi, {user.name}!</p>
            </div>

            <div>
                {user.email !== '' ? (
                    <Link href="/login">
                        <a>Logout</a>
                    </Link>
                ) : (
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                )}
            </div>
        </div>
    )
}

OnBoarding.propTypes = {
    user: PropTypes.object,
}

export default OnBoarding
