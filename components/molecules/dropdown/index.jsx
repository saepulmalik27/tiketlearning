import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import styles from './style.module.scss'

const DropDown = ({ label, children }) => {
    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown_container}>
                <p>{label}</p>
                <Icon name="Chevron" multiplier={1} fill={'black'} />
            </div>
            <div>{children}</div>
        </div>
    )
}

DropDown.propTypes = {
    label: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
}

export default DropDown
