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

            <div className={styles.about}>
                <Section>
                    <Label title={'About tiket.com Learning Festival'} />
                    <article>
                        <p>
                            Cursus aliquet in duis sit sed. Aenean est quis
                            varius tempus vel amet euismod et. Tempus amet
                            congue adipiscing nunc amet blandit adipiscing.
                            Turpis senectus ultrices ornare dui etiam. Lectus
                            eget a ipsum at sed egestas faucibus tellus velit.{' '}
                        </p>
                        <br />
                        <p>
                            Cursus aliquet in duis sit sed. Aenean est quis
                            varius tempus vel amet euismod et. Tempus amet
                            congue adipiscing nunc amet blandit adipiscing.
                            Turpis senectus ultrices ornare dui etiam. Lectus
                            eget a ipsum at sed egestas faucibus tellus velit.{' '}
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
