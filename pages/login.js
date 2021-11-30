import React, { useEffect } from 'react'
import Head from 'next/head'
import Login from '@/views/Login'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Loader from '@/components/molecules/loader'

const LoginPage = ({ user, email }) => {
    const router = useRouter()
    useEffect(() => {
        if (email !== '') {
            router.push('/')
        }
    }, [email])

    const renderLoader = () => {
        if (user.loading === true) {
            return <Loader />
        } else {
            return null
        }
    }

    return (
        <React.Fragment>
            <Head>
                <title>Login | Tiket Learning Carnival</title>
            </Head>
            <Login />
            {renderLoader()}
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
