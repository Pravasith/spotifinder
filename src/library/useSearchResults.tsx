// export default 1

import { useEffect, useState } from "react"
import { Album, Artist, Track } from "../interfaces/spotify"

interface Search {
    tracks: Track[]
    albums: Album[]
    artists: Artist[]
}

type searchQueryArgs = {

}

export const useSearchResults = (searchQueryArgs: string) => {

    interface IState {
        data : null | Search[]
        loading : boolean
    }

    const [ state, setState ] = useState<IState>(
        {
            data : null,
            loading : true
        }
    )

    useEffect(() => {
        // const getData = async () => {
        //     await
        // }

        // getData()
    }, [searchQueryArgs])

    return state

}


