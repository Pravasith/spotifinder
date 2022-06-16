import Link from "next/link";

import styles from "../assets/scss/navbar.module.scss";
import utilStyles from "../assets/scss/libs/utils.module.scss";

import { CloseButton, Logo, SearchNavbar } from "../assets/SVGs/navbarSVGs";
import Search from "./UIComponents/search";
import { ApolloProvider } from "@apollo/client";
import { client } from "../library/apollo";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";

const Navbar = () => {
    const router = useRouter();

    const [openModal, setOpenModal] = useState(false);

    const SearchModal = () => (
        <div className={`${styles.fullSearchMode} ${utilStyles.posAbs_NW}`}>
            <div className={`${styles.topStrip} ${utilStyles.flexRow_Centre}`}>
                <div></div>

                <div className={`${utilStyles.flexRow_Centre} ${styles.ULs}`}>
                    <button
                        className={`${utilStyles.roundSVGButton}`}
                        onClick={() => setOpenModal(false)}
                    >
                        <CloseButton />
                    </button>
                </div>
            </div>

            <ApolloProvider client={client}>
                <Search showAside={"showAside"} />
            </ApolloProvider>
        </div>
    );

    if (router.asPath !== "/")
        return (
            <div className={`${styles.container}`}>
                <nav className={`${utilStyles.flexRow_Centre}`}>
                    <div
                        className={`${utilStyles.flexRow_Centre} ${styles.logo}`}
                    >
                        <Link href="/">
                            <a className={`${utilStyles.flexCol_Centre}`}>
                                <Logo />
                            </a>
                        </Link>
                    </div>

                    <div
                        className={`${utilStyles.flexRow_Centre} ${styles.ULs}`}
                    >
                        <button
                            className={`${utilStyles.roundSVGButton}`}
                            onClick={() => setOpenModal(true)}
                        >
                            <SearchNavbar />
                        </button>
                    </div>
                </nav>

                {!!openModal && <SearchModal />}
            </div>
        );
    else return <div></div>;
};

export default Navbar;
