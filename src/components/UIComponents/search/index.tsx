

import styles from '../../../assets/scss/search/search.module.scss'
import utilStyles from '../../../assets/scss/libs/utils.module.scss'


import { SearchIcon } from "../../../assets/SVGs/commonSVGs"

import { useForm } from '../../../library/useForm'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import { SEARCH_SPOTIFY } from '../../../library/apolloTypes'
import DropDown from './dropDown'









const Search = (props: { showAside: 'showAside' | 'hide' }) => {

    const [ values, handler ] = useForm({})
    const isFirstRender = useRef(true)

    const [ showDropDown, setShowDropDown ] = useState(false)


    const renders = useRef(0)


    const [ searchQuery, setSearchQuery ] = useState<string | undefined>('')
    const [ getSearchResults, { loading, data } ] = useLazyQuery(SEARCH_SPOTIFY)
    

    const [ height, setHeight ] = useState<string>(`0em`)
    const wrap = useRef() as MutableRefObject<HTMLDivElement>

    useEffect(() => {
        !!searchQuery && getSearchResults({
            variables: {
                query: searchQuery
            }
        })

        if(!!searchQuery && wrap.current && isFirstRender.current) {
            const offsetTopRelativeToViewport = wrap.current.getBoundingClientRect().top
            const h = (window.innerHeight - offsetTopRelativeToViewport) + 'px'
            // console.log(window.innerHeight, offsetTopRelativeToViewport)
            setHeight(h)

            // console.log(renders.current++, isFirstRender)
            isFirstRender.current = false
        }
    }, [searchQuery])

    // useEffect(() => {
    //     console.log(data)
    // }, [loading])
    



    return (
        <div 
            className={ `${styles.container} ${utilStyles.flexCol_Centre}` }
            // onBlur={() => {
            //     console.log('x')
            //     setShowDropDown(false)
            // }}
            // tabIndex={1}
            >
            <div 
                className={ `${styles.searchWrap} ${utilStyles.posRel}` }
                onMouseEnter={() => setShowDropDown(true)}
                onMouseLeave={() => setShowDropDown(false)}
                    // onFocus={() => setShowDropDown(true)}
                    
                    // tabIndex={1}
                >

                <div
                    className={ `${styles.searchInputWrap} ${utilStyles.flexRow_Centre}` }
                    
                    >
                    <aside className={ `${styles[props.showAside]}` }></aside>

                    <div className={ `${styles.searchIcon} ${utilStyles.flexRow_Centre}` }>
                        <SearchIcon/>
                    </div>

                    <form
                        className={ `${styles.formWrap} ${utilStyles.flexRow_Centre}` }
                        onSubmit={(e) => {
                            e.preventDefault()
                            setSearchQuery(values.search)
                        }}
                        >
                        <input
                            className={ `${styles.searchInput}` }
                            placeholder="Search songs, albums, artists.."
                            type="text"
                            autoComplete="off"
                            name="search"
                            onChange={ handler }
                        />

                        <button
                            type="submit"
                            className={ `${styles.submitButton}` }
                            >
                            <img
                                src="https://folio-pics.s3.eu-west-2.amazonaws.com/stylight/submit-button.png" 
                                alt="Submit"
                                className={ `${styles.submitIcon}` }
                            />
                        </button>
                    </form>
                    

                    <aside className={ `${styles[props.showAside]}` }></aside>
                </div>

                <div>
                    {
                        showDropDown && (
                            <div
                                className={ `${styles.dropDownContainer} ${utilStyles.posAbs_NW}` }
                                ref={wrap}
                                style={{
                                    height: height
                                }}
                                >
                                <DropDown
                                    data={data}
                                    loading={loading}
                                    showAside={props.showAside}
                                />
                            </div>
                        )
                        
                    }
                </div>

            </div>
        </div>
    )
}


export default Search