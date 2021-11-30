import React from 'react'
import Image from 'next/image'
import Section from '@/components/organisms/section'
import Label from '@/components/molecules/label'
import styles from './style.module.scss'

const About = () => {
    return (
        <>
            <div className={styles.top_intersect}>
                <Image
                    src={'/images/top-intersect.png'}
                    width="1440"
                    height="380"
                />
            </div>

            <div className={styles.about} id="about">
                <Section>
                    <Label title={'About Learning Festival'} />
                    <article>
                        <p>
                            Learning Festival is a series of events and learning
                            activities organized by tiket.com. As you are our
                            most important treasure, we want to facilitate you,
                            #Peopleattiket, in developing and mastering the
                            skills and talents you have. This festival is
                            specially dedicated to you who want to build
                            positive habits to discover other areas of
                            specialties that can broaden your skills and
                            experience.
                        </p>
                        <br />
                        <p>
                            This year’s Learning Festival brings up the tagline
                            “A Celebration of Knowledge”, in which every
                            activity would portray as a celebration that will
                            build your spirit in expanding knowledge and
                            insight. By inviting speakers with a diverse field
                            of expertise and also conducting daily challenges,
                            we want you to absorb and experience a new way of
                            learning, all of which you can access through this
                            website!
                        </p>
                        <br />
                        <p>
                            What are you waiting for! Let’s join the excitement
                            and we would like to welcome you to this learning
                            paradise! #ACelebrationOfKnowledge
                        </p>
                    </article>
                </Section>
            </div>

            <Image
                src={'/images/bottom-intersect.png'}
                width="1440"
                height="200"
            />
        </>
    )
}

export default About
