import React from 'react'
import PropTypes from 'prop-types'
import Section from '@/components/organisms/section'
import Card from '@/components/organisms/card'
import Icon from '@/components/atoms/icon'
import Link from 'next/link'
import ContainerFlex from '@/components/molecules/containers/flex'
import Label from '@/components/molecules/label'
import styles from './style.module.scss'
import Image from 'next/image'
import cx from 'classnames'
import OnBoarding from '@/components/molecules/onboarding'

const Hero = props => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_bg}>
                <div>
                    <Image
                        src={'/images/decoration-maskhero.png'}
                        width="710"
                        height="414"
                    />
                </div>
            </div>
            <Section>
                <OnBoarding user={{ name: 'Malik' }} />
                <div className={styles.hero_container}>
                    <div className={styles.item}>
                        <Card
                            title={{
                                type: 'image',
                                content: '/images/logo-tiket-learning.png',
                            }}
                            cta={[]}>
                            <Label title={'A Celebration of Knowledge'} />

                            <div className="m-b-1">
                                <ContainerFlex>
                                    <div className="p-r-1">
                                        <Icon name="instagram" multiplier={1} />
                                    </div>
                                    <Link href="https://www.instagram.com/peopleattiket/">
                                        <a> @peopleattiket</a>
                                    </Link>
                                </ContainerFlex>
                            </div>
                            <div className="m-b-1">
                                <ContainerFlex>
                                    <div className="p-r-1">
                                        <Icon name="browser" multiplier={1} />
                                    </div>
                                    <Link href="https://www.learningtiket.com">
                                        <a> www.learningtiket.com</a>
                                    </Link>
                                </ContainerFlex>
                            </div>
                            <div className="m-b-1">
                                <ContainerFlex>
                                    <div className="p-r-1">
                                        <Icon
                                            name="youtubeCircle"
                                            multiplier={1.25}
                                        />
                                    </div>
                                    <Link href="https://www.instagram.com/peopleattiket/">
                                        <a> People at Tiket</a>
                                    </Link>
                                </ContainerFlex>
                            </div>
                        </Card>
                    </div>
                    <div className={cx(styles.item, styles.illu)}>
                        <Image
                            src={'/images/hero_tman.png'}
                            width="500"
                            height="500"
                        />
                    </div>
                </div>
            </Section>
        </div>
    )
}

Hero.propTypes = {
    content: PropTypes.string,
}

export default Hero