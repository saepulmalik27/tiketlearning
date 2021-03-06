import React from 'react'
import styles from './style.module.scss'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Image from 'next/image'

const Section = props => {
    const { children, className, id, variant } = props
    let bgc = ''
    switch (variant) {
        case 'primary':
            bgc = styles.section_primary
            break
        default:
            bgc = ''
            break
    }
    return (
        <section
            className={cx(styles.section, bgc)}
            id={id}
            style={props.style || {}}>
            {props.decoration && props.decoration.length > 0
                ? props.decoration.map((val, key) => {
                      return (
                          <div style={val.style} key={key}>
                              <Image
                                  src={val.src}
                                  alt="decoration"
                                  width={val.width}
                                  height={val.height}
                              />
                          </div>
                      )
                  })
                : null}
            <div className={cx(styles.section_container, className)}>
                {children}
            </div>
        </section>
    )
}

Section.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
        PropTypes.object,
    ]),
    className: PropTypes.string,
    id: PropTypes.string,
    variant: PropTypes.string,
    decoration: PropTypes.array,
    style: PropTypes.object,
}

export default Section
