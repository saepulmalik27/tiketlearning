import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '@/components/atoms/Input'
import styles from './style.module.scss'
import Label from '@/components/molecules/label'
import Button from '@/components/atoms/button'
import { validateEmail } from '@/utils/function'
import Icon from '@/components/atoms/icon'
import cx from 'classnames'

const LoginForm = ({ authLogin, authData }) => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState(authData.email)

    const handleChange = (e, val) => {
        switch (val) {
            case 'password':
                setPassword(e)
                break
            case 'email':
                setEmail(e)
                break
            default:
                break
        }
    }

    const renderEmailValidation = () => {
        if (email.length > 5 && validateEmail(email) === false) {
            return (
                <div className={cx(styles.notvalid, 'm-b-0')}>
                    <Icon name="warning" multiplier={1} />
                    <p>email not valid</p>
                </div>
            )
        } else {
            return null
        }
    }

    const renderError = () => {
        if (authData.error_message !== '') {
            return (
                <div className="m-b-0">
                    {authData.error_message === 'unauthorized' ? (
                        <div className={styles.notvalid}>
                            <Icon name="warning" multiplier={1} />
                            <p>email and password are not match</p>
                        </div>
                    ) : (
                        <div className={styles.notvalid}>
                            <Icon name="warning" multiplier={1} />
                            <p>{authData.error_message}</p>
                        </div>
                    )}
                </div>
            )
        } else {
            return null
        }
    }

    const handleSubmit = () => {
        authLogin({ email, password })
        // window.open('/', '_self')
    }

    return (
        <div className={styles.loginform}>
            <Label
                title={'Sign in'}
                description="<p>Please sign in with your registered account</p>"
            />
            <Input
                label="Email"
                icon={'email'}
                value={email}
                onChange={e => handleChange(e, 'email')}
            />
            {renderEmailValidation()}

            <Input
                type="password"
                label="Password"
                icon={'lock'}
                value={password}
                onChange={e => handleChange(e, 'password')}
            />
            {renderError()}
            <Button
                label="submit"
                variant="primary"
                id="login"
                cta={handleSubmit}
            />
        </div>
    )
}

LoginForm.propTypes = {
    authLogin: PropTypes.func,
    authData: PropTypes.oneOfType([PropTypes.object]),
}

export default LoginForm
