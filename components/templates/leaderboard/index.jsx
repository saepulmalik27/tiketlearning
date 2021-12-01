import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import Section from '@/components/organisms/section'
import Container2Column from '@/components/molecules/containers/2column'
import Card from '@/components/organisms/card'
import { fetchAuthFromLocal } from '@/utils/function'

const Leaderboard = props => {
    const [access, setAccess] = useState('')
    useEffect(() => {
        getAccess()
    }, [access])

    const getAccess = () => {
        const user = fetchAuthFromLocal()
        const accessToken = user.token.access
        setAccess(accessToken)
    }

    return (
        <Section
            id="leaderboard"
            decoration={[
                {
                    src: '/images/decoration-wave.png',
                    style: {
                        position: 'absolute',
                        bottom: '20%',
                        right: '10%',
                        width: '6.375rem',
                        height: '3.5rem',
                    },
                    width: '102',
                    height: '56',
                },
            ]}>
            <Container2Column
                variant="reversed"
                illu={'/images/tman-leaderboard.png'}>
                <Card
                    title={{
                        type: 'image',
                        content: '/images/decoration-board.png',
                        width: '102',
                        height: '90',
                    }}
                    cta={[
                        {
                            label: 'Learn More',
                            src: `https://member.inspigo.id/home/corporate-dashboard/tiket?token=${access}`,
                            behavior: '_self',
                        },
                    ]}>
                    <h1 className="m-b-1"> Leaderboard </h1>
                    <p>
                        Keep increasing your learning duration and find out
                        whether your name is listed in top 10!
                    </p>
                </Card>
            </Container2Column>
        </Section>
    )
}

Leaderboard.propTypes = {}

export default Leaderboard
