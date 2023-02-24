import styles from "./Mantra.module.css"
import underline from "../../assessts/underline.png";

const Mantra = () =>{
    return (
        <>
           <div className={styles.column}>
                <div className={styles.heading}>Mantra's</div>
                <div className={styles.underline}>
                    <div>
                        <img src={underline}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mantra;