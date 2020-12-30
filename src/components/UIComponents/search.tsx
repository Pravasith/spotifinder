

import styles from '../../assets/scss/search/search.module.scss'
import utilStyles from '../../assets/scss/libs/utils.module.scss'

import { DurationIcon, SearchIcon } from "../../assets/SVGs/commonSVGs"

import { useForm } from '../../library/useForm'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { gql, useLazyQuery, useQuery } from '@apollo/client'
import { Album, Artist, Track } from '../../interfaces/spotify'
import { SEARCH_SPOTIFY } from '../../library/apolloTypes'



const Search = (props: { showAside: 'showAside' | 'hide' }) => {

    const [ values, handler ] = useForm({})
    
    const isFirstRender = useRef(true)

    const [ showDropDown, setShowDropDown ] = useState(false)
    const [ height, setHeight ] = useState<string>(`8em`)

    const renders = useRef(0)


    const [ searchQuery, setSearchQuery ] = useState<string | undefined>('')

    

    const [ getSearchResults, { loading, data } ] = useLazyQuery(SEARCH_SPOTIFY)

    useEffect(() => {
        !!searchQuery && getSearchResults({
            variables: {
                query: searchQuery
            }
        })
    }, [searchQuery])

    // useEffect(() => {
    //     console.log(data)
    // }, [loading])
    

    type DataType = 'artist' | 'album' | 'track'

    type SortedData = {
        title: string,
        thumbnail: string,
        sub_title?: string
    }

    const SuggestionListElements = (dataType: DataType, sortedData: SortedData[]) => {

        const arr = [...sortedData]

        

        return arr.map((item, i) => (
            <div 
                className={ `${styles.suggestion} ${styles[dataType]} ${utilStyles.flexRow_W}` }
                key={ `suggestion-${i}` }
                >
                <div className={ `${styles.thumbnail}` }>
                    <img 
                        src={ item.thumbnail }
                        alt=""
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

    const Suggestions = () => {

        // console.log(!data)
        if(!data) {
            if(loading) return <p>Loading ...</p>
            return null
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


    const DropDown = () => {

        const wrap = useRef() as MutableRefObject<HTMLDivElement>


        useEffect(() => {
            // Calculates height of suggestionsWrap element
            if(isFirstRender.current) {
                const offsetTopRelativeToViewport = wrap.current.getBoundingClientRect().top
                const h = (window.innerHeight - offsetTopRelativeToViewport) + 'px'
                setHeight(h)

                // console.log(renders.current++, isFirstRender)
                isFirstRender.current = false
            }

        }, [])

        
    

        return (
            <div 
                className={ `${styles.suggestionsWrap} ${utilStyles.posAbs_NW}` }
                ref={wrap}
                style={{
                    height: height
                }}
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
    }
        

    return (
        <div className={ `${styles.container} ${utilStyles.flexCol_Centre}` }>
            <div 
                className={ `${styles.searchWrap} ${utilStyles.posRel}` }
                // onMouseEnter={() => setShowDropDown(true)}
                // onMouseLeave={() => setShowDropDown(false)}
                onFocus={() => setShowDropDown(true)}
                onBlur={() => setShowDropDown(false)}
                tabIndex={1}
                >
                <div className={ `${styles.searchInputWrap} ${utilStyles.flexRow_Centre}` }>
                    <aside className={ `${styles[props.showAside]}` }></aside>

                    <div className={ `${styles.searchIcon} ${utilStyles.flexRow_Centre}` }>
                        <SearchIcon/>
                    </div>

                    <form 
                        onSubmit={(e) => {
                            e.preventDefault()
                            setSearchQuery(values.search)
                        }}
                        >
                        <input
                            className={ `${styles.searchInput}` }
                            placeholder="Search songs, albums, artists.."
                            type="search"
                            autoComplete="off"
                            name="search"
                            onChange={handler}
                        />
                    </form>
                    

                    <aside className={ `${styles[props.showAside]}` }></aside>
                </div>


                {
                    showDropDown
                    ?
                    <DropDown/>
                    :
                    null
                }


               
            </div>
        </div>
    )
}


export default Search