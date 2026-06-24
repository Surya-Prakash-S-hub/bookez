import { HeroSlider } from "./Accessories/LandSlider"
import { FinalOut } from "./Booklists/FinalSec"
import { Fantasy } from "./Fantasy/FantasyBooks"
import { ProgramLists } from "./Program/ProFinal"
import { History } from "./History/HisResult"
import { SelfHelp } from "./SelfHelp/SelfResult"
import { Fiction } from "./Fiction/Head"
import { Feedbacks } from "./Accessories/Feedbacks"
import { Subscribe } from "./Accessories/Subscribe"
import { Slideslide } from "./Accessories/ShopBook"
import { Slideslide2 } from "./Accessories/ShopBook2"

export const Stack = () => {
    return(
        <>
            <HeroSlider />
            <FinalOut />
            <Fantasy />
            <ProgramLists />
            <History />
            <SelfHelp />
            <Fiction />
            <Slideslide2 />
            <Slideslide />
            <Feedbacks />
            <Subscribe />
        </>
    )
}