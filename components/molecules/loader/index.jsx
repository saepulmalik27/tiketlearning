import Spinner from '@/components/atoms/Spinner'
import React from 'react'
import styles from './style.module.scss'
import * as colors from '@/styles/App.module.scss'
import PropTypes from 'prop-types'
const Loader = ({ loading }) => {
    if (loading) {
        return (
            <div className={styles.loader}>
                <div className={styles.loader_container}>
                    <Spinner size={'10rem'} color={colors.secondaryPeach} />
                </div>
            </div>
        )
    } else {
        return null
    }
}

Loader.propTypes = {
    loading: PropTypes.bool,
}

export default Loader
