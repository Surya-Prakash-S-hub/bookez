import google from "../../assets/heroImg/google.png"
import apple from "../../assets/heroImg/apple.png"

export const Primary = () => {
    return(
        <section className="mainfooter">
                  <div className="topfooter">
                    <div className="endlinks">
                      <h1>Top genres</h1>
                      <div>
                        <a href="#">Academics</a>
                        <a href="#">Fiction</a>
                        <a href="#">Non Fiction</a>
                        <a href="#">Children</a>
                        <a href="#">Young Adults</a>
                        <a href="#">Comics & Graphic Novels</a>
                        <a href="#">Languages</a>
                        <a href="#">YT Educators</a>
                      </div>
                    </div>
                    <div className="endlinks">
                      <h1>Quick Links</h1>
                      <div>
                        <a href="#">Bestsellers</a>
                        <a href="#">New Arrivals</a>
                        <a href="#">Personalisation</a>
                        <a href="#">Gifting</a>
                        <a href="#">Top Publishers</a>
                        <a href="#">Sitemap</a>
                        <a href="#">BLOG</a>
                      </div>
                    </div>
                    <div className="endlinks">
                      <h1>Company</h1>
                      <div>
                        <a href="#">About us</a>
                        <a href="#">Who are we</a>
                        <a href="#">Our Technology</a>
                        <a href="#">Our Catalogue</a>
                        <a href="#">Careers</a>
                        <a href="#">About Repro India</a>
                      </div>
                    </div>
                    <div className="endlinks">
                      <h1>Help & Support</h1>
                      <div>
                        <a href="#">Contact Us</a>
                        <a href="#">Guest Order Tracking</a>
                        <a href="#">Track Orders</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Bookscape Now FAQs</a>
                        <a href="#">Return & Refund</a>
                        <a href="#">FAQs</a>
                      </div>
                    </div>
                    <div className="endlinks">
                      <h1>Top Authors</h1>
                      <div>
                        <a href="#">Joseph Murphy</a>
                        <a href="#">Osha</a>
                        <a href="#">Neville Gaddard</a>
                        <a href="#">Sudha Murty</a>
                        <a href="#">Ruskin bond</a>
                      </div>
                    </div>
                    <div className="endlinks">
                      <h1>Top Publishers</h1>
                      <div>
                        <a href="#">Penguin Random House</a>
                        <a href="#">Arihant Publication India</a>
                        <a href="#">Oswaal Books and Learning Pvt Ltd</a>
                        <a href="#">Notion Press</a>
                        <a href="#">Manjul Publishing House Pvt Ltd</a>
                      </div>
                    </div>
                    <div className="endlinks">
                      <h1>Experience The Bookscape App</h1>
                      <div>
                        <a href="#" className="mb-3">
                          <img src={google} alt="download from google" />
                        </a>
                        <a href="#">
                          <img src={apple} alt="download from apple" />
                        </a>
                      </div>
                      <h1 className="mt-10">Connect with us</h1>
                      <div>
                        <a href="#" className="">
                          Email: customer@bookscape.com
                        </a>
                        <a href="#" className="">
                          Phone: +91 86520 50510 (9am to 6pm, Mon-Fri)
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
    )
}