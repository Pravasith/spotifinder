


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
import { SongsInAlbum } from './UIComponents/albumData'
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


        })

        
        


       

        
    }, [])


    const { getAlbum } = props.albumData



    const deleteX = 'https://tvline.com/wp-content/uploads/2020/01/one-piece-live-action.jpg'



    // const similarArtists = () => {

    //     const arr = [ ...getRelatedArtists ].splice(0, 6)

    //     return arr.map((item, i) => (
    //         <Link
    //             href={ '/artist/' + item.id }
    //             key={'similar-artist-' + i}
    //             >
    //             <a>
    //                <div 
    //                     className={ `${styles.similarArtist} ${utilStyles.flexCol_N}` }
                        
    //                     >
    //                     <img 
    //                         className={ `${styles.artistPic}` }
    //                         src={ item.images[item.images.length - 1].url }
    //                     />

    //                     <p className={ `${styles.artistName}` }>{ titleCase(item.name) }</p>
    //                 </div> 
    //             </a>
                
    //         </Link>
    //     ))
    // }

    
    const albumPictures = (albums: any) => {
        return albums.map((album: any) => {
            return {
                title: album.name,
                url: album.images[0].url,
                id: album.id
            }
        })
    }



    return (
        <div className={ `${styles.container} ${utilStyles.flexCol_Centre}` }>
           <div className={ `${styles.absBigWrap} ${utilStyles.flexCol_Centre} ${utilStyles.posAbs_NW}` }>
                <div className={ `${styles.header} ${utilStyles.flexRow_NW}` }>

                    <div className={ `${styles.leftSide} ${utilStyles.flexCol_NW}` }>
                        <ImagePlaceHolderSVG
                            cn={ `${styles.coverPicture}` }
                            imgSrc={ getAlbum.images[0].url }
                        />


                    </div>


                    <div className={ `${styles.rightSide} ${utilStyles.flexCol_NW}` }>
                        
                        <div className={ `${styles.fixedStrip} ${utilStyles.flexRow_NW}` }>
                            <h2>{ titleCase(getAlbum.name) }</h2>
                        </div>

                        <div className={ `${styles.topWrap} ${utilStyles.flexCol_NW}` }>
                            <div className={ `${styles.verified} ${utilStyles.flexRow_W}` }>
                                <p>{ getAlbum.album_type.toUpperCase() }</p>
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
                            {
                                SongsInAlbum([
                                    {
                                        name: 'Tracks',
                                        id: 'SongsInAlbum',
                                        images: [

                                            ...getAlbum.albumTracks.map(track => {
                                                const picObj = getAlbum.images[0]
    
                                                return {
                                                    title: track.name,
                                                    url: picObj.url
                                                }
                                            })
                                        ],
                                        albumTracks: [ ...getAlbum.albumTracks ]
                                    }
                                ])
                            }

                            {
                                getAlbum.artists.map((artist, i) => {
                                    return (
                                        <div 
                                            className={ `${styles.sliderWrap}` }
                                            key={ 'artist-' + artist.id }
                                            >
                                            <ImageSlider
                                                id={'AllAlbumsX' + i}
                                                pictures={ albumPictures(artist.albums) }
                                                maxSlides={4}
                                                title={ `All ${ titleCase(artist.name) }'s Albums` }
                                                linkUrl={'/album/'}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    
                    
                    
                    </div>
                </div>

                
           </div>
        </div>
    )
}

export default AlbumPage