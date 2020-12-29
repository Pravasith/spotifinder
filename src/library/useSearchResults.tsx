export default 1


// import { useEffect, useLayoutEffect, useState } from "react"
// import { Album, Artist, Track } from "../interfaces/spotify"

// interface Search {
//     tracks: Track[]
//     albums: Album[]
//     artists: Artist[]
// }

// export const useSearchResults = (search: string) => {

//     interface MState {
//         data : null | Search[]
//         loading : boolean
//     }

//     const [ mState, setMState ] = useState<MState>(
//         {
//             data : null,
//             loading : true
//         }
//     )

//     const url = `${ API_URL }?q=${ movie_searched }`

//     // useEffect(() => {
//     //     console.log(mState)
//     // }, [mState])


//     useEffect(() => {
//         // Don't request data if user hasn't searched anything
//         setMState({
//             ...mState,
//             loading : true
//         })

//         if(movie_searched.length > 3){
//             getDataFromAPI(url)
//             .then(res => {
    
//                 // console.log(
//                 //     {
//                 //         data : res.movies,
//                 //         loading : false
//                 //     }
//                 // )
//                 setMState({
//                     data : res.movies,
//                     loading : false
//                 })
//             })
//             .catch(e => console.error("Something wrong with useMovies Hook dude.", e))
//         }

//         // else{
//         //     setMState({
//         //         data: [],
//         //         loading : false
//         //     })
//         // }
       

//     }, [url])

    

   

//     return mState
// }


