import { gql } from "@apollo/client"

export const GENERIC_SPOTIFY = `
    name,
    images{
        url, width
    }
`

export const SEARCH_SPOTIFY = gql`
    query SearchSpotify($query: String!) {
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


export const GET_ARTIST = gql`
    query ($id: String!)  {

        getArtist(artistId: $id){
            name,
            id,
            images{
                url
            },
            genres,
            followers,
            albums{
                name,
                id,
                images{
                    url
                },
                albumTracks{
                    name,
                    id,
                    duration_ms
                }
            },
            popularTracks{
                name,
                id,
                album{
                    images{
                        url
                    }
                }
            }
        }
            
        getRelatedArtists(artistId: $id){
            name,
            id,
            images{
                url
            }
        }
    
    }
`


  