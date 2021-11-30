import React from 'react'
// import PropTypes from 'prop-types'
import Image from 'next/image'
import styles from './style.module.scss'
import Button from '@/components/atoms/button'
import Section from '@/components/organisms/section'

const Photobooth = props => {
    return (
        <div className={styles.photobooth} id="photobooth">
            <div className={styles.photobooth_intersect}>
                <Image
                    src="/images/top-intersect.png"
                    width="1440"
                    height="344"
                />
            </div>
            <div className={styles.photobooth_container}>
                <Section>
                    <div className={styles.photobooth_card}>
                        <div className={styles.photobooth_card_header}>
                            <h1>Give Your Best Smile</h1>
                            <p>Try this virtual photo booth!</p>
                        </div>
                        <div className={styles.photobooth_card_body}>
                            <div>
                                <Image
                                    src={'/images/photobooth_tiket.png'}
                                    width="400"
                                    height="400"
                                />
                            </div>
                            <div>
                                <Image
                                    src={'/images/photobooth_tiket2.png'}
                                    width="400"
                                    height="400"
                                />
                            </div>
                        </div>
                        <div className={styles.photobooth_card_footer}>
                            <Button
                                label="Take Photo"
                                cta={() => {
                                    window.open(
                                        'https://app.virtualbooth.me/booth/pd38VkLV',
                                        '_blank'
                                    )
                                }}
                                variant={'secondary'}
                            />
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    )
}

// Photobooth.propTypes = {

// }

export default Photobooth
