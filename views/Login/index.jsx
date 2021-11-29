import React from 'react'
import Image from 'next/image'
import Section from '@/components/organisms/section'
import Card from '@/components/organisms/card'
import styles from './style.module.scss'
import LoginForm from '@/containers/loginform'
import Helpdesk from '@/components/molecules/Helpdesk'

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.login_bglayer}>
                <div>
                    <Image
                        src="/images/decoration-maskhero.png"
                        width="710"
                        height="414"
                    />
                </div>
                <div className={styles.bottom_layer}>
                    <Image
                        src="/images/login_intersect.png"
                        width="1440"
                        height="344"
                    />
                </div>
            </div>
            <div className={styles.login_container}>
                <Section className={styles.section}>
                    <div className={styles.item}>
                        <Card
                            title={{
                                type: 'image',
                                content: '/images/logo-tiket-learning.png',
                                width: '453',
                                height: '207',
                            }}
                            body="<p>Learning Festival is one of the series of events organized by tiket.com with the aim of facilitating #Peopleattiket to develop and master the skills you have. This event is also dedicated to you #Peopleattiket who want to build positive habits to learn about other skills and become a better person.</p>"
                        />
                    </div>
                    <div className={styles.item}>
                        <LoginForm />
                    </div>
                </Section>
            </div>
            <Helpdesk />
        </div>
    )
}

export default Login
