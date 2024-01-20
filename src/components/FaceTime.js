
import video_message from "../images/video_message.png"
import facetime_appletv from "../images/facetime_appletv.jpg"

function FaceTime() {
    return (

        <div className="FaceTime        ">
            <section className="container-fluid">
                <h3>FaceTime</h3>

                <section className="FaceTimessectionone">
                    <div class="    website-card-external d-flex  flex-column flex-lg-row justify-content-center  ">


                        <div className=" col-lg-6 ">
                            <h5 className="  ">Leave a message</h5>

                            <h1 className="h1textpadding  ">Record a video or audio message when someone misses your FaceTime call.</h1>



                        </div>

                        <div className="  col-lg-6 ">

                            <img src={video_message} className="card-img-top  " alt="..." />

                        </div>
                    </div>
                </section>


                <section className="FaceTimesectiontwo">
                    <div className="row row-cols-1 row-cols g-3 " >
                        <div className="col-lg-6 ">
                            <div className=" website-card-internal effect-FaceTime h-100">
                                <div className=" ">
                                    <h5 className=" "> </h5>


                                    <h1 className=" ">
                                        React with your hands
                                        <br></br>
                                        Add a reaction that fills the camera frame with fun 3D augmented reality effects like hearts, confetti, fireworks, and more. And you can share a reaction with just a hand gesture.1
                                    </h1>


                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="website-card-internal h-100">
                                <div className="">
                                    <h5 className=" ">FaceTime on Apple TV</h5>

                                    <h1 className=" "> Use your iPhone as a camera and start a call directly from the FaceTime app on Apple TV, or hand off the call from your iPhone to your TV.2</h1>

                                    <img src={facetime_appletv} className="card-img-top img-fluid" alt="..." />

                                </div>

                            </div>
                        </div>

                    </div>
                </section>










            </section>

        </div>
    );
}

export default FaceTime;

