


import styles from '../assets/scss/album_artist_page.module.scss'
import utilStyles from '../assets/scss/libs/utils.module.scss'
import { CondorianoPP } from '../assets/SVGs/artistPageSVGs'
import { ImagePlaceHolderSVG, LeftArrow, RightArrow } from '../assets/SVGs/commonSVGs'
import ImageSlider from './UIComponents/imageSlider'





const ArtistPage = () => {


    const similarArtists = () => {

        const arr = [1, 2, 3, 4, 5, 6]

        return arr.map((item, i) => (
            <div 
                className={ `${styles.similarArtist} ${utilStyles.flexCol_N}` }
                key={'similar-artist-' + i}
                >
                <img 
                    className={ `${styles.artistPic}` }
                    src={ deleteThis }
                />
                <p className={ `${styles.artistName}` }>Artist x</p>
            </div>
        ))
    }

    const deleteThis5 = 'https://static.toiimg.com/thumb/msid-75690174,imgsize-134498,width-800,height-600,resizemode-75/75690174.jpg'
    const deleteThis4 = 'https://s3.india.com/wp-content/uploads/2019/11/pjimage-7-7.jpg'
    const deleteThis2 = 'https://i.pinimg.com/originals/ff/9a/15/ff9a155e6b28d5e280dbd48690032a91.jpg'
    const deleteThis3 = 'https://static.toiimg.com/photo/72106422.cms'
    const deleteThis = 'https://www.filmibeat.com/ph-big/2016/07/ileana-d-cruz-holidays-with-her-boyfriend-andrew-kneebone-fiji_1467630331150.jpg'



    return (
        <div className={ `${styles.container} ${utilStyles.flexCol_Centre}` }>
           <div className={ `${styles.absBigWrap} ${utilStyles.flexCol_Centre} ${utilStyles.posAbs_NW}` }>
                <div className={ `${styles.header} ${utilStyles.flexRow_W}` }>
                    <ImagePlaceHolderSVG
                        cn={ `${styles.coverPicture}` }
                        imgSrc={deleteThis}
                    />

                    <div className={ `${styles.rightSide} ${utilStyles.flexCol_W}` }>
                        <h1 className={ `${styles.title}` }>The Beatles</h1>
                        <p className={ `${styles.genreNames}` }>Indie pop, rock</p>

                        <div className={ `${styles.artists} ${utilStyles.flexRow_NW}` }>
                            <div className={ `${styles.condoriano} ${utilStyles.flexCol_W}` }>
                                <CondorianoPP/>
                            </div>

                            <p className={ `${styles.artistNames}` }>2.5M</p>
                        </div>

                        <span className={ `${styles.line}` }></span>

                        <div className={ `${styles.similarArtists} ${utilStyles.flexCol_NW}` }>
                            <h2 className={ `${styles.artists}` }>Similar Artists</h2>

                            <div className={ `${styles.rowArtists} ${utilStyles.flexRow_NW}` }>
                                {
                                    similarArtists()
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ `${styles.nakedBod} ${utilStyles.flexRow_Centre}` }>
                    <div className={ `${styles.sliderWrap}` }>
                        <ImageSlider
                            pictures={
                                [
                                    // {
                                    //     title: "Ileana D' Cruz",
                                    //     url: deleteThis4
                                    // },
    
                                    // {
                                    //     title: "Ileana D' Cruz",
                                    //     url: deleteThis5
                                    // },
    
                                    {
                                        title: "Ileana D' Cruz",
                                        url: deleteThis3
                                    },
    
                                    {
                                        title: "Ileana D' Cruz",
                                        url: deleteThis2
                                    },
    
                                    {
                                        title: "Ileana D' Cruz",
                                        url: deleteThis3
                                    },
    
                                    {
                                        title: "Ileana D' Cruz",
                                        url: deleteThis
                                    },

                                     {
                                        title: "Ileana D' Cruz",
                                        url: deleteThis4
                                    },
    
                                    {
                                        title: "Ileana D' Cruz",
                                        url: deleteThis5
                                    },
    
                                    {
                                        title: "Ileana D' Cruz",
                                        url: deleteThis3
                                    },
    
                                    {
                                        title: "Ileana D' Cruz",
                                        url: deleteThis2
                                    },
    
                                    {
                                        title: "Ileana D' Cruz",
                                        url: deleteThis3
                                    },
    
                                    {
                                        title: "Ileana D' Cruz",
                                        url: deleteThis
                                    },
                                ]
                            }
                            maxSlides={4}
                        />
                    </div>
                    <div className={ `${styles.sliderWrap}` }>
                        {/* <ImageSlider
                            numberOfSlides={5}
                        /> */}
                    </div>
                </div>
           </div>
        </div>
    )
}

export default ArtistPage