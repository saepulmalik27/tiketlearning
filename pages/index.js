// Libraries
import React, { useEffect } from 'react'
import Head from 'next/head'
import Home from '@/views/Home'
import { useRouter } from 'next/router'
import { updateUserSession } from '@/redux/actions/auth'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Loader from '@/containers/loader'
import withAuth from '@/hoc/wrappers/withAuth'

const HomePage = ({ authStatus }) => {
    const router = useRouter()

    useEffect(() => {
        authValidation()
    }, [authStatus])

    const authValidation = () => {
        const accessToken = localStorage.getItem('accessToken')
        if (!accessToken) {
            router.push('/login')
        }
    }

    return (
        <React.Fragment>
            <Head>
                <title>Home | Learning at tiket</title>
            </Head>
            <Home />
            <Loader />
        </React.Fragment>
    )
}

HomePage.propTypes = {
    authStatus: PropTypes.string,
    token: PropTypes.string,
}

const mapStateToProps = ({ authData }) => ({
    authStatus: authData.status,
})

export default connect(mapStateToProps, { updateUserSession })(
    withAuth(HomePage)
)
