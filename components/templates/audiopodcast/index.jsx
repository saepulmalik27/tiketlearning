import React from 'react'
// import PropTypes from 'prop-types'
import Section from '@/components/organisms/section'
import Container2Column from '@/components/molecules/containers/2column'
import Card from '@/components/organisms/card'

const AudioPodcast = props => {
    return (
        <Section id="podcast">
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
                            src: 'https://member.inspigo.id/home/corporate/tiket',
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
