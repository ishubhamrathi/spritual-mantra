import styles from "./Tiles.module.css";
import underline from "../../assessts/underline.png";
import { useGlobalContext } from "../context";
const Tiles = () =>{
    const {renderPage} = useGlobalContext();
    return (
        <>
            <div className={styles.column}>
                <div className={styles.heading}>Feel The Vibe</div>
                <div className={styles.underline}>
                    <div>
                        <img src={underline}/>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.items}>
                    <div className={styles.item1} onClick={()=>{renderPage(1)}}>
                        <span className={styles.text}>
                            MANTRA
                        </span>
                    </div>
                </div>
                <div className={styles.items}>
                    <div className={styles.item2} onClick={()=>{renderPage(2)}}>
                    <span className={styles.text}>
                            MEDITATION
                        </span>
                    </div>
                </div>
                <div className={styles.items} onClick={()=>{renderPage(3)}}>
                    <div className={styles.item3}>
                        
                    <span className={styles.text}>
                            SCRIPTURES QUOTES
                        </span>
                        
                    </div>
                </div>
                <div className={styles.items} onClick={()=>{renderPage(4)}}>
                    <div className={styles.item4}>
                    <span className={styles.text}>
                           DAILY SPIRIT
                        </span>
                        
                    </div>
                </div>
                <div className={styles.items} onClick={()=>{renderPage(5)}}>
                    <div className={styles.item5}>
                    <span className={styles.text}>
                            HEALTH
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tiles;