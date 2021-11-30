// Libraries
import React, { useEffect } from 'react'
import Head from 'next/head'
import Home from '@/views/Home'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const HomePage = ({ email }) => {
    const router = useRouter()
    useEffect(() => {
        if (email === '') {
            router.push('/login')
        }
    }, [email])
    return (
        <React.Fragment>
            <Head>
                <title>Home | Tiket Learning Carnival</title>
            </Head>
            <Home />
        </React.Fragment>
    )
}

const mapStateToProps = ({ authData }) => ({
    email: authData.email,
})

HomePage.propTypes = {
    email: PropTypes.string,
}

export default connect(mapStateToProps)(HomePage)
