import styles from "./Scriptures.module.css"
import underline from "../../assessts/underline.png";

const Scriptures = () =>{
    return (
        <>
            <div className={styles.column}>
                <div className={styles.heading}>Scriptures</div>
                <div className={styles.underline}>
                    <div>
                        <img src={underline}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Scriptures