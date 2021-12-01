import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { fetchAuthFromLocal } from '@/utils/function'

const OnBoarding = ({ LogoutAction }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        getAuthFromLocal()
    }, [name])

    const getAuthFromLocal = () => {
        const user = fetchAuthFromLocal()
        if (user) {
            setName(user.name)
            setEmail(user.email)
        }
    }

    const router = useRouter()
    return (
        <div className={cx(styles.onboarding, 'text-primary')}>
            <div>
                <p>Hi, {name}!</p>
            </div>

            <div>
                {email !== '' ? (
                    <p
                        className={styles.link}
                        onClick={() => {
                            LogoutAction()
                        }}>
                        Logout
                    </p>
                ) : (
                    <p
                        className={styles.link}
                        onClick={() => {
                            router.push('/login')
                        }}>
                        Login
                    </p>
                )}
            </div>
        </div>
    )
}

OnBoarding.propTypes = {
    user: PropTypes.object,
    LogoutAction: PropTypes.func,
}

export default OnBoarding
