
import { useEffect } from 'react'

import styles from '../assets/scss/home.module.scss'
import utilStyles from '../assets/scss/libs/utils.module.scss'



import Search from './UIComponents/search'



const Home = () => {

    


    return (
        <div className={ `${styles.container} ${utilStyles.flexCol_Centre}` }>
            <Search/>
        </div>
    )
}

export default Home