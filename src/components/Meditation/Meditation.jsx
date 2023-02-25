
import img1 from "../../assessts/meditation/1.jpeg"
import img2 from "../../assessts/meditation/2.jpeg"
import img3 from "../../assessts/meditation/3.jpeg"
import img4 from "../../assessts/meditation/4.jpg"
import Info from "../Info/Info";
import Title from "../Title/Title";

const Meditation = () => {
    return (
        <>
            <Title title="Meditation"/>
            <Info
                heading="What Is Meditation?"
                text={[
                    "Meditation can be defined as a set of techniques that are intended to encourage a heightened state of awareness and focused attention. Meditation is also a consciousness-changing technique shown to have many benefits on psychological well-being."
                ]}
                img={img1}
            />
            <Info
                heading="How to Practice Meditation"
                text={[
                    "So what exactly do you do during meditation? While there are many different forms of meditation and ways to practice, learning a basic meditation for beginners is a great place to begin:",
                    <ul>
                        <li><i>Choose a quiet spot that is free of distractions.</i> Turn off your phone, television, and other distractions. If you choose to play quiet music, select something calm and repetitive.</li>
                        <li><i>Set a time limit.</i> If you are just getting started, you might want to stick to shorter sessions of about 5 to 10 minutes in length.</li>
                        <li><i>Pay attention to your body and get comfortable.</i> You can sit cross-legged on the floor or in a chair as long as you feel that you can sit comfortably for several minutes at a time.</li>
                        <li><i>Focus on your breathing.</i> Try taking deep breaths that expand your belly and then slowly exhale. Pay attention to how each breath feels.</li>
                        <li><i>Notice your thoughts.</i> The purpose of meditation is not to clear your mind—your mind is inevitably going to wander. Instead, focus on gently bringing your attention back to your breath whenever you notice your thoughts drifting. Don't judge your thoughts or try to analyze them; simply direct your mind back to your deep breathing.</li>
                    </ul>
                ]}
                img={img2}
                direction    
            />
            <Info
                heading="Impact of Meditation"
                text={[
                    "Some psychological, emotional, and health-related benefits of meditation include:",
                    <ul>
                        <li>Better management of symptoms related to anxiety disorders, depression, sleep disorders, pain issues, and high blood pressure</li>
                        <li>Better stress management skills</li>
                        <li>Changes in different aspects of attention and mindfulness</li>
                        <li>Increased self-awareness</li>
                        <li>Improved emotional well-being</li>
                        <li>Improved working memory and fluid intelligence</li>
                        <li>Improved working memory and fluid intelligence</li>
                        <li>Improved working memory and fluid intelligence</li>
                        <li>Headache relief</li>
                    </ul>
                ]}
                img={img3}
            />
            <Info
                direction
                heading="What Does Meditation Do to the Brain?"
                text={["In addition to helping with anxiety and stress, evidence suggests that meditation has a powerful effect on the brain. Using brain imaging techniques, studies have found that regular meditation leads to changes in brain structure. ",
                <br/>,<br/>,
                "For example, one study found that eight weeks of mindfulness-based stress reduction (MBSR) was associated with increased volume in the brain's hippocampus, a structure associated with emotional regulation and memory. It was also connected to decreased volume in the amygdala, a structure that plays a part in anxiety, fear, and stress.",
                <br/>,<br/>,
                "For example, one study found that eight weeks of mindfulness-based stress reduction (MBSR) was associated with increased volume in the brain's hippocampus, a structure associated with emotional regulation and memory. It was also connected to decreased volume in the amygdala, a structure that plays a part in anxiety, fear, and stress."
            ]}
            img={img4}
            />
        </>
    )
}
export default Meditation