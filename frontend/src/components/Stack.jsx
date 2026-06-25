import { HeroSlider } from "./Accessories/LandSlider"
import { FinalOut } from "./Booklists/FinalSec"
import { Fantasy } from "./Fantasy/FantasyBooks"
import { ProgramLists } from "./Program/ProFinal"
import { History } from "./History/HisResult"
import { SelfHelp } from "./SelfHelp/SelfResult"
import { Fiction } from "./Fiction/Head"
import { BookTrailerSlider } from "./Accessories/LongSlider"

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
            <BookTrailerSlider />
        </>
    )
}