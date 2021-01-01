import utilStyles from '../../../assets/scss/libs/utils.module.scss'
import styles from '../../../assets/scss/image_slider.module.scss'
import { LeftArrow, RightArrow } from '../../../assets/SVGs/commonSVGs'




const deleteThis2 = 'https://storage.googleapis.com/kaggle-avatars/images/2033655-gp.jpg'
const deleteThis3 = 'https://static.toiimg.com/photo/72106422.cms'
const deleteThis = 'https://www.filmibeat.com/ph-big/2016/07/ileana-d-cruz-holidays-with-her-boyfriend-andrew-kneebone-fiji_1467630331150.jpg'





const Slides = () => {

    const arr = [1, 2, 3, 4, 5, 6]

    return arr.map((item, i) => {
        return (
            <div className={ `${styles.slideWrap} ${utilStyles.posRel}` }>
                <div className={ `${styles.slideInnerWrap} ${utilStyles.posAbs_NW}` }>
                    <div
                        className={ `${styles.slideBgd}` }
                        >
                        <div className={ `${styles.picWrap} ${utilStyles.posRel}` }>
                            <img
                                className={ `${styles.actualPic} ${utilStyles.posAbs_NW}` }
                                src={deleteThis3}
                                alt=""
                            />
                        </div>

                        <div className={ `${styles.footer} ${utilStyles.flexRow_Centre}` }>
                            <p>Name of the song asd asdasd as asdasdasdasdsad asdasdasd</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    })
}


const ImageSlider = () => {



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
                            >
                            <LeftArrow/>
                        </button>

                        <button
                            className={ `${styles.rightIcon} ${utilStyles.roundSVGButton}` }
                            >
                            <RightArrow/>
                        </button>
                    </div>
                </div>

                <div className={ `${styles.outerSlideWrap}` }>
                    <div className={ `${styles.actualSlideWrappers} ${utilStyles.flexRow_NW}` }>
                        { Slides() }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider