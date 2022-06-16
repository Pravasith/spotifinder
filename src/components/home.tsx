import { ApolloProvider } from "@apollo/client";
import { useEffect } from "react";

import styles from "../assets/scss/home.module.scss";
import utilStyles from "../assets/scss/libs/utils.module.scss";
import { HomeVinylTrack, VinylIcons } from "../assets/SVGs/homeSVGs";
import { client } from "../library/apollo";

import Search from "./UIComponents/search";

const Home = () => {
    return (
        <div className={`${styles.container} ${utilStyles.flexCol_Centre}`}>
            <div
                className={`${styles.searchWrap} ${utilStyles.flexRow_Centre}`}
            >
                <ApolloProvider client={client}>
                    <Search showAside={"showAside"} />
                </ApolloProvider>
            </div>

            <div
                className={`${styles.homeBackgroundWrap} ${utilStyles.flexCol_Centre} ${utilStyles.posAbs_NW}`}
            >
                <div className={`${styles.vinyl} ${utilStyles.posRel}`}>
                    <img
                        src="https://folio-pics.s3.eu-west-2.amazonaws.com/spotifinder/vinyl-track-01.png"
                        alt=""
                        srcSet=""
                    />
                    <div
                        className={`${styles.vinylIcons} ${utilStyles.posAbs_NW}`}
                    >
                        <VinylIcons />
                    </div>
                </div>

                <h1 className={`${styles.homeText} ${utilStyles.posRel}`}>
                    Search, find, and preview songs from Spotify.
                </h1>

                <a
                    href="https://pravasdesign.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Designed and developed by Pravas. Click to visit portfolio.
                </a>
            </div>
        </div>
    );
};

export default Home;
