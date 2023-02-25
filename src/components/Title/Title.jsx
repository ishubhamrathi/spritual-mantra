import styles from "./Title.module.css"
import underline from "../../assessts/underline.png";

const Title = (props) => {
    const {title} = props
    return (
        <>
             <div className={styles.column}>
                <div className={styles.heading}>{title}</div>
                <div className={styles.underline}>
                    <div>
                        <img src={underline}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Title;