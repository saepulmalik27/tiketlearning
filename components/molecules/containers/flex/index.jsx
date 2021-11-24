import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

const ContainerFlex = ({ children }) => {
    return <div className={styles.containerFlex}>{children}</div>
}

ContainerFlex.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.object,
        PropTypes.array,
    ]),
}

export default ContainerFlex
