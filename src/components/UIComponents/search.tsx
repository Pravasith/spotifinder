

import styles from '../../assets/scss/search/search.module.scss'
import utilStyles from '../../assets/scss/libs/utils.module.scss'

import { SearchIcon } from "../../assets/SVGs/commonSVGs"
import { useForm } from '../../library/useForm'
import { useEffect } from 'react'


const Search = () => {

    const [ values, handler ] = useForm({})

    useEffect(() => {
        console.log(values.search)
    }, [values.search])

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
                        name='search'
                        onChange={handler}
                    />
                </div>
            </div>
        </div>
    )
}


export default Search