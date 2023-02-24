import styles from "./Navbar.module.css";

const Navbar = () =>{
    return (
        <>
            <div className={styles.container}>
               <div className={styles.menu}>
                    <div className={styles.menuitem}>
                        Item1
                    </div>
                    <div className={styles.menuitem}>
                        Item2
                    </div>
                    <div className={styles.menuitem}>
                        Item3
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Navbar;