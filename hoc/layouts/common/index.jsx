import React from 'react'
import PropTypes from 'prop-types'
import Header from '@/components/templates/header'
import Helpdesk from '@/components/molecules/Helpdesk'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Helpdesk />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.element,
    ]),
}

export default Layout
