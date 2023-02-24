import styles from "./Contact.module.css"
import underline from "../../assessts/underline.png";

const Contact = () => {
    return (
        <>
            <div className={styles.column}>
                <div className={styles.heading}>Contact</div>
                <div className={styles.underline}>
                    <div>
                        <img src={underline}/>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <p className={styles.text}>
                    At Spiritual Mantra, we believe that spirituality is a personal journey, and we respect the unique path that each individual takes. Our team of experts is available to answer any questions you may have and to provide personalized guidance based on your specific needs.
                    Whether you are just starting on your spiritual journey or are looking for ways to deepen your practice, we invite you to explore our website and take advantage of our free resources. Feel free to contact us with any questions or concerns you may have, and we will be happy to assist you in any way we can.
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.form}>
                        <form>
                            <fieldset>
                                <legend>Name</legend>
                                <input type="text" placeholder="John Doe"></input>
                            </fieldset>
                            <fieldset>
                                <legend>Email</legend>
                                <input type="text" placeholder="sab@gmail.com"></input>
                            </fieldset>
                            <fieldset>
                                <legend>Message</legend>
                                <textarea type="textarea" placeholder="YourMessage"/>
                                <br />
                                <button type="submit">Submit</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;