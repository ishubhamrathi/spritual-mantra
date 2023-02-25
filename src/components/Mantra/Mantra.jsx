import Info from "../Info/Info";
import img1 from "../../assessts/mantras/1.jpg"
import img2 from "../../assessts/mantras/2.jpeg"
import img3 from "../../assessts/mantras/3.jpg"
import img4 from "../../assessts/mantras/4.jpeg"
import Title from "../Title/Title";
const Mantra = () =>{
    const data = {
        text1 : "So Hum"
    }
    
    return (
        <>
            <Title title="Mantra's"/>
            <Info
                heading="So Hum"
                text={[
                    <i>So Hum, or Soham </i>,
                    "is a Sanskrit mantra meaning ", <b>'I am that'</b>, ", with ", <b>'that'</b>, " being the universe. According to Markoe Schieffelin, working with this mantra helps one to identify with the oneness of the universe."]}
                img={img1}
            />
            <Info
                heading="Sa Ta Na Ma"
                text={[
                    <i>Sa Ta Na Ma</i>,
                    ", another Sanskrit mantra, can be translated as ",
                    <b>"birth, life, death, rebirth."</b>,
                    "Markoe Schieffelin explains it represents the cycles of life, and 'chanting this mantra out loud is very balancing for the brain and can help one to move through the changes, seasons, and cycles of life with grace and ease.'"
                ]}
                img={img2}
                direction    
            />
            <Info
                heading="Om"
                text={["Arguably the most popular mantra in world, Om is the sound of the universe and the sound of creation. It's also related to the crown chakra, and higher consciousness. ", <b>Om is everything and nothing, </b>, "and meditating on it can help you to tap into your power as a creator,' Markoe Schieffelin tells mbg.'"]}
                img={img3}
            />
            <Info
                direction
                heading="I am love"
                text={["Moving to a few English options, Markoe Schieffelin recommends a simple statement of ",
                <b>"I am Love" </b>,
                " for a mantra that helps you both tap into the love within yourself and the universe at large. By repeating 'I am love,' you acknowledge your own inner light and remember who you are."
            ]}
            img={img4}
            />
        </>
    )
}

export default Mantra;