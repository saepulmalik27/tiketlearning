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
                            id: 'challenge',
                        },
                    ]}>
                    <h1 className="m-b-1"> List of Challenge </h1>
                    <p>
                        You can take part in the challenge by sharing the key
                        takeaways that you get after taking the class on
                        Instagram Story using the template provided. Don’t
                        forget to tag @peopleattiket and use the hashtags
                        #LearningFestival2021 and #Peopleattiket on your
                        Instagram Story. Find out the full guideline here!
                    </p>
                </Card>
            </Container2Column>
        </Section>
    )
}

// Challenge.propTypes = {

// }

export default Challenge
