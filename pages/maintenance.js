import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const maintenance = () => {
    return (
        <div style={{ backgroundColor: '#FFFFFF' }}>
            <Head>
                <title>Maintenance | Tiket Learning Carnival</title>
            </Head>

            <center>
                <Image
                    src={'/images/under_contruction.png'}
                    width="500"
                    height="500"
                />
                <h1 className="text-primary">Will be live in December 6</h1>
            </center>
        </div>
    )
}

export default maintenance
