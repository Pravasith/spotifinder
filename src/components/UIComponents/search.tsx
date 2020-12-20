

import styles from '../../assets/scss/search/search.module.scss'
import utilStyles from '../../assets/scss/libs/utils.module.scss'

import { DurationIcon, SearchIcon } from "../../assets/SVGs/commonSVGs"
import { useForm } from '../../library/useForm'
import { MutableRefObject, useEffect, useRef, useState } from 'react'



const Search = () => {

    const [ values, handler ] = useForm({})
    const [ height, setHeight ] = useState<string>(`8em`)

    useEffect(() => {
        // Calculates height of suggestionsWrap element
        const h: string = (window.innerHeight - wrap.current.offsetTop) + 'px'
        setHeight(h)

        console.log(h)

    }, [])

    // useEffect(() => {
    //     console.log(values.search)
    // }, [values.search])

    const wrap = useRef() as MutableRefObject<HTMLDivElement>

    const SuggestionListElements = () => {
        const arr: number[] = [1, 2, 3, 4]

        return arr.map((item, i) => (
            <li 
                className={ `${utilStyles.flexRow_Centre}` }
                key={`suggestion-${i}`}
                >
                <img 
                    src="https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/123207065_2588720941388448_6311789914010059318_n.jpg?_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=R7oEd_iYN-UAX9rmDmy&tp=1&oh=030738aac6f6cc9015f9aa599867aea1&oe=6006DBC2" 
                    alt=""
                />

                <div className={ `${styles.nameDetails} ${utilStyles.flexCol_W}` }>
                    <p>The Beatles</p>
                    <div className={ `${styles.durationWrap} ${utilStyles.flexRow_NW}` }>
                        <div className={ `${styles.durationIcon} ${utilStyles.flexCol_W}` }>
                            <DurationIcon/>
                        </div>
                        <p>3:15</p>
                    </div>
                </div>

                <div className={ `${styles.popularity} ${utilStyles.flexRow_Centre}` }>

                </div>
            </li>
        ))
    }

    const Suggestions = () => {
        return (
            <div className={ `${styles.suggestionsContainer} ${utilStyles.flexCol_NW}` }>
                <ul>
                    <div className={ `${styles.suggestionLabel}` }>Songs</div>
                    {  SuggestionListElements() }
                </ul>

                <ul>
                    <div className={ `${styles.suggestionLabel}` }>Albums</div>
                    {  SuggestionListElements() }
                </ul>

                <ul>
                    <div className={ `${styles.suggestionLabel}` }>Artists</div>
                    {  SuggestionListElements() }
                </ul>

            </div>
        )
    }

    return (
        <div className={ `${styles.container} ${utilStyles.flexCol_Centre}` }>
            <div className={ `${styles.searchWrap} ${utilStyles.posRel}` }>
                <div className={ `${styles.searchInputWrap} ${utilStyles.flexRow_Centre}` }>
                    <div className={ `${styles.searchIcon} ${utilStyles.flexRow_Centre}` }>
                        <SearchIcon/>
                    </div>

                    <input
                        className={ `${styles.searchInput}` }
                        placeholder="Search songs, albums, artists.."
                        type="search"
                        autoComplete="off"
                        name="search"
                        onChange={handler}
                    />
                </div>

                <div 
                    className={ `${styles.suggestionsWrap} ${utilStyles.posAbs_NW}` }
                    ref={wrap}
                    style={{
                        height: height
                    }}
                    >
                    {
                        <Suggestions/>
                    }
                </div>
            </div>
        </div>
    )
}


export default Search