import React from 'react'
// import PropTypes from 'prop-types'
import Section from '@/components/organisms/section'
import Container2Column from '@/components/molecules/containers/2column'
import Card from '@/components/organisms/card'

const Challenge = props => {
    return (
        <Section
            id="challenge"
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
            <Container2Column illu={'/images/ask-speaker.png'}>
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
                            src: 'https://forms.gle/wxyLL4MXpkVyhWab8',
                            id: 'challenge',
                            behavior: '_blank',
                        },
                    ]}>
                    <h1 className="m-b-1"> Ask The Speakers! </h1>
                    <p>
                        You can take part in the Closing Ceremony events by Ask
                        to our Special Guest Speaker, Mr. Sandiaga Uno (Ministry
                        of Tourism and Creative Economy) by Submit your best
                        question. It will be curated by Learning Festival 2021
                        Teams to be asked directly to Mr. Sandiaga on our
                        Closing Ceremony Event.
                    </p>
                </Card>
            </Container2Column>
        </Section>
    )
}

// Challenge.propTypes = {

// }

export default Challenge
