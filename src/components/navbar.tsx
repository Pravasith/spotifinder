import styles from '../assets/scss/navbar.module.scss'
import utilStyles from '../assets/scss/libs/utils.module.scss'

import { Logo } from '../assets/SVGs/navbarSVGs'
import Search from './UIComponents/search'

const Navbar = () => {


    return (
        <div className={ `${styles.container}` }>

            <nav className={ `${utilStyles.flexRow_Centre}` }>
                <div className={ `${utilStyles.flexRow_Centre} ${styles.logo}` }>
                    <Logo/>
                </div>

                <div className={ `${utilStyles.flexRow_Centre} ${styles.ULs}` }>
                    <button>
                        Hello
                    </button>

                    <Search/>
                </div>
            </nav>

        </div>
    )
}

export default Navbar