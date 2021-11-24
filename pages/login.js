import React from 'react'
import Head from 'next/head'
import Login from '@/views/Login'

const HomePage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Login | Tiket Learning Carnival</title>
            </Head>
            <Login />
        </React.Fragment>
    )
}

export default HomePage
