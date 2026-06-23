import historyBanner from "../../assets/banners/history.png";
import { HistoryBooks } from "./HisBooks";

export const History = () => {
    return(
        <>
            <section className="mx-auto max-w-7xl px-2 py-12" >
                <div className="fantasybanner h-50" >
                    <a href="#" className="mx-auto">
                        <img src={historyBanner} alt="history banner" className="rounded-lg" />
                    </a>
                </div>
                <div className="mx-auto max-w-7xl px-6 py-10 space-y-20" >
                    <h2 className="text-2xl font-serif mb-6">Historical Books & Stories</h2>
                    <HistoryBooks />
                </div>
            </section>
        </>
    )
}