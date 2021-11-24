// Libraries
import React from 'react'
import Head from 'next/head'
import Home from '@/views/Home'

const HomePage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Home | Tiket Learning Carnival</title>
            </Head>
            <Home />
        </React.Fragment>
    )
}

export default HomePage
