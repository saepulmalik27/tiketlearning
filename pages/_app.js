// Libraries
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

// Utils
import { IS_DEVELOPMENT } from 'utils/constants'

// Styles
import 'styles/App.global.scss'
import { wrapper } from '@/redux/store'
import TagManager from 'react-gtm-module'

const App = ({ Component, pageProps }) => {
    const meta = {
        title: 'tiket to inspire',
        image: 'https://cdn.inspigo.id/public/cover/meta-image.png',
        description: 'tiket to inspire collaboration tiket.com and inspigo',
        keywords:
            'tiket.com, inspigo, podcast, audio playbook, video on demand, #jadilebihsiap, learningattiket',
        url: 'https://www.learningattiket.com',
    }

    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-PFVNM47' })
    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>{meta.title}</title>

                <meta name="title" content={meta.title} />
                <meta name="image" content={meta.image} />
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta name="url" content={meta.url} />

                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:url" content={meta.url} />

                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://inspigo.id" />

                {IS_DEVELOPMENT && <meta name="robots" content="noindex" />}
            </Head>

            <Component {...pageProps} />
        </React.Fragment>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.any,
}

export default wrapper.withRedux(App)
