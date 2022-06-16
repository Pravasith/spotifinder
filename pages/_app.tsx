import { AppProps } from "next/app";
import { useEffect } from "react";

import "../src/assets/scss/libs/global.scss";
import Layout from "../src/components/layout/index";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

NProgress.configure({ showSpinner: false });

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps, router }: AppProps) => {
    return (
        <>
            <Layout>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </>
    );
};

export default App;
