// import { GetStaticProps, GetStaticPaths } from 'next'

import { GetStaticPaths, GetStaticProps } from "next"
import AlbumPage from "../../src/components/albumPage"
import { IAlbumData } from "../../src/interfaces/pages"
import { client } from "../../src/library/apollo"
import { GET_ALBUM } from "../../src/library/apolloTypes"






const Index = (
    props: IAlbumData
    ) => {


    return (
        <div className="container">
            <main>
                <AlbumPage
                    { ...props }
                />
            </main>

            <footer>
            </footer>
        </div>
    )
}


// This function gets called at build time
// Configuring this function so that only slugs 
// can be used as params to get this page
export const getStaticPaths: GetStaticPaths = async () => {
    // Call an external API endpoint to get movies

    // let url = API_URL
    // const data: { movies: Movie[] } = await getDataFromAPI(url) 
    // const { movies } = data

    // const paths = movies.map((movie: Movie) => `/artist/${ movie.slug }`)

    const paths = ['/album/4xBayAng8qIv3227mj3xjN']

    // console.log(paths)

    // fallback : false sets the pages with urls not mentioned in paths as 404 Not founds
    // return { paths, fallback: 'blocking' }
    return { paths, fallback: true }

}




// This also gets called at build time
// This function gets movie detail data from our movies API
// and passes it to the 'Index' component as props
// We then use it for OGs / Bookmarks / SEO practices
export const getStaticProps: GetStaticProps = async ({ params }) => {

    let albumData: IAlbumData | {} = {}
    // let artistData: any



    if(params){
        const { id } = params


        // const url: string = `${ API_URL }?q=${ slug }`
        // const data: { movies: Movie[] | [] } = await getDataFromAPI(url) 
        // artistData = data.movies[0]


        albumData = await client.query(
            {
                query: GET_ALBUM,
                variables: {
                    albumId: id
                }
            }
        )
        .then(result => result.data) // x
        .catch(e => console.log(e))


    }
   
    
  
    // Pass post data to the page via props
    return {
        // Set the timeout for generating to 1 second
        // This timeout could be longer depending on how often data changes
        revalidate: 1,
        props : {
            albumData
        }
    }
}


export default Index