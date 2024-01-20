
import create_sticker from "../images/create_sticker.png"
import peel_stick from "../images/peel_stick.jpg"
import effects__sticker from "../images/effects__sticker.png"

function Stickers() {
    return (

        <div className="Stickers">
            <section className="container-fluid">
                <h3>Stickers</h3>

                <section className="Stickerssectionone">
                    <div class="    website-card-external d-flex  flex-column flex-lg-row justify-content-center  ">


                        <div className=" col-lg-6 ">
                            <h5 className="  ">Create one-of-a-kind stickers</h5>

                            <h1 className="h1textpadding  ">Use your own photos to create Live Stickers.</h1>



                        </div>

                        <div className="  col-lg-6 ">

                            <img src={create_sticker} className="card-img-top " alt="..." />

                        </div>
                    </div>
                </section>


                <section className="Stickerssectiontwo">
                    <div className="row row-cols-1 row-cols g-3 " >
                        <div className="col-lg-3 ">
                            <div className=" website-card-internal effect-sticker h-100">
                                <div className=" ">
                                    <h5 className=" "> </h5>


                                    <h1 className=" ">Stylize Live Stickers with effects
                                        <br></br>
                                        Add effects like Shiny, Puffy, Comic, and Outline or create animated Live Stickers made with your Live Photos</h1>

                                    <img src={effects__sticker} className="card-img-top  img-fluid " alt="..." />

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-9 ">
                            <div className="website-card-internal h-100">
                                <div className="">
                                    <h5 className=" ">Use your stickers in more places</h5>

                                    <h1 className=" ">Your stickers drawer is in the emoji keyboard, so you can use stickers anywhere you can access emoji — including apps from the App Store. Use Markup to add stickers to photos, documents, screenshots, and more.</h1>

                                    <img src={peel_stick} className="card-img-top img-fluid" alt="..." />

                                </div>

                            </div>
                        </div>

                    </div>
                </section>










            </section>

        </div>
    );
}

export default Stickers;

