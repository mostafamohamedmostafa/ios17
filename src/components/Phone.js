
import Phoneimg from "../images/Phoneimg.jpg"

function Phone() {
    return (

        <div className="Phone">
            <section className="container-fluid">
                <h3>Phone</h3>




                <div class="    website-card-external d-flex  flex-column flex-lg-row justify-content-center  ">


                    <div className=" col-lg-6 ">
                        <h5 className=" spec">Personalize your phone calls</h5>

                        <h1 className=" h1textpadding">Customize what people see when you call.</h1>



                    </div>

                    <div className="  col-lg-6 ">

                        <img src={Phoneimg} className="card-img-top " alt="..." />

                    </div>
                </div>

            </section>

        </div>
    );
}

export default Phone;

