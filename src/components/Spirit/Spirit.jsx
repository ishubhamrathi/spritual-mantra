import Info from "../Info/Info"
import img1 from "../../assessts/spirit/1.jpeg"
import Title from "../Title/Title"
const Spirit = () => {
    return (
        <>
            <Title title="Daily Thoughts"/>
           <Info
            heading="Today will be an awesome day."
            text={[<i>by spritual mantra</i>]}
            img={img1}
           />
            
        </>
    )
}

export default Spirit