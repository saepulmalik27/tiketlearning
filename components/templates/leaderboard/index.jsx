import React from 'react'
// import PropTypes from 'prop-types'
import Section from '@/components/organisms/section'
import Container2Column from '@/components/molecules/containers/2column'
import Card from '@/components/organisms/card'

const Leaderboard = props => {
    return (
        <Section>
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
                            src: 'https://www.learningtiket.com',
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
