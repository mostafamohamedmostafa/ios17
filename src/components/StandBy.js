import Heroimg from "../images/Heroimg.jpg"
import live_activities from "../images/live_activities.jpg"

function StandBy() {
    return (

        <div className="StandBy">
            <section className="container-fluid Standby">
                <h3>StandBy </h3>

                <section className="StandBysectionone">
                    <div class="    website-card-external row row-cols-1 row-cols g-3   ">


                        <div className=" col-lg-12  ">
                            <h5 className=" ">  A new full-screen experience</h5>

                            <h1 className="   ">Turn your iPhone on its side while charging to make it even more useful when you set it down.</h1>

                            <img src={Heroimg} className="card-img-top img-fluid  " alt="..." />


                        </div>


                    </div>




                </section>



                <section className="StandBysectiontwo">
                    <div class="    website-card-external row row-cols-1 row-cols g-3 ">


                        <div className=" col-lg-12 ">
                            <h5 className="   "> Live Activities in full screen</h5>

                            <h1 className="   ">With Live Activities in full screen, you can stay on top of things happening in real time, like the score of a game or the progress of your food delivery.</h1>

                            <img src={live_activities} className="card-img-top img-fluid " alt="..." />


                        </div>


                    </div>




                </section>








            </section>

        </div>
    );
}

export default StandBy;

