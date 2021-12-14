import React from 'react'
// import PropTypes from 'prop-types'
import Section from '@/components/organisms/section'
import Container2Column from '@/components/molecules/containers/2column'
import Card from '@/components/organisms/card'

const PostIt = props => {
    return (
        <Section
            id="postit"
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
                            src: 'https://padlet.com/broadcast5/PadletLFEdric2021',
                            id: 'postit',
                        },
                    ]}>
                    <h1 className="m-b-1"> Post-it </h1>
                    <p>
                        Share what you get after participating in the session.
                        You can click on the link below which will direct you to
                        the Google Jamboard that has been provided and you can
                        write key takeaways according to your style and be as
                        creative as possible.
                    </p>
                </Card>
            </Container2Column>
        </Section>
    )
}

// PostIt.propTypes = {

// }

export default PostIt
