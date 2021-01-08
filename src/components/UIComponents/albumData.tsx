import { useEffect } from "react"
import { Howl } from 'howler'


import { ImagePlaceHolderSVG } from "../../assets/SVGs/commonSVGs"


import styles from '../../assets/scss/album_artist_page.module.scss'
import utilStyles from '../../assets/scss/libs/utils.module.scss'
import titleCase from "../../library/titleCase"

import { PlayButton } from "../../assets/SVGs/artistPageSVGs"

type SongDataType = {
    name: string,
    id: string,
    duration_ms: number,
    preview_url: string
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


type SoundType = {
    name: string,
    howl: Howl
}

const sounds: SoundType[] = []


let x = {
    howl: new Howl({
        src: ['https://p.scdn.co/mp3-preview/900b03acc076e392f82955933dc0aa59e0d14f5a?cid=ff4cf933a12a45a780953348e3d33876'],
        format: ['mp3', 'aac']
    })
}

let currentlyPlaying: Howl | undefined, currentId: string | number

export const SongsInAlbum = (albumData: AlbumDataType[]) => {


    useEffect(() => {
        return () => {
            // unmount stuff here
            if(currentlyPlaying) currentlyPlaying.stop() 
        }
    }, [])



    const deleteX = 'https://picsum.photos/200/200'


    const playPause = (song: SongDataType) => {
        return (
            <button
                className={ `${utilStyles.roundSVGButton}` }
                onClick={() => {

                    if(!!currentlyPlaying){
                        currentlyPlaying.stop()
                    }

                    currentlyPlaying = new Howl({
                        src: [song.preview_url],
                        format: ['mp3', 'aac']
                    })


                    // console.log(song.preview_url)


                    currentlyPlaying.play()
                    // console.log(sounds.filter(s => s.name === "Sound-" + song.id))
                    // sounds.filter(s => s.name === "Sound-" + song.id)[0].howl.play()

                }}
                >
                <PlayButton/>
            </button>
        )
    }


    const Songs = (songArr: SongDataType[], i: number) => {

        
        return songArr.map((song: SongDataType, j: number) => {


            return (
                <div 
                    className={ `${styles.soloSong} ${utilStyles.flexRow_Centre}` }
                    key={ 'Songs-' + i + '-Song-' + j }
                    >
                    <p className={ `${styles.songName}` }>{ titleCase(song.name) }</p>

                    <div className={ `${styles.buttons} ${utilStyles.flexRow_Centre}` }>
                        <p className={ `${styles.duration}` }>{ convertToMinSex(song.duration_ms) }</p>
                        {
                            song.preview_url && (
                                playPause(song)
                            )
                        }
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
                    <h2 className={ `${styles.albumName}` }>{ titleCase(item.name) }</h2>
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


    
}
