import React from 'react'
// import PropTypes from 'prop-types'
import Section from '@/components/organisms/section'
import Container2Column from '@/components/molecules/containers/2column'
import Card from '@/components/organisms/card'

const PostIt = props => {
    return (
        <Section>
            <Container2Column variant="reversed" illu={'/images/postit.png'}>
                <Card
                    title={{
                        type: 'image',
                        content: '/images/post-it_header.png',
                        width: '85',
                        height: '107',
                    }}
                    cta={[
                        {
                            label: 'Learn More',
                            src: 'https://www.learningtiket.com',
                        },
                    ]}>
                    <h1 className="m-b-1"> Post-it </h1>
                    <p>
                        Come on! Challenge yourself to Take Classes and listen
                        to existing Audio Podcasts and Video Learning.
                    </p>
                </Card>
            </Container2Column>
        </Section>
    )
}

// PostIt.propTypes = {

// }

export default PostIt
