import { features } from "./Websitedata";
function Moremore() {
    return (

        <div className="Moremore">
            <section className="container text-center">
                <h1 > And so much more.</h1>


                <div className="row row-cols-1 row-cols-md-2 g-4">

                    {features.map((featuresdata, index) => {
                        return (

                            <div className="col">
                                <div className="card h-100">
                                    <img src={featuresdata.image} className="card-img-top" alt={featuresdata.title} />
                                    <div className="card-body">
                                        <h6 className="card-title">  <strong>{featuresdata.title} </strong>  {featuresdata.description}   </h6>
                                    </div>

                                </div>
                            </div>

                        )

                    })}








                </div>

            </section>

        </div>
    );
}

export default Moremore;

