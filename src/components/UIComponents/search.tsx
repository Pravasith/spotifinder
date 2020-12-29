

import styles from '../../assets/scss/search/search.module.scss'
import utilStyles from '../../assets/scss/libs/utils.module.scss'

import { DurationIcon, SearchIcon } from "../../assets/SVGs/commonSVGs"
import { useForm } from '../../library/useForm'
import { MutableRefObject, useEffect, useRef, useState } from 'react'



const Search = (props: { showAside: 'showAside' | 'hide' }) => {

    const [ values, handler ] = useForm({})
    const [ height, setHeight ] = useState<string>(`8em`)

    const [ showDropDown, setShowDropDown ] = useState(true)

    useEffect(() => {
        // Calculates height of suggestionsWrap element
        const offsetTopRelativeToViewport = wrap.current.getBoundingClientRect().top
        const h = (window.innerHeight - offsetTopRelativeToViewport) + 'px'
        setHeight(h)
    }, [])

    // useEffect(() => {
    //     console.log(values.search)
    // }, [values.search])

    const wrap = useRef() as MutableRefObject<HTMLDivElement>

    type DataType = 'artist' | 'album' | 'track'

    const SuggestionListElements = (dataType: DataType) => {
        const arr: number[] = [1, 2, 3, 4, 5]

        return arr.map((item, i) => (
            <div 
                className={ `${styles.suggestion} ${styles[dataType]} ${utilStyles.flexRow_W}` }
                key={ `suggestion-${i}` }
                >
                <div className={ `${styles.thumbnail}` }>
                    <img 
                        src="https://lh3.googleusercontent.com/a-/AOh14Gh0uJ6w9eS22YnV9mBkq5ZnmniEnrPuuWf4R6p1Zg=s70-p-k-rw-no" 
                        alt=""
                    />
                </div>

                <div className={ `${styles.titleWrap} ${utilStyles.flexCol_NW}` }>
                    <h3>Yellow Submarine Yellow Submarine Yellow Submarine</h3>
                    {
                        (dataType !== 'artist')
                        ?
                        <p>The Beatles</p>
                        :
                        null
                    }
                </div>
            </div>
        ))
    }

    const Suggestions = () => (
        <div className={ `${styles.suggestionsContainer} ${utilStyles.flexCol_NW}` }>
            <ul>
                <h2 className={ `${styles.suggestionLabel}` }>Songs</h2>
                <div className={ `${styles.gridder}` }>
                    {  SuggestionListElements('track') }
                </div>
            </ul>

            <ul>
                <h2 className={ `${styles.suggestionLabel}` }>Artists</h2>
                <div className={ `${styles.gridder}` }>
                    {  SuggestionListElements('artist') }
                </div>
            </ul>

            <ul>
                <h2 className={ `${styles.suggestionLabel}` }>Albums</h2>
                <div className={ `${styles.gridder}` }>
                    {  SuggestionListElements('album') }
                </div>
            </ul>

        </div>
    )


    const DropDownMenu = () => (
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

                    <input
                        className={ `${styles.searchInput}` }
                        placeholder="Search songs, albums, artists.."
                        type="search"
                        autoComplete="off"
                        name="search"
                        onChange={handler}
                    />

                    <aside className={ `${styles[props.showAside]}` }></aside>
                </div>

               
                {
                    showDropDown
                    ?
                    <DropDownMenu/>
                    :
                    null
                }


               
            </div>
        </div>
    )
}


export default Search