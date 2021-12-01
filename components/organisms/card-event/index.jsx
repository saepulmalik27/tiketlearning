import Image from 'next/image'
import Button from 'components/atoms/button'
import styles from './style.module.scss'
import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const CardEvent = ({ banner, event, variant, cta, label }) => {
    let contentDirection = ''
    switch (variant) {
        case 'column':
            contentDirection = styles.column
            break
        case 'column-reverse':
            contentDirection = styles.column_reverse
            break
        case 'row-reverse':
            contentDirection = styles.row_reverse
            break
        default:
            contentDirection = ''
            break
    }

    const handleCta = (disabled, url) => {
        if (!disabled) {
            window.open(url)
        }
    }

    return (
        <div className={cx(styles.cardevent, contentDirection)}>
            <div className={styles.cardevent_illu}>
                <Image src={banner} width={300} height={168} />
            </div>
            <div className={styles.cardevent_event}>
                {/* <div style={label.style}>{label.category}</div> */}
                <div className={styles.cardevent_event__title}>
                    <h6>{event.title}</h6>
                </div>
                <article
                    className={styles.cardevent_event__description}
                    dangerouslySetInnerHTML={{
                        __html: event.content,
                    }}></article>
                <div>{event.date}</div>
            </div>
            <div className={styles.cardevent_cta}>
                {cta.map((val, key) => (
                    <Button
                        key={key}
                        variant={val.disabled ? 'secondary' : 'primary'}
                        cta={() => handleCta(val.disabled, val.url)}
                        label={val.title}
                        icon={false}
                        size={'small'}
                    />
                ))}
            </div>
        </div>
    )
}

CardEvent.propTypes = {
    banner: PropTypes.string,
    event: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
        date: PropTypes.string,
    }),
    variant: PropTypes.string,
    cta: PropTypes.array,
    label: PropTypes.shape({
        category: PropTypes.string,
        style: PropTypes.object,
    }),
    user: PropTypes.object,
}

CardEvent.defaultProps = {
    label: {
        category: null,
        style: null,
    },
}
export default CardEvent
