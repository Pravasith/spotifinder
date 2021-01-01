import React, { memo, useEffect } from "react"
import { Album, Artist, Track } from "../../../interfaces/spotify"

import styles from '../../../assets/scss/search/search.module.scss'
import utilStyles from '../../../assets/scss/libs/utils.module.scss'
import { ImagePlaceHolderSVG } from "../../../assets/SVGs/commonSVGs"




// React.memo-ising this component so it only renders when the props change

const DropDown = memo((
        props: {
            data? : {
                search: {
                    artists: Artist[]
                    albums: Album[]
                    tracks: Track[]
                }
            },
            loading: boolean,
            showAside: 'showAside' | 'hide',
        }
    ) => {



    type DataType = 'artist' | 'album' | 'track'

    type SortedData = {
        title: string,
        thumbnail: string,
        sub_title?: string
    }

    const { data, loading } = props


    const Suggestions = () => {

        // console.log(!data)
        if(!data) {
            if(loading) return <p>Loading ...</p>
            return null
        }



        const SuggestionListElements = (dataType: DataType, sortedData: SortedData[]) => {

            const arr = [...sortedData]

            return arr.map((item, i) => (
                <div 
                    className={ `${styles.suggestion} ${styles[dataType]} ${utilStyles.flexRow_W}` }
                    key={ `suggestion-${i}` }
                    >
                    <div className={ `${styles.thumbnail}` }>
                        {/* <img
                            className={ `${styles.thumbImg}` }
                            src={ item.thumbnail }
                            alt=""
                        /> */}

                        <ImagePlaceHolderSVG
                            cn={ `${styles.thumbImg}` }
                            imgSrc={ item.thumbnail }
                        />
                    </div>

                    <div className={ `${styles.titleWrap} ${utilStyles.flexCol_NW}` }>
                        <h3>{ item.title }</h3>
                        {
                            (dataType !== 'artist')
                            ?
                            <p>{ item.sub_title }</p>
                            :
                            null
                        }
                    </div>
                </div>
            ))
        }

        


        const searchResult = data.search

        const tracks = searchResult.tracks.map((item: Track): SortedData => ({
            title: item.name,
            thumbnail: item.images.length > 0 ? item.images[item.images.length - 1].url : 'https://imgur.com/a/sAb1Vx7',
            sub_title: item.artistNames.join(", ")
        }))

        const albums = searchResult.albums.map((item: Album): SortedData => ({
            title: item.name,
            thumbnail: item.images.length > 0 ? item.images[item.images.length - 1].url : 'https://imgur.com/a/sAb1Vx7',
            sub_title: item.artistNames.join(", ")
        }))

        const artists = searchResult.artists.map((item: Artist): SortedData => ({
            title: item.name,
            thumbnail: item.images.length > 0 ? item.images[item.images.length - 1].url : 'https://imgur.com/a/sAb1Vx7',
        }))

        return (
            <div className={ `${styles.suggestionsContainer} ${utilStyles.flexCol_NW}` }>
                <ul>
                    <h2 className={ `${styles.suggestionLabel}` }>Songs</h2>
                    <div className={ `${styles.gridder}` }>
                        {  SuggestionListElements('track', tracks) }
                    </div>
                </ul>

                <ul>
                    <h2 className={ `${styles.suggestionLabel}` }>Artists</h2>
                    <div className={ `${styles.gridder}` }>
                        {  SuggestionListElements('artist', artists) }
                    </div>
                </ul>

                <ul>
                    <h2 className={ `${styles.suggestionLabel}` }>Albums</h2>
                    <div className={ `${styles.gridder}` }>
                        {  SuggestionListElements('album', albums) }
                    </div>
                </ul>

            </div>
        )
    }


    return (
        <div 
            className={ `${styles.suggestionsWrap}` }
            >
            <div className={ `${styles.suggestions} ${utilStyles.flexRow_Centre}` }>
                <aside className={ `${styles[props.showAside]}` }></aside>
                    {
                        <Suggestions/>
                    }
                <aside className={ `${styles[props.showAside]}` }></aside>
            </div>
        </div>

    )
})



export default DropDown