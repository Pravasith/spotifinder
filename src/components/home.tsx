
import styles from '../assets/scss/home.module.scss'
import utilStyles from '../assets/scss/libs/utils.module.scss'
import { useForm } from '../library/useForm'



const Home = () => {

    const { values, handler } = useForm({})

    return (
        <div className={ `${styles.container} ${utilStyles.flexCol_Centre}` }>
            <div className={ `${styles.search} ${utilStyles.flexCol_Centre}` }>
                <input 
                    type="text"
                    autoComplete="off"
                    name="search" 
                    className={ `${styles.searchInput}` }
                    onChange={handler}
                />
            </div>
        </div>
    )
}

export default Home