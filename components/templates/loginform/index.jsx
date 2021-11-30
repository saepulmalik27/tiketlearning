import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '@/components/atoms/Input'
import styles from './style.module.scss'
import Label from '@/components/molecules/label'
import Button from '@/components/atoms/button'
import { validateEmail } from '@/utils/function'
import Icon from '@/components/atoms/icon'

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
                <>
                    <p className={styles.notvalid}>
                        <Icon name="warning" multiplier={1} /> Email not valid
                    </p>
                </>
            )
        } else {
            return null
        }
    }

    const renderError = () => {
        if (authData.error_message !== '') {
            return (
                <p className={styles.notvalid}>
                    {' '}
                    <Icon name="warning" multiplier={1} /> email and password
                    not match{' '}
                </p>
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
                description="<p>Please insert your Inspigo account information</p>"
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
            <Button label="submit" variant="primary" cta={handleSubmit} />
        </div>
    )
}

LoginForm.propTypes = {
    authLogin: PropTypes.func,
    authData: PropTypes.oneOfType([PropTypes.object]),
}

export default LoginForm
