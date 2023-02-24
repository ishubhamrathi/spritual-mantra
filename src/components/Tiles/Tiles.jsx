import styles from "./Tiles.module.css";

const Tiles = () =>{
    return (
        <>
            <div className={styles.container}>
                <div className={styles.items}>
                    <div className={styles.item1}>
                        <span className={styles.text}>
                            MANTRA
                        </span>
                    </div>
                </div>
                <div className={styles.items}>
                    <div className={styles.item2}>
                    <span className={styles.text}>
                            MEDITATION
                        </span>
                    </div>
                </div>
                <div className={styles.items}>
                    <div className={styles.item3}>
                        
                    <span className={styles.text}>
                            SCRIPTURES
                        </span>
                        QUOTES
                    </div>
                </div>
                <div className={styles.items}>
                    <div className={styles.item4}>
                    <span className={styles.text}>
                           DAILY SPIRIT
                        </span>
                        SPRITUAL HEALTH
                    </div>
                </div>
                <div className={styles.items}>
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