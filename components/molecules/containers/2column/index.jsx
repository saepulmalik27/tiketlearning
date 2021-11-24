import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Image from 'next/image'
import cx from 'classnames'
const Container2Column = ({ children, illu, variant }) => {
    let variation = ''
    switch (variant) {
        case 'reversed':
            variation = styles.reversed
            break

        default:
            variation = ''
            break
    }

    return (
        <div className={cx(styles.container, variation)}>
            <div className={styles.item}>{children}</div>
            <div className={styles.item}>
                <Image src={illu} width={500} height={500} />
            </div>
        </div>
    )
}

Container2Column.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.element,
    ]),
    illu: PropTypes.string,
    variant: PropTypes.string,
}

export default Container2Column
