


import styles from '../assets/scss/album_artist_page.module.scss'
import utilStyles from '../assets/scss/libs/utils.module.scss'
import { CondorianoPP } from '../assets/SVGs/artistPageSVGs'





const ArtistPage = () => {


    const deleteThis = 'https://avatars0.githubusercontent.com/u/719813?s=400&u=7d80153cf5780e94ec3753514e95377abecc9877&v=4'

    return (
        <div className={ `${styles.container} ${utilStyles.flexCol_Centre}` }>
           <div className={ `${styles.absBigWrap} ${utilStyles.flexCol_Centre} ${utilStyles.posAbs_NW}` }>
                <div className={ `${styles.header} ${utilStyles.flexRow_NW}` }>
                    <img
                        className={ `${styles.coverPicture}` }
                        src={deleteThis}
                        alt="Artist Picture"
                    />

                    <div className={ `${styles.rightSide} ${utilStyles.flexCol_W}` }>
                        <h1 className={ `${styles.title}` }>The Beatles</h1>
                        <p className={ `${styles.genres}` }>Indie pop, rock</p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default ArtistPage