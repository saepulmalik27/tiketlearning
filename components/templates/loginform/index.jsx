import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import Input from '@/components/atoms/Input'
import styles from './style.module.scss'
import Label from '@/components/molecules/label'
import Button from '@/components/atoms/button'

const LoginForm = props => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

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
            <Input
                label="Password"
                icon={'lock'}
                value={password}
                onChange={e => handleChange(e, 'password')}
            />
            <Button label="submit" variant="primary" />
        </div>
    )
}

// LoginForm.propTypes = {

// }

export default LoginForm
