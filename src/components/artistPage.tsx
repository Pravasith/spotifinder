import gsap from "gsap";
import Link from "next/link";

import { memo, useEffect } from "react";
import styles from "../assets/scss/album_artist_page.module.scss";
import utilStyles from "../assets/scss/libs/utils.module.scss";
import { CondorianoPP, VerifiedIcon } from "../assets/SVGs/artistAlbumPageSVGs";
import { ImagePlaceHolderSVG } from "../assets/SVGs/commonSVGs";

import { IArtistData } from "../interfaces/pages";
import { dynamicallyImportPackage } from "../library/dynamicImport";
import { titleCase } from "../library/stringOps";
import { SongsInAlbum } from "./UIComponents/albumData";
import ImageSlider from "./UIComponents/imageSlider";
import { Loader } from "./UIComponents/loader";

const ArtistPage = memo((props: IArtistData) => {
    useEffect(() => {
        dynamicallyImportPackage().then(ScrollTrigger => {
            gsap.registerPlugin(ScrollTrigger as GSAPPlugin);

            gsap.to(`.${styles.fixedStrip}`, {
                scrollTrigger: {
                    scroller: `.${styles.rightSide}`,
                    trigger: `.${styles.nakedBod}`,
                    start: "top 25%",
                    // markers: true,
                    toggleActions: "restart none none reverse",
                },
                duration: 0.2,
                y: "0%",
            });

            gsap.to(`.${styles.simArts}`, {
                scrollTrigger: {
                    scroller: `.${styles.rightSide}`,
                    trigger: `.${styles.nakedBod}`,
                    start: "top 25%",
                    // scrub: 0.5,
                    // markers: true,
                    toggleActions: "restart none none reverse",
                },
                duration: 0.2,
                opacity: 1,
            });

            gsap.to(`.${styles.simArts} .${styles.similarArtist}`, {
                scrollTrigger: {
                    scroller: `.${styles.rightSide}`,
                    trigger: `.${styles.nakedBod}`,
                    start: "top 25%",
                    // scrub: 0.5,
                    // markers: true,
                    toggleActions: "restart none none reverse",
                },
                stagger: {
                    amount: 0.25,
                },
                duration: 0.2,
                y: "-2em",
            });
        });
    }, []);

    let { getArtist, getRelatedArtists } = props.artistData;

    const deleteX = "https://picsum.photos/200/200";

    const similarArtists = () => {
        const arr = [...getRelatedArtists].splice(0, 6);

        return arr.map((item, i) => (
            <Link href={"/artist/" + item.id} key={"similar-artist-" + i}>
                <a>
                    <div
                        className={`${styles.similarArtist} ${utilStyles.flexCol_N}`}
                    >
                        <img
                            className={`${styles.artistPic}`}
                            src={
                                item.images.length !== 0
                                    ? item.images[item.images.length - 1].url
                                    : deleteX
                            }
                        />

                        <p className={`${styles.artistName}`}>
                            {titleCase(item.name)}
                        </p>
                    </div>
                </a>
            </Link>
        ));
    };

    const convertFollowers = (labelValue: number) => {
        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e9
            ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
            : // Six Zeroes for Millions
            Math.abs(Number(labelValue)) >= 1.0e6
            ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
            : // Three Zeroes for Thousands
            Math.abs(Number(labelValue)) >= 1.0e3
            ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
            : Math.abs(Number(labelValue));
    };

    // alert(test(6800000)); // this outputs 6.8M

    const albumPictures = () => {
        return getArtist.albums.map(album => {
            return {
                title: album.name,
                url: album.images[0].url,
                id: album.id,
            };
        });
    };

    return (
        <div className={`${styles.container} ${utilStyles.flexCol_Centre}`}>
            <div
                className={`${styles.absBigWrap} ${utilStyles.flexCol_Centre} ${utilStyles.posAbs_NW}`}
            >
                <div className={`${styles.header} ${utilStyles.flexRow_NW}`}>
                    <div
                        className={`${styles.leftSide} ${utilStyles.flexCol_NW}`}
                    >
                        <ImagePlaceHolderSVG
                            cn={`${styles.coverPicture}`}
                            imgSrc={
                                getArtist.images.length !== 0
                                    ? getArtist.images[0].url
                                    : deleteX
                            }
                        />

                        <div
                            className={`${styles.simArts} ${utilStyles.flexCol_Centre}`}
                        >
                            <h2>Similar Artists</h2>
                            <span className={`${styles.line}`}></span>

                            <div
                                className={`${styles.simGrid} ${styles.smallSimGrid}`}
                            >
                                {similarArtists()}
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${styles.rightSide} ${utilStyles.flexCol_NW}`}
                    >
                        <div
                            className={`${styles.fixedStrip} ${utilStyles.flexRow_NW}`}
                        >
                            <h2>{getArtist.name}</h2>
                        </div>

                        <div
                            className={`${styles.topWrap} ${utilStyles.flexCol_NW}`}
                        >
                            <div
                                className={`${styles.verified} ${utilStyles.flexRow_W}`}
                            >
                                <p>ARTIST</p>

                                <div className={`${styles.verifiedIcon}`}>
                                    <VerifiedIcon />
                                </div>
                            </div>

                            <h1 className={`${styles.title}`}>
                                {getArtist.name}
                            </h1>
                            <p className={`${styles.genreNames}`}>
                                {titleCase(getArtist.genres.join(", "))}
                            </p>

                            <div
                                className={`${styles.artists} ${utilStyles.flexRow_NW}`}
                            >
                                <div
                                    className={`${styles.condoriano} ${utilStyles.flexCol_W}`}
                                >
                                    <CondorianoPP />
                                </div>

                                <p className={`${styles.artistNames}`}>
                                    {convertFollowers(getArtist.followers)}
                                </p>
                            </div>

                            <span className={`${styles.line}`}></span>

                            <div
                                className={`${styles.similarArtists} ${utilStyles.flexCol_NW}`}
                            >
                                <h2 className={`${styles.artists}`}>
                                    Similar Artists
                                </h2>

                                <div className={`${styles.simGrid}`}>
                                    {similarArtists()}
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.nakedBod}`}>
                            <div className={`${styles.sliderWrap}`}>
                                <ImageSlider
                                    id={"AllAlbumsX"}
                                    pictures={albumPictures()}
                                    maxSlides={4}
                                    title={"All albums"}
                                    linkUrl={"/album/"}
                                />
                            </div>

                            {SongsInAlbum([
                                {
                                    name: "Popular songs",
                                    id: "PopularSongsOfArtist",
                                    images: [
                                        ...getArtist.popularTracks.map(
                                            track => {
                                                const picObj = track.images[0];

                                                return {
                                                    title: track.name,
                                                    url: picObj.url,
                                                };
                                            }
                                        ),
                                    ],
                                    albumTracks: [...getArtist.popularTracks],
                                },
                            ])}

                            {SongsInAlbum([
                                ...getArtist.albums.map(item => {
                                    return {
                                        name: item.name,
                                        id: item.id,
                                        images: item.images,
                                        albumTracks: item.tracks,
                                    };
                                }),
                            ])}

                            {/* <div className={ `${styles.sliderWrap}` }>
                                <ImageSlider
                                    id={'slider-2'}
                                    pictures={pictureArray}
                                    maxSlides={4}
                                    title={'Popular Albums'}
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ArtistPage;
