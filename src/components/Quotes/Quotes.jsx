import Info from "../Info/Info";
import Title from "../Title/Title";
import img1 from "../../assessts/quotes/1.jpg"
import img2 from "../../assessts/quotes/2.jpg"
import img3 from "../../assessts/quotes/3.jpg"
import img4 from "../../assessts/quotes/4.jpg"

const Quotes = () =>{
    return (
        <>
            <Title title="Quotes"/>
            <Info
                heading="Destiny"
                text = {["Sometime the wring choices bring us to the right places."]}
                img={img1}
            />
            <Info
                heading="Hope"
                text={["When we have Lost Everything inlcuding hope; Life becomes a disgrace & death a duty."]}
                img={img2}
                direction    
            />
            <Info
                heading="Sweet Pain"
                text={[
                    "Behind everything beautiful there has been some kind of pain."
                ]}
                img={img3}
            />
            <Info
                direction
                heading="Fantasy"
                text={["Everybody must have a fantasy."]}
            img={img4}
            />
        </>
    )
}
export default Quotes