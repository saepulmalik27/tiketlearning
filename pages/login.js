import React, { useEffect } from 'react'
import Head from 'next/head'
import Login from '@/views/Login'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const LoginPage = ({ user, email }) => {
    const router = useRouter()
    useEffect(() => {
        if (email !== '') {
            router.push('/')
        }
    }, [email])

    return (
        <React.Fragment>
            <Head>
                <title>Login | Tiket Learning Carnival</title>
            </Head>
            <Login />
        </React.Fragment>
    )
}

const mapStateToProps = ({ authData }) => ({
    user: authData,
    email: authData.email,
})

LoginPage.propTypes = {
    user: PropTypes.object,
    email: PropTypes.string,
}

export default connect(mapStateToProps)(LoginPage)
