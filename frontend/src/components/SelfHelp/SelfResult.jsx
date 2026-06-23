import selfhelpBanner from "../../assets/banners/selfhelp.png";
import { SelfHelpLists } from "./SelfBooks";

export const SelfHelp = () => {
    return(
        <>
            <section className="mx-auto max-w-7xl px-2 py-12" >
                <div className="fantasybanner h-50" >
                    <a href="#" className="mx-auto">
                        <img src={selfhelpBanner} alt="selfhelp banner" className="rounded-lg" />
                    </a>
                </div>
                <div className="mx-auto max-w-7xl px-6 py-10 space-y-20" >
                    <h2 className="text-2xl font-serif mb-6">Self Improvement Books</h2>
                    <SelfHelpLists />
                </div>
            </section>
        </>
    )
}