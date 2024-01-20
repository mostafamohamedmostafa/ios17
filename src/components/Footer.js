import { footer } from "./Websitedata";
function Footer() {
    return (

        <div className="Footer">
            <section className="container text-center">
                <h1 > And so much more.</h1>


                <div className="row row-cols-1 ">

                    {footer.map((footerdata, index) => {
                        return (

                            <div className="col" key={index}>
                                <ul className=" h-100">
                                    <li className=""> {footerdata.info}  </li>

                                </ul>
                            </div>

                        )

                    })}








                </div>

            </section>

        </div>
    );
}

export default Footer;

