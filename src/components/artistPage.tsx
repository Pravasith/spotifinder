


import gsap from 'gsap'


import { useEffect, useState } from 'react'
import styles from '../assets/scss/album_artist_page.module.scss'
import utilStyles from '../assets/scss/libs/utils.module.scss'
import { CondorianoPP, VerifiedIcon } from '../assets/SVGs/artistPageSVGs'
import { ImagePlaceHolderSVG, LeftArrow, RightArrow } from '../assets/SVGs/commonSVGs'
import { ProfilePic } from '../assets/SVGs/navbarSVGs'
import { IArtistData } from '../interfaces/pages'
import { SongsInAlbum } from './UIComponents/albumData'
import ImageSlider from './UIComponents/imageSlider'


const dynamicallyImportPackage = async () => {
    let allMods = {}

    // Importing trackball controls and GLTFLoader
    await Promise.all([

        import('gsap/ScrollTrigger'),
        // import('three/examples/jsm/loaders/DRACOLoader.js'),

    ])
    .then(modules => {
        modules.map((item, i) => {
            allMods = {
                ...allMods,
                ...item
            }
        })
    })
    .catch(e => console.log(e))

    
    return allMods
}



const ArtistPage = (props: IArtistData) => {


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

            // gsap.to(
            //     `.${styles.topWrap}`,
            //     {
            //         scrollTrigger: {
            //             scroller: `.${styles.rightSide}`,
            //             trigger: `.${styles.nakedBod}`,
            //             start: 'top center',
            //             scrub: 0.5,
            //             // markers: true,
            //             toggleActions: 'restart none none reverse'
            //         },
            //         duration: 0.2,
            //         opacity: 0,
            //     }
            // )

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


    
    let { getArtist, getRelatedArtists } = props.artistData
    

    const pictureArray = new Array(23).fill(null).map((item, i) => {
        return {
            url: 'https://picsum.photos/200/200?random=' + i,
            title: 'Ileana my love'
        }
    })

    const similarArtists = () => {

        const arr = [ ...getRelatedArtists ].splice(0, 6)

        return arr.map((item, i) => (
            <div 
                className={ `${styles.similarArtist} ${utilStyles.flexCol_N}` }
                key={'similar-artist-' + i}
                >
                <img 
                    className={ `${styles.artistPic}` }
                    src={ item.images[item.images.length - 1].url }
                />

                <p className={ `${styles.artistName}` }>{ item.name }</p>
            </div>
        ))
    }

    const deleteX = 'https://www.watchplaystream.com/files/people/photos/78/783180.jpg'
    const deleteThis5 = 'https://static.toiimg.com/thumb/msid-75690174,imgsize-134498,width-800,height-600,resizemode-75/75690174.jpg'
    const deleteThis4 = 'https://s3.india.com/wp-content/uploads/2019/11/pjimage-7-7.jpg'
    const deleteThis2 = 'https://i.pinimg.com/originals/ff/9a/15/ff9a155e6b28d5e280dbd48690032a91.jpg'
    const deleteThis3 = 'https://static.toiimg.com/photo/72106422.cms'
    const deleteThis = 'https://www.filmibeat.com/ph-big/2016/07/ileana-d-cruz-holidays-with-her-boyfriend-andrew-kneebone-fiji_1467630331150.jpg'





    return (
        <div className={ `${styles.container} ${utilStyles.flexCol_Centre}` }>
           <div className={ `${styles.absBigWrap} ${utilStyles.flexCol_Centre} ${utilStyles.posAbs_NW}` }>
                <div className={ `${styles.header} ${utilStyles.flexRow_NW}` }>

                    <div className={ `${styles.leftSide} ${utilStyles.flexCol_NW}` }>
                        <ImagePlaceHolderSVG
                            cn={ `${styles.coverPicture}` }
                            imgSrc={ getArtist.images.length !== 0 ? getArtist.images[0].url : deleteX }
                        />

                        <div className={ `${styles.simArts} ${utilStyles.flexCol_Centre}` }>
                            <h2>Similar Artists</h2>
                            <span className={ `${styles.line}` }></span>

                            <div className={ `${styles.simGrid} ${styles.smallSimGrid}` }>
                                {
                                    similarArtists()
                                }
                            </div>
                        </div>
                        
                    </div>


                    <div className={ `${styles.rightSide} ${utilStyles.flexCol_NW}` }>
                        
                        <div className={ `${styles.fixedStrip} ${utilStyles.flexRow_NW}` }>
                            <h2>{ getArtist.name }</h2>
                        </div>

                        <div className={ `${styles.topWrap} ${utilStyles.flexCol_NW}` }>
                            <div className={ `${styles.verified} ${utilStyles.flexRow_W}` }>
                                <p>ARTIST</p>

                                <div className={ `${styles.verifiedIcon}` }>
                                    <VerifiedIcon/>
                                </div>
                            </div>


                            <h1 className={ `${styles.title}` }>{ getArtist.name }</h1>
                            <p className={ `${styles.genreNames}` }>{ getArtist.genres.join(', ') }</p>

                            <div className={ `${styles.artists} ${utilStyles.flexRow_NW}` }>
                                <div className={ `${styles.condoriano} ${utilStyles.flexCol_W}` }>
                                    <CondorianoPP/>
                                </div>

                                <p className={ `${styles.artistNames}` }>2.5M</p>
                            </div>

                            <span className={ `${styles.line}` }></span>

                            <div className={ `${styles.similarArtists} ${utilStyles.flexCol_NW}` }>
                                <h2 className={ `${styles.artists}` }>Similar Artists</h2>

                                <div className={ `${styles.simGrid}` }>
                                    {
                                        similarArtists()
                                    }
                                </div>

                            </div>

                        </div>



                        <div className={ `${styles.nakedBod}` }>
                            
                            <div className={ `${styles.sliderWrap}` }>
                                <ImageSlider
                                    id={'top-tracks'}
                                    pictures={ [
                                        ...getArtist.popularTracks.map(track => {
                                            const picObj = track.album.images[0]

                                            return {
                                                title: track.name,
                                                url: picObj.url
                                            }
                                        })
                                    ] }
                                    maxSlides={5}
                                    title={'Popular songs'}
                                />
                            </div>
                            

                            {
                                SongsInAlbum(getArtist.albums)
                            }

                            

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

export default ArtistPage