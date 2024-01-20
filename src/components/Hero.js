import Heroimg from "../images/Heroimg.png"
function Hero() {
    return (

        <div className="Hero">
            <section className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <img src={Heroimg} className="card-img-top " alt="..." />

                    </div>



                </div>


                <div className="row Hero-Text   ">
                    <div className="col-lg-12">
                        <h6>IOS 17</h6>
                        <h1>
                            Every day.
                            <br></br>
                            More extraordinary.


                        </h1>

                        <h3>iOS 17 brings new features to enhance the things you do every day. Express yourself like never before when you call or message someone. Share content in convenient new ways. And do even more with new experiences for your iPhone.</h3>
                    </div>



                </div>

            </section>

        </div>
    );
}

export default Hero;
