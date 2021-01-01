import Link from 'next/link'

import styles from '../assets/scss/navbar.module.scss'
import utilStyles from '../assets/scss/libs/utils.module.scss'

import { Logo, ProfilePic, SearchNavbar } from '../assets/SVGs/navbarSVGs'


const Navbar = () => {


    return (
        <div className={ `${styles.container}` }>

            <nav className={ `${utilStyles.flexRow_Centre}` }>
                <div className={ `${utilStyles.flexRow_Centre} ${styles.logo}` }>
                    <Link href="/">
                        <a
                            className={ `${utilStyles.flexCol_Centre}` }
                            >
                            <Logo/>
                        </a>
                    </Link>
                </div>

                <div className={ `${utilStyles.flexRow_Centre} ${styles.ULs}` }>
                    

                    <button
                        className={ `${utilStyles.roundSVGButton}` }
                        >
                        <SearchNavbar/>
                    </button>

                    <button
                        className={ `${utilStyles.roundSVGButton}` }
                        >
                        <ProfilePic/>
                    </button>

                    {/* <Search showAside={'hide'}/> */}
                </div>
            </nav>

        </div>
    )
}

export default Navbar