import Title from "../Title/Title";
import Info from "../Info/Info";
import img1 from "../../assessts/health/1.jpeg"
import img2 from "../../assessts/health/2.jpeg"
import img3 from "../../assessts/health/3.jpeg"
import img4 from "../../assessts/health/4.jpg"

const Health = () => {
    return (
        <>
            <Title title="Spritual Health"/>
            <Info
                heading="What is Spiritual Health?"
                text = {[
                    "Spiritual health is a term that is often used, but not always well understood. Spiritual wellness can be described as a sense of interconnectedness and oneness with all life."
                    ,<br/>,<br/>
                    ,"It includes the development and use of personal values and beliefs to guide behavior, as well as a sense of purpose or meaning in life."
                    ,<br/>,<br/>
                    ,"People who are spiritually healthy often have strong relationships with others, feel connected to something larger than themselves, and exhibit compassion and altruism."
                ]}
                img={img1}
            />
            <Info
                heading="Why is Spiritual Wellness Important?"
                text={[
                    "Spiritual health is a term that is often used, but not always well understood. Spiritual wellness can be described as a sense of interconnectedness and oneness with all life."
                    ,<br/>,<br/>
                    ,"It includes the development and use of personal values and beliefs to guide behavior, as well as a sense of purpose or meaning in life."
                    ,<br/>,<br/>
                    ,"People who are spiritually healthy often have strong relationships with others, feel connected to something larger than themselves, and exhibit compassion and altruism."
                ]}
                img={img2}
                direction    
            />
            <Info
                heading="Why is Spiritual Wellness Important?"
                text={[
                    "When it comes to life, there are many things that are out of our control. However, one thing we can always rely on is our spiritual foundation."
                    ,<br/>,<br/>
                    ,"A strong spiritual foundation can provide us with a number of benefits, including"
                    ,<ul>
                        <li>Inner Peace and Happiness</li>
                        <li>Deep Connection with Life</li>
                        <li>Learn to Live in the Present</li>
                        <li>Fearless Life</li>
                        <li>Ability to See the Future</li>
                        <li>Greater Appreciation of the World Around You</li>
                    </ul>
                ]}
                img={img3}
            />
            <Info
                direction
                heading="How Can You Cultivate Your Spiritual Health?"
                text={[
                    "Practicing spiritual health is an important part of overall health and well-being. It includes developing a personal relationship with a higher power if desired, as well as cultivating qualities such as compassion, forgiveness, and peace."
                    ,<br/>,<br/>
                    ,"Practicing spiritual health is an important part of overall health and well-being. It includes developing a personal relationship with a higher power if desired, as well as cultivating qualities such as compassion, forgiveness, and peace."
                    ,<br/>
                    ,"Some common practices and examples of spiritual health and wellness include:"
                    ,<ul>
                        <li>Prayer</li>
                        <li>Meditaion</li>
                        <li>Yoga</li>
                        <li>Religious Teachings or Practices</li>
                        <li>Spending Time in Silence</li>
                    </ul>
                ]}
                    img={img4}
            />
        </>
    )
}
export default Health;