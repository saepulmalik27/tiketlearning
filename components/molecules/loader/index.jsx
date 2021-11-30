import Spinner from '@/components/atoms/Spinner'
import React from 'react'
import styles from './style.module.scss'
import * as colors from '@/styles/App.module.scss'
const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.loader_container}>
                <Spinner size={'10rem'} color={colors.secondaryPeach} />
            </div>
        </div>
    )
}

export default Loader
