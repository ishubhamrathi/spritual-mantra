import styles from "./Health.module.css"
import underline from "../../assessts/underline.png";

const Health = () => {
    return (
        <>
            <div className={styles.column}>
                <div className={styles.heading}>Health</div>
                <div className={styles.underline}>
                    <div>
                        <img src={underline}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Health;