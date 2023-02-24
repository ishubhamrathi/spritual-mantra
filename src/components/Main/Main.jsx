import chakrabg from "../../assessts/chakrabg.svg"
import chakra from "../../assessts/chakra.svg"
import styles from "./Main.module.css"
const Main = (props) =>{
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.leftwrapper}>
                    <div>
                    <p className={styles.text}><span className={styles.name}>{props.name}</span> Welcome to,</p>
                        <p className={styles.text}>Spritual Mantra</p>
                    </div>
                </div>
                <div className={styles.rightwrapper}>
                    <div className={styles.chakra}>
                        <img className={styles.chakrabg} src={chakrabg}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;