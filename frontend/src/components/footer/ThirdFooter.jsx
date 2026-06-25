import facebook from "../../assets/DesignText/facebook.svg";
import insta from "../../assets/DesignText/insta.svg";
import xicon from "../../assets/DesignText/X-icon.png";

export const ThirdFooter = () => {
    return(
        <>
            <div className="popularlinks" >
                <div className="font-baskerville text-[17px] text-neutral-200">Follow Us</div>
                <div className="externallink">
                    <img src={facebook} alt="facebook" />
                    <img src={insta} alt="insta" />
                    <img src={xicon} alt="xastwitter" />
                </div>
                <div className="font-manrope font-medium text-neutral-400 text-sm">
                    Copyright © 2026 by Bookscape India
                </div>
            </div>
        </>
    )
}