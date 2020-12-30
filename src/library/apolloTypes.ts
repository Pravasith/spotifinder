import { gql } from "@apollo/client"

export const GENERIC_SPOTIFY = `
        name,
        images{
            url, width
        }
    `

export const SEARCH_SPOTIFY = gql`
    query SearchSpotify($query: String!){
        search(
            searchQuery: $query,
            searchFilter: ["track", "artist", "album"]
            limit: 5
        ){
            artists{${ GENERIC_SPOTIFY }},
            albums{
                ${ GENERIC_SPOTIFY },
                artistNames
            },
            tracks{
                ${ GENERIC_SPOTIFY },
                artistNames
            }

        }
    }
`