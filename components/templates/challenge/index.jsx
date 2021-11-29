import React from 'react'
// import PropTypes from 'prop-types'
import Section from '@/components/organisms/section'
import Container2Column from '@/components/molecules/containers/2column'
import Card from '@/components/organisms/card'

const Challenge = props => {
    return (
        <Section>
            <Container2Column illu={'/images/cuate.png'}>
                <Card
                    title={{
                        type: 'image',
                        content: '/images/challange_header.png',
                        width: '42',
                        height: '31',
                    }}
                    cta={[
                        {
                            label: 'Learn More',
                            src: 'https://www.learningtiket.com',
                        },
                    ]}>
                    <h1 className="m-b-1"> List of Challenge </h1>
                    <p>
                        Come on! Challenge yourself to Take Classes and listen
                        to existing Audio Podcasts and Video Learning.
                    </p>
                </Card>
            </Container2Column>
        </Section>
    )
}

// Challenge.propTypes = {

// }

export default Challenge
