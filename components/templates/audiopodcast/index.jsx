import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import Section from '@/components/organisms/section'
import Container2Column from '@/components/molecules/containers/2column'
import Card from '@/components/organisms/card'
import { fetchAuthFromLocal } from '@/utils/function'

const AudioPodcast = props => {
    const [access, setAccess] = useState('')
    useEffect(() => {
        getAccess()
    }, [access])

    const getAccess = () => {
        const user = fetchAuthFromLocal()
        const accessToken = user.token.refresh
        setAccess(accessToken)
    }
    return (
        <Section
            id="podcast"
            decoration={[
                {
                    src: '/images/decoration-star.png',
                    style: {
                        position: 'absolute',
                        bottom: '20%',
                        left: '30%',
                        width: '3.125rem',
                        height: '3.125rem',
                    },
                    width: '77',
                    height: '86',
                },
            ]}>
            <Container2Column illu={'/images/podcast.png'}>
                <Card
                    title={{
                        type: 'image',
                        content: '/images/decoration-atom.png',
                        width: '73',
                        height: '80',
                    }}
                    cta={[
                        {
                            label: 'Learn More',
                            src: `https://member.inspigo.id/home/corporate/tiket?refresh=${access}`,
                            behavior: '_self',
                        },
                    ]}>
                    <h1 className="m-b-1"> On-Demand Learning </h1>
                    <p>
                        Come on! Challenge yourself to Take Classes and listen
                        to existing Audio Podcasts and Video Learning.
                    </p>
                </Card>
            </Container2Column>
        </Section>
    )
}

// AudioPodcast.propTypes = {

// }

export default AudioPodcast
