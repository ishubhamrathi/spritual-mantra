import styles from "./About.module.css"
import underline from "../../assessts/underline.png";

const About = () => {
    return (
        <>
             <div className={styles.column}>
                <div className={styles.heading}>About Us</div>
                <div className={styles.underline}>
                    <div>
                        <img src={underline}/>
                    </div>
                </div>
                <p className={styles.text}>
                Welcome to Spiritual Mantra, a website dedicated to helping individuals on their spiritual journey. We understand that spirituality is a personal journey that requires a deep connection with oneself, and we are here to provide you with the tools and guidance you need to explore and deepen that connection.
                Our website offers a wide range of resources that are designed to help you achieve spiritual growth and personal transformation. From spiritual mantras to meditation techniques, quotes, books, and healthy spiritual ways, we have everything you need to begin your journey towards a new spiritual life filled with happiness and joy.
                Our team of experts has years of experience in the field of spirituality and is passionate about helping people achieve their highest potential. We offer personalized guidance based on your specific needs, whether you are just starting on your spiritual journey or are looking for ways to deepen your practice.
                </p>
                <p className={styles.text}>
                At Spiritual Mantra, we believe in the power of spiritual practices to <b>transform lives</b>. Our goal is to provide you with the resources and support you need to achieve your spiritual goals and lead a happier, more fulfilling life.
                We are committed to providing our users with the highest quality content and resources. Our website is regularly updated with new information, so be sure to check back often for the latest updates and insights.
                Thank you for visiting Spiritual Mantra. We are here to support you on your spiritual journey and look forward to helping you achieve your highest potential.
                </p>
            </div>
        </>
    )
}

export default About;