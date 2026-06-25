import logo1 from "../../assets/DesignText/books.svg"
import logo2 from "../../assets/DesignText/geniueBook.svg"
import logo3 from "../../assets/DesignText/pricing.svg"
import logo4 from "../../assets/DesignText/delivery.svg"

export const Secondary = () => {
    return(
        <>
            <section className="secondary p-6">
                <div className="services flex align-middle justify-center gap-20">
                    <div className="logoStyle">
                        <div>
                            <img src={logo1} alt="logo" />
                        </div>
                        <p>Millions of books</p>
                    </div>
                    <div className="logoStyle">
                        <div >
                            <img src={logo2} alt="logo" />
                        </div>
                        <p>Genuine books</p>
                    </div>
                    <div className="logoStyle">
                        <div>
                            <img src={logo3} alt="logo" />
                        </div>
                        <p>Great pricing</p>
                    </div>
                    <div className="logoStyle">
                        <div>
                            <img src={logo4} alt="logo" />
                        </div>
                        <p>Faster delivery</p>
                    </div>
                </div>
            </section>
        </>
    )
}