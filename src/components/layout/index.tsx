import { ReactNode } from "react"


// import Navbar from '../navbar'



type Props = {
    children: ReactNode
}


const Layout = ( props: Props ) => {

    const { children } = props

    const PageContent = () => (
        <>
            <main className = "main">
                {
                    children
                }
            </main>
        </>
    )

    return (
        <>
            <PageContent/>
        </>
    )
}

export default Layout