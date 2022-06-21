import styles from "../../assets/scss/loading.module.scss"
import utilStyles from "../../assets/scss/libs/utils.module.scss"

export const Loader = () => {
    return (
        <div className={`${styles.loadingContainer}`}>
            <div className={`${styles.apiCall} ${utilStyles.flexRow_Centre}`}>
                <div className={`${styles.loadingDot} ${styles.ball01}`}></div>
                <div className={`${styles.loadingDot} ${styles.ball02}`}></div>
                <div className={`${styles.loadingDot} ${styles.ball03}`}></div>
            </div>
        </div>
    )
}
