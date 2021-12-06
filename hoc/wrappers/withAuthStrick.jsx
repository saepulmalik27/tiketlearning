import { verifyToken } from '@/utils/function'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const withAuth = Component => {
    return function EnchancedComponent(props) {
        const Router = useRouter()
        const [verified, setVerified] = useState(false)

        useEffect(async () => {
            const accessToken = localStorage.getItem('accessToken')
            // if no accessToken was found,then we redirect to "/" page.
            if (!accessToken) {
                Router.replace('/login')
            } else {
                // we call the api that verifies the token.
                const data = await verifyToken(accessToken)
                // if token was verified we set the state.
                if (data.verified) {
                    setVerified(data.verified)
                } else {
                    // If the token was fraud we first remove it from localStorage and then redirect to "/"
                    localStorage.removeItem('accessToken')
                    localStorage.removeItem('refreshToken')
                    localStorage.removeItem('userData')

                    Router.replace('/login')
                }
            }
        }, [])

        if (verified) {
            return <Component {...props} />
        } else {
            return null
        }
    }
}

export default withAuth
