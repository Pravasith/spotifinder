import { ImagePlaceHolderSVG } from "../../assets/SVGs/commonSVGs"
import { ProfilePic } from "../../assets/SVGs/navbarSVGs"

import styles from '../../assets/scss/album_artist_page.module.scss'
import utilStyles from '../../assets/scss/libs/utils.module.scss'

    type SongDataType = {
        name: string,
        id: string,
        duration_ms: number
    }

    type AlbumDataType = {
        name: string,
        id: string,
        images: {
            url: string
        }[],
        albumTracks: SongDataType[]
    }

    const convertToMinSex = (s: number) => {


        var ms = s % 1000
        s = (s - ms) / 1000
        var secs = s % 60
        s = (s - secs) / 60
        var mins = s % 60

        return mins + ':' + secs
    }

    export const SongsInAlbum = (albumData: AlbumDataType[]) => {


       


        const deleteX = 'https://picsum.photos/200/200'



        const Songs = (songArr: SongDataType[], i: number) => {

           
            return songArr.map((song: SongDataType, j: number) => {

                return (
                    <div 
                        className={ `${styles.soloSong} ${utilStyles.flexRow_Centre}` }
                        key={ 'Songs-' + i + '-Song-' + j }
                        >
                        <p className={ `${styles.songName}` }>{ song.name }</p>

                        <div className={ `${styles.buttons} ${utilStyles.flexRow_Centre}` }>
                            <p className={ `${styles.duration}` }>{ convertToMinSex(song.duration_ms) }</p>
                            <button
                                className={ `${utilStyles.roundSVGButton}` }
                                >
                                <ProfilePic/>
                            </button>
                        </div>
                        
                    </div>
                )
            })
        }



        return albumData.map((item: AlbumDataType, i: number) => (
            <div 
                className={ `${styles.albumContainer} ${utilStyles.flexCol_NW}` }
                key={ 'albumData' + i }
                >
                <div className={ `${styles.albumHeader} ${utilStyles.flexRow_NW}` }>
                    <ImagePlaceHolderSVG
                        cn={ `${styles.albumImage}` }
                        imgSrc={ item.images.length !== 0 ? item.images[0].url : deleteX }
                    />

                    <div className={ `${styles.albumDetails} ${utilStyles.flexCol_NW}` }>
                        <p>ALBUM</p>
                        <h2 className={ `${styles.albumName}` }>{ item.name }</h2>
                        <p>{ item.albumTracks.length } songs</p>
                    </div>
                </div>

                <div className={ `${styles.songsList} ${utilStyles.flexCol_NW}` }>
                    
                    {
                        Songs( item.albumTracks, i )
                    }
                  
                </div>
                
                
            </div>
        ))

        // const { albums } = getArtist

        // return [ ...albums ].map((album, i) => {

        //     return (
        //         <div 
        //             className={ `${styles.sliderWrap}` }
        //             key={ 'image-slider-wrap' + i }
        //             >
        //             <ImageSlider
        //                 id={ 'ABC' + album.id + '-' + i }
        //                 pictures={ album.albumTracks.map(item => {
        //                     return {
        //                         title: item.name,
        //                         url: album.images[0].url

        //                     }
        //                 }) }
        //                 maxSlides={5}
        //                 title={ album.name }
        //             />
        //         </div>
        //     )
        // })

        
    }
