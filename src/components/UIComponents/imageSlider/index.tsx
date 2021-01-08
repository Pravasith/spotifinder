









//      -----------------------------------------------------------------------------------------------------
//      --  ---------------------------------------------------------------------------------------------  --
//      --  --      IMPORTANT NOTE: CHANGE THE NUMBER OF SLIDES                                        --  --
//      --  --      YOU WANT TO SEE PER SET IN THE SASS FILE.                                          --  --
//      --  --      EDIT THE VARIABLE CALLED '$noOfSlides'                                             --  --
//      --  ---------------------------------------------------------------------------------------------  --
//      -----------------------------------------------------------------------------------------------------








import { memo, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

import { LeftArrow, RightArrow } from '../../../assets/SVGs/commonSVGs'
// import { ImgData } from '../../../interfaces/imageSlider'

import utilStyles from '../../../assets/scss/libs/utils.module.scss'
import styles from '../../../assets/scss/image_slider.module.scss'
import titleCase from '../../../library/titleCase'





interface ImgData {
    title: string,
    url: string
}




const ImageSlider = memo((props: {
        id: string, // unique id
        title: string,
        pictures: ImgData[], // pictures array
        maxSlides: number
    }) => {

    const [ slideWidthAndHeight, setSlideWidthAndHeight ] = useState({})
    const [ disabledButton, setDisabledButton ] = useState({
        left: true,
        right: false
    })

    const slidesWrapper = useRef() as React.MutableRefObject<HTMLDivElement>
    // const actualSlidesWrapper = useRef() as React.MutableRefObject<HTMLDivElement>
    
    const currentSlideIteration = useRef(0)



    useEffect(() => {
        const { maxSlides } = props

        const minWidth = ((1 / maxSlides) * 100) + '%'
        const paddingTop = (((1 / maxSlides) * 100) + (((1 / maxSlides) / 3) * 100)) + '%'

        // console.log({minWidth, paddingTop})

        setSlideWidthAndHeight({
            minWidth,
            paddingTop
        })
    }, [])




    const { pictures, maxSlides } = props



   


    const slide = ( direction: 'left' | 'right' ) => {




        const individualSlide = document.getElementById('individualSlide-' + props.id)

        const wrapperWidth = slidesWrapper.current.getBoundingClientRect().width
        const individualSlideWidth = (individualSlide as HTMLDivElement).getBoundingClientRect().width
    
        // const maxSlides = Math.floor(wrapperWidth / individualSlideWidth)
        const noOfSets = Math.floor(props.pictures.length / maxSlides)
    
        const remainingElementsInTheLastSet = props.pictures.length % maxSlides
    
    
        const sliderClassName = `.${props.id}-select`



        switch (direction) {
            case 'right':

                setDisabledButton({
                    ...disabledButton,
                    left: false,
                })

                

                if(currentSlideIteration.current === (noOfSets - 1)){
                    gsap.to(
                        // `.${ styles.actualSlideWrappers }`,
                        sliderClassName,
                        {
                            duration: 0.2,
                            x: -(
                                ( currentSlideIteration.current * wrapperWidth )
                                    +
                                ( individualSlideWidth * remainingElementsInTheLastSet )
                            )
                        }
                    )

                    currentSlideIteration.current++

                    setDisabledButton({
                        ...disabledButton,
                        right: true,
                    })


                    break
                }

                currentSlideIteration.current++
                // console.log(-(currentSlideIteration.current * wrapperWidth))

                gsap.to(
                    // `.${ styles.actualSlideWrappers }`,
                    sliderClassName,
                    {
                        duration: 0.2,
                        x: -(currentSlideIteration.current * wrapperWidth),
                        // x: -(currentSlideIteration.current * (100 / noOfSets)) + '%', 


                        // x: -( currentSlideIteration.current * (individualSlideWidth * props.maxSlides) )
                    }
                )

                break


            case 'left':
                if(currentSlideIteration.current <= 0){
                    setDisabledButton({
                        ...disabledButton,
                        left: true,
                    })

                    break
                }

                setDisabledButton({
                    ...disabledButton,
                    right: false,
                })

                currentSlideIteration.current--

                gsap.to(
                    // `.${ styles.actualSlideWrappers }`,
                    sliderClassName,
                    {
                        duration: 0.2,
                        x: -(currentSlideIteration.current * wrapperWidth)
                    }
                )

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
                    key={ 'imageSliderKey-' + "-" + i }
                    style={ slideWidthAndHeight }
                    id={ 'individualSlide-' + props.id }
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
                                <p>{ titleCase(item.title) }</p>
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
            // style={ !!props.width ? { width: props.width } : {} }
            >
            <div className={ `${styles.imageSlideShowContainer} ${utilStyles.flexCol_NW}` }>
                <div className={ `${styles.slideShowHeader} ${utilStyles.flexRow_Centre}` }>
                    <h2 className={ `${styles.heading2}` }>{ props.title }</h2>

                    <div className={ `${styles.leftRight} ${utilStyles.flexRow_Centre}` }>
                        <button
                            className={ `${styles.leftIcon} ${utilStyles.roundSVGButton}` }
                            onClick={() => {slide('left')}}
                            disabled={ disabledButton.left }
                            >
                            <LeftArrow/>
                        </button>

                        <button
                            className={ `${styles.rightIcon} ${utilStyles.roundSVGButton}` }
                            onClick={() => {slide('right')}}
                            disabled={ disabledButton.right }
                            >
                            <RightArrow/>
                        </button>
                    </div>
                </div>

                <div 
                    className={ `${styles.outerSlideWrap}` }
                    ref={ slidesWrapper }
                    id={ 'slidesWrapper' }
                    >
                    <div 
                        className={ `${styles.actualSlideWrappers} ${props.id}-select ${utilStyles.flexRow_NW}` }
                        // id={ 'actualSlidesWrapper' }
                        // ref={ actualSlidesWrapper }
                        >
                        { Slides() }
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ImageSlider