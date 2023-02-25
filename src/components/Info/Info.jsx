import styles from "./Info.module.css"


const Info = (props) => {
    const {text, img, heading, direction} = props

    return(
        <>        
            {direction ? 
             <div className={styles.container}>       
            
             <div className={styles.items}>
                 <img src={img}/>
             </div>
             <div className={styles.items}>
                 <h1 className={styles.heading}>{heading}</h1>
                 <p className={styles.text}>
                 {text}
                 </p>
             </div>
         </div>
            : 
            <div className={styles.container}>       
            <div className={styles.items}>
                <h1 className={styles.heading}>{heading}</h1>
                <p className={styles.text}>
                {text}
                </p>
            </div>
            <div className={styles.items}>
                <img src={img}/>
            </div>
        </div>
            }

        </>
    )
}

export default Info;