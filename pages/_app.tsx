import { AppProps } from 'next/app'
import { useEffect } from 'react'


import '../src/assets/scss/libs/global.scss'
import Layout from '../src/components/layout/index'


const App= ({ Component, pageProps, router }: AppProps) => {

    
    return (
        <>
            <Layout>
                <Component
                    {...pageProps} 
                    key={router.route}
                />
            </Layout>
        </>
    )
}


export default App