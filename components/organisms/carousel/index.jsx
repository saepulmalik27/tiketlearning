import React, { useRef } from 'react'
import cx from 'classnames'
import styles from './style.module.scss'
import PropTypes from 'prop-types'
import Icon from '@/components/atoms/icon'
import * as colors from '@/styles/App.module.scss'

const Carousel = ({ children, className, title }) => {
    const ref = useRef(null)
    const scroll = scrollOffset => {
        ref.current.scrollLeft += scrollOffset
    }

    return (
        <div>
            <div className={styles.header_container}>
                <h3 className={styles.header_container__title}>{title}</h3>
            </div>
            <div className={styles.body_container}>
                <div
                    className={cx(
                        styles.carousel,
                        children && children.length < 3 ? styles.center : '',
                        className
                    )}
                    ref={ref}>
                    {children}
                </div>
                {children && children.length > 1 ? (
                    <div
                        className={styles.navigation__left}
                        onClick={() => scroll(-200)}>
                        <Icon
                            name={'ArrowLeft'}
                            fill={colors.primaryBtn}
                            multiplier={1}
                        />
                    </div>
                ) : null}

                {children && children.length > 1 ? (
                    <div
                        className={styles.navigation__right}
                        onClick={() => scroll(200)}>
                        <Icon
                            name={'ArrowRight'}
                            fill={colors.primaryBtn}
                            multiplier={1}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    )
}

Carousel.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.element,
    ]),
    className: PropTypes.string,
    title: PropTypes.string,
}

Carousel.defaultProps = {
    children: [],
}

export default Carousel
