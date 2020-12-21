

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
        const offsetTopRelativeToViewport = wrap.current.getBoundingClientRect().top
        const h = (window.innerHeight -offsetTopRelativeToViewport) + 'px'
        setHeight(h)
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
                    src="https://lh3.googleusercontent.com/a-/AOh14Gh0uJ6w9eS22YnV9mBkq5ZnmniEnrPuuWf4R6p1Zg=s70-p-k-rw-no" 
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