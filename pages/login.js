import React, { useEffect } from 'react'
import Head from 'next/head'
import Login from '@/views/Login'
import { useRouter } from 'next/router'
import Loader from '@/containers/loader'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const LoginPage = ({ token }) => {
    const router = useRouter()
    useEffect(() => {
        authValidation()
    }, [token])

    const authValidation = () => {
        if (token) {
            router.push('/')
        }
    }
    return (
        <React.Fragment>
            <Head>
                <title>Login | learning at tiket</title>
            </Head>
            <Login />
            <Loader />
        </React.Fragment>
    )
}

LoginPage.propTypes = {
    token: PropTypes.string,
}

const mapStateToProps = ({ authData }) => ({ token: authData.token.access })

export default connect(mapStateToProps)(LoginPage)
