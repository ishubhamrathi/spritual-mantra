import styles from "./Navbar.module.css";
import { signOut, getAuth } from "firebase/auth";

const Navbar = () =>{
    const signOff = () =>{
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }
    return (
        <>
            <div className={styles.container}>
               <div className={styles.menu}>
                
                    <div className={styles.menuitem}>
                        Spritual Mantra
                    </div>
                    {/* <div className={styles.menuitem}>
                        Item2
                    </div>
                    <div className={styles.menuitem}>
                        Item3
                    </div> */}
                </div>
                <div className={styles.signoff}>
                <button className={styles.signoffbtn} onClick={()=>{signOff()}}>SignOut</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;