
import { useEffect } from 'react'

import styles from '../assets/scss/home.module.scss'
import utilStyles from '../assets/scss/libs/utils.module.scss'
import { HomeVinylTrack, VinylIcons } from '../assets/SVGs/homeSVGs'



import Search from './UIComponents/search/search'



const Home = () => {

    return (
        <div className={ `${styles.container} ${utilStyles.flexCol_Centre}` }>
            <div className={ `${styles.searchWrap} ${utilStyles.flexRow_Centre}` }>
                <Search showAside={'showAside'}/>
            </div>

            <div className={ `${styles.homeBackgroundWrap} ${utilStyles.flexCol_Centre} ${utilStyles.posAbs_NW}` }>
                <div className={ `${styles.vinyl} ${utilStyles.posRel}` }>
                    <HomeVinylTrack/>
                    <div className={ `${styles.vinylIcons} ${utilStyles.posAbs_NW}` }>
                        <VinylIcons/>
                    </div>
                </div>

                <p className={ `${styles.homeText} ${utilStyles.posRel}` }>
                    Search, find, and preview songs from Spotify. If you like them, add them to your playlists
                </p>
            </div>
        </div>
    )
}

export default Home