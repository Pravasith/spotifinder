import utilStyles from '../../../assets/scss/libs/utils.module.scss'
import styles from '../../../assets/scss/image_slider.module.scss'
import { LeftArrow, RightArrow } from '../../../assets/SVGs/commonSVGs'
import { ImgData } from '../../../interfaces/imageSlider'
import { memo, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'






const ImageSlider = memo((props: {
        pictures: ImgData[],
        maxSlides: number
    }) => {

    const [ slideWidthAndHeight, setSlideWidthAndHeight ] = useState({})

    const slidesWrapper = useRef() as React.MutableRefObject<HTMLDivElement>
    const actualSlidesWrapper = useRef() as React.MutableRefObject<HTMLDivElement>

    const currentSlideIteration = useRef(0)
    

    useEffect(() => {

        const wrapperWidth = slidesWrapper.current.offsetWidth
        const minSlideWidth = 100 / props.maxSlides

        setSlideWidthAndHeight({
            minWidth: (minSlideWidth / 100) * wrapperWidth,
            paddingTop: ((minSlideWidth + (minSlideWidth / 3)) / 100) * wrapperWidth
        })

    }, [])


    const { pictures } = props
   


    const slide = ( direction: 'left' | 'right' ) => {

        const wrapperWidth = slidesWrapper.current.offsetWidth
        const individualSlideWidth = wrapperWidth / props.maxSlides

        const noOfSets = Math.floor(props.pictures.length / props.maxSlides)
        const remainingElementsInTheLastSet = props.pictures.length % props.maxSlides



        switch (direction) {
            case 'right':
                if(currentSlideIteration.current < noOfSets){

                    if(currentSlideIteration.current === (noOfSets - 1)){
                        gsap.to(
                            `.${ styles.actualSlideWrappers }`,
                            {
                                duration: 0.2,
                                x: -(
                                    (currentSlideIteration.current * wrapperWidth)
                                        +
                                    ( individualSlideWidth * remainingElementsInTheLastSet )
                                )
                            }
                        )

                        currentSlideIteration.current++
                        break
                    }

                    currentSlideIteration.current++
                    gsap.to(
                        `.${ styles.actualSlideWrappers }`,
                        {
                            duration: 0.2,
                            x: -(currentSlideIteration.current * wrapperWidth)
                        }
                    )
                }

                break

            case 'left':
                if(currentSlideIteration.current > 0){
                    currentSlideIteration.current--

                    gsap.to(
                        `.${ styles.actualSlideWrappers }`,
                        {
                            duration: 0.2,
                            x: -(currentSlideIteration.current * wrapperWidth)
                        }
                    )
                }


                break
        
            default:
                break
        }


    }


    const Slides = () => {

    
        return pictures.map((item, i) => {
            return (
                <div 
                    className={ `${styles.slideWrap} ${utilStyles.posRel}` }
                    key={ 'imageSliderKey-' + i }
                    style={slideWidthAndHeight}
                    >
                    <div className={ `${styles.slideInnerWrap} ${utilStyles.posAbs_NW}` }>
                        <div
                            className={ `${styles.slideBgd}` }
                            >
                            <div className={ `${styles.picWrap} ${utilStyles.posRel}` }>
                                <img
                                    className={ `${styles.actualPic} ${utilStyles.posAbs_NW}` }
                                    src={ item.url }
                                    alt=""
                                />
                            </div>
    
                            <div className={ `${styles.footer} ${utilStyles.flexRow_Centre}` }>
                                <p>{ item.title }</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            )
        })
    }










    return (
        <div
            className={ `${styles.container}` }
            >
            <div className={ `${styles.imageSlideShowContainer} ${utilStyles.flexCol_NW}` }>
                <div className={ `${styles.slideShowHeader} ${utilStyles.flexRow_Centre}` }>
                    <h2 className={ `${styles.heading2}` }>Popular Songs</h2>

                    <div className={ `${styles.leftRight} ${utilStyles.flexRow_Centre}` }>
                        <button
                            className={ `${styles.leftIcon} ${utilStyles.roundSVGButton}` }
                            onClick={() => {slide('left')}}
                            >
                            <LeftArrow/>
                        </button>

                        <button
                            className={ `${styles.rightIcon} ${utilStyles.roundSVGButton}` }
                            onClick={() => {slide('right')}}
                            >
                            <RightArrow/>
                        </button>
                    </div>
                </div>

                <div 
                    className={ `${styles.outerSlideWrap}` }
                    ref={ slidesWrapper }
                    >
                    <div 
                        className={ `${styles.actualSlideWrappers} ${utilStyles.flexRow_NW}` }
                        id={ 'actualSlidesWrapper' }
                        >
                        { Slides() }
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ImageSlider