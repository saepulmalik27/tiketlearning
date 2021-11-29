import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'

const Helpdesk = () => {
    return (
        <div
            className={styles.helpdesk}
            onClick={() => {
                window.open(
                    'https://tiket.slack.com/archives/C02NH3Q4U8M',
                    '_blank'
                )
            }}>
            <div className={styles.illu}>
                <Image src={'/images/slack.png'} width={40} height={40} />
            </div>
            <div className={styles.illu}>
                <Image src="/images/helpdesk.png" width={57} height={12} />
            </div>
        </div>
    )
}

export default Helpdesk
