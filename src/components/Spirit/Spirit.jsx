import styles from "./Spirit.module.css"
import underline from "../../assessts/underline.png";

const Spirit = () => {
    return (
        <>
            <div className={styles.column}>
                <div className={styles.heading}>Daily Spirit</div>
                <div className={styles.underline}>
                    <div>
                        <img src={underline}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spirit