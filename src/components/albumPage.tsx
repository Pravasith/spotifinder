


import gsap from 'gsap'
import Link from 'next/link'


import { useEffect } from 'react'
import styles from '../assets/scss/album_artist_page.module.scss'
import utilStyles from '../assets/scss/libs/utils.module.scss'
import { CondorianoPP, VerifiedIcon } from '../assets/SVGs/artistAlbumPageSVGs'
import { ImagePlaceHolderSVG } from '../assets/SVGs/commonSVGs'
import { IAlbumData } from '../interfaces/pages'
import { dynamicallyImportPackage } from '../library/dynamicImport'
import { titleCase } from '../library/stringOps'
import ImageSlider from './UIComponents/imageSlider'





const AlbumPage = (props: IAlbumData) => {


    useEffect(() => {

        dynamicallyImportPackage()
        .then((ScrollTrigger) => {


            gsap.registerPlugin(ScrollTrigger as GSAPPlugin)


            gsap.to(
                `.${styles.fixedStrip}`,
                {
                    scrollTrigger: {
                        scroller: `.${styles.rightSide}`,
                        trigger: `.${styles.nakedBod}`,
                        start: 'top 25%',
                        // markers: true,
                        toggleActions: 'restart none none reverse'
                    },
                    duration: 0.2,
                    y: '0%'
                }
            )

            gsap.to(
                `.${styles.topWrap}`,
                {
                    scrollTrigger: {
                        scroller: `.${styles.rightSide}`,
                        trigger: `.${styles.nakedBod}`,
                        start: 'top center',
                        scrub: 0.5,
                        // markers: true,
                        toggleActions: 'restart none none reverse'
                    },
                    duration: 0.2,
                    opacity: 0,
                }
            )

            gsap.to(
                `.${styles.simArts}`,
                {
                    scrollTrigger: {
                        scroller: `.${styles.rightSide}`,
                        trigger: `.${styles.nakedBod}`,
                        start: 'top 25%',
                        // scrub: 0.5,
                        // markers: true,
                        toggleActions: 'restart none none reverse'
                    },
                    duration: 0.2,
                    opacity: 1,
                }
            )

            gsap.to(
                `.${styles.simArts} .${styles.similarArtist}`,
                {
                    scrollTrigger: {
                        scroller: `.${styles.rightSide}`,
                        trigger: `.${styles.nakedBod}`,
                        start: 'top 25%',
                        // scrub: 0.5,
                        // markers: true,
                        toggleActions: 'restart none none reverse'
                    },
                    stagger: {
                        amount: 0.25,
                    },
                    duration: 0.2,
                    y: '-2em',
                }
            )
            

        })

        
        


       

        
    }, [])


    const { getAlbum } = props.albumData

    const pictureArray = new Array(23).fill(null).map((item, i) => {
        return {
            url: 'https://picsum.photos/200/200?random=' + i,
            title: 'X asidpjaips asndijip'
        }
    })



    const deleteX = 'https://tvline.com/wp-content/uploads/2020/01/one-piece-live-action.jpg'
    
    const deleteThis3 = 'https://piunikaweb.com/wp-content/uploads/2020/02/IMG_20200225_100835-934x523-1.jpg'



    return (
        <div className={ `${styles.container} ${utilStyles.flexCol_Centre}` }>
           <div className={ `${styles.absBigWrap} ${utilStyles.flexCol_Centre} ${utilStyles.posAbs_NW}` }>
                <div className={ `${styles.header} ${utilStyles.flexRow_NW}` }>

                    <div className={ `${styles.leftSide} ${utilStyles.flexCol_NW}` }>
                        <ImagePlaceHolderSVG
                            cn={ `${styles.coverPicture}` }
                            imgSrc={deleteX}
                        />                        
                    </div>


                    <div className={ `${styles.rightSide} ${utilStyles.flexCol_NW}` }>
                        
                        <div className={ `${styles.fixedStrip} ${utilStyles.flexRow_NW}` }>
                            <h2>{ titleCase(getAlbum.name) }</h2>
                        </div>

                        <div className={ `${styles.topWrap} ${utilStyles.flexCol_NW}` }>
                            <div className={ `${styles.verified} ${utilStyles.flexRow_W}` }>
                                <p>{ getAlbum.album_type.toUpperCase() }</p>

                                <div className={ `${styles.verifiedIcon}` }>
                                    <VerifiedIcon/>
                                </div>
                            </div>


                            <h1 className={ `${styles.title}` }>{ titleCase(getAlbum.name) }</h1>
                            

                            <div className={ `${styles.subData} ${utilStyles.flexCol_NW}` }>
                                <p className={ `${styles.genreNames}` }>{ titleCase(getAlbum.copyrights) }</p>

                                

                                <div className={ `${styles.secondaryData} ${utilStyles.flexRow_Centre}` }>
                                    <p><span>Released in </span>{ " " + getAlbum.release_date }</p>
                                    <div className={ `${styles.dot}` }></div>
                                    <p>{ getAlbum.albumTracks.length + " " }<span>Tracks</span></p>
                                </div>
                                
                            </div>


                            <div className={ `${styles.artists} ${utilStyles.flexRow_NW}` }>
                                <div className={ `${styles.condoriano} ${utilStyles.flexCol_W}` }>
                                    <CondorianoPP/>
                                </div>

                                <p className={ `${styles.artistNames} ${utilStyles.flexRow_NW}` }>
                                    {
                                        getAlbum.artists.map(artist => (
                                            <Link 
                                                href={ `/artist/${artist.id}` }
                                                key={ "artist-" +  artist.id }
                                                >
                                                <a>
                                                    { artist.name }<br/>
                                                </a>
                                            </Link>
                                        ))
                                    }
                                </p>
                            </div>

                            <span className={ `${styles.line}` }></span>


                        </div>



                        <div className={ `${styles.nakedBod}` }>
                            <div className={ `${styles.sliderWrap}` }>
                                <ImageSlider
                                    id={'slider-1'}
                                    pictures={pictureArray}
                                    maxSlides={5}
                                    title={'Popular songs'}
                                />
                            </div>

                            <div className={ `${styles.sliderWrap}` }>
                                <ImageSlider
                                    id={'slider-2'}
                                    pictures={pictureArray}
                                    maxSlides={3}
                                    title={'Popular Albums'}
                                />
                            </div>

                            <div className={ `${styles.sliderWrap}` }>
                                <ImageSlider
                                    id={'slider-2'}
                                    pictures={pictureArray}
                                    maxSlides={4}
                                    title={'Popular Albums'}
                                />
                            </div>
                        </div>
                    
                    
                    
                    </div>
                </div>

                
           </div>
        </div>
    )
}

export default AlbumPage