import { HeroSlider } from "./Accessories/LandSlider"
import { Slider } from "./Accessories/Slider"
import { FinalOut } from "./Booklists/FinalSec"
import { Fantasy } from "./Fantasy/FantasyBooks"
import { ProgramLists } from "./Program/ProFinal"
import { History } from "./History/HisResult"
import { SelfHelp } from "./SelfHelp/SelfResult"
import { Fiction } from "./Fiction/Head"
import { Feedbacks } from "./Accessories/Feedbacks"
import { Subscribe } from "./Accessories/Subscribe"

export const Stack = () => {
    return(
        <>
            <HeroSlider />
            <Slider />
            <FinalOut />
            <Fantasy />
            <ProgramLists />
            <History />
            <SelfHelp />
            <Fiction />
            <Feedbacks />
            <Subscribe />
        </>
    )
}