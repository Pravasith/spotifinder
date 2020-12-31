import gsap from "gsap"
import { useEffect, useRef } from "react"

export const SearchIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 65.9 66.4"
        version="1.1"
        viewBox="0 0 65.9 66.4"
        xmlSpace="preserve"
        >
        <g
            fill="none"
            stroke="#0FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="6"
            >
            <circle cx="31" cy="31" r="28"></circle>
            <path d="M50.8 51.3L62.9 63.4"></path>
        </g>
    </svg>
)



export const DurationIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 29 29"
        version="1.1"
        viewBox="0 0 29 29"
        xmlSpace="preserve"
        >
        <circle
            cx="14.5"
            cy="14.5"
            r="13"
            fill="none"
            stroke="#0FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
        ></circle>
        <path
            fill="none"
            stroke="#0FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M14.5 6.6L14.5 14.5 20.5 14.5"
        ></path>
    </svg>
)


export const ImagePlaceHolderSVG = (
    props: {
        cn: string,
        imgSrc: string
    }
) => {

    const img = useRef(null)

    useEffect(() => {
        gsap.to(
            // `.${ props.cn }_img`,
            img.current,
            {
                transformOrigin: '50% 50%',
                scale: '1.2',
                duration: 0.2,
                ease: 'ease-out'
            }
        )
    }, [])

    return (
        <div 
            className={ props.cn }
            // style={{
            //     background: "#ffffff"
            // }}
            onMouseEnter={() => {
                gsap.to(
                    // `.${ props.cn }_img`,
                    img.current,
                    {
                        transformOrigin: '50% 50%',
                        scale: '1.5',
                        duration: 0.2,
                        ease: 'ease-in'
                    }
                )
            }}
            onMouseLeave={() => {
                gsap.to(
                    // `.${ props.cn }_img`,
                    img.current,
                    {
                        transformOrigin: '50% 50%',
                        scale: '1.2',
                        duration: 0.2,
                        ease: 'ease-out'
                    }
                )
            }}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0"
                y="0"
                enableBackground="new 0 0 362.5 362.3"
                viewBox="0 0 362.5 362.3"
                >
                <path
                    id="bgd"
                    fill="#FFF"
                    d="M356.5 109.3c-1.3-19.9-3.5-39.6-9.9-58.7-5.9-17.4-17.5-29-34.9-34.8-23.2-7.8-47.3-9.6-71.4-10.7-43.5-1.9-87.1-2.1-130.6.8C89.8 7.3 70 9.4 51 15.8 33.4 21.7 21.7 33.3 15.8 51 8.1 74 6.3 97.9 5.2 121.9c-2 44-2.2 88.1.9 132.1 1.4 20.2 3.5 40.3 10.5 59.5 4.7 12.9 12.5 23.1 25.1 29.2 17.3 8.5 36.1 11 54.9 12.8 28.3 2.8 56.7 3.2 85.1 3.1 24.5.2 49-.3 73.4-2.1 19.7-1.5 39.3-3.6 58.1-10.3 16.3-5.8 27.2-16.7 33-33 8.4-23.5 10.1-48.1 11.2-72.7 1.9-43.8 2.1-87.5-.9-131.2z"
                ></path>

                <g id="imagePH">
                    <defs>
                        <path
                            id="SVGID_1_8IG_b00B$"
                            d="M360.2 107.8c-1.4-20.3-3.6-40.4-10.1-59.9-6-17.8-17.9-29.6-35.7-35.5-23.7-7.9-48.3-9.8-72.9-10.9-44.5-2-89-2.1-133.4.8-20.3 1.4-40.4 3.5-59.9 10-18 6-29.9 17.9-35.9 35.9-7.8 23.5-9.7 47.9-10.8 72.3-2 45-2.2 90 .9 134.9 1.4 20.6 3.5 41.1 10.7 60.8 4.8 13.1 12.7 23.5 25.6 29.9 17.7 8.7 36.9 11.2 56.1 13.1 28.9 2.8 57.9 3.3 86.9 3.1 25 .2 50-.3 74.9-2.2 20.1-1.5 40.1-3.7 59.3-10.5 16.6-5.9 27.8-17 33.7-33.6 8.6-24 10.3-49.2 11.5-74.2 1.9-44.8 2.1-89.4-.9-134z"
                        ></path>
                    </defs>

                    <clipPath id="SVGID_2_x6s9">
                        <use overflow="visible" xlinkHref="#SVGID_1_8IG_b00B$"></use>
                    </clipPath>

                    <g clipPath="url(#SVGID_2_x6s9)">
                        <image
                            ref={img}
                            className={ props.cn + '_img' }
                            width="100%"
                            height="100%"
                            overflow="visible"
                            // transform="scale(1.2)"
                            xlinkHref={ props.imgSrc }
                        ></image>
                    </g>
                </g>
            </svg>
        </div>
    )
}