// Libraries
import React, { useEffect } from 'react'
import Head from 'next/head'
import Home from '@/views/Home'
import { useRouter } from 'next/router'
import { updateUserSession } from '@/redux/actions/auth'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Loader from '@/containers/loader'

const HomePage = ({ token, updateUserSession }) => {
    const router = useRouter()

    useEffect(() => {
        authValidation()
    }, [token])

    const authValidation = () => {
        const accessToken = localStorage.getItem('accessToken')
        if (!accessToken) {
            router.push('/login')
        }
    }

    return (
        <React.Fragment>
            <Head>
                <title>Home | Tiket Learning Carnival</title>
            </Head>
            <Home />
            <Loader />
        </React.Fragment>
    )
}

HomePage.propTypes = {
    updateUserSession: PropTypes.func,
    token: PropTypes.string,
}

const mapStateToProps = ({ authData }) => ({ token: authData.token.access })

export default connect(mapStateToProps, { updateUserSession })(HomePage)
