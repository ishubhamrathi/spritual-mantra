import styles from "./Footer.module.css"

const Footer = () =>{
    return (
        <>
            <div className={styles.container}>
                <div className={styles.items}>
                    <p className={styles.text}>Terms & Condition | Privacy Policy</p>
                </div>
                <div className={styles.items}>
                    <p className={styles.text}>
                    © Spritual Mantra. All Rights Reserved
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer