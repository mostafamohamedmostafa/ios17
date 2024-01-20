
import iMessageapps from "../images/iMessageapps.jpg"
import check_in from "../images/check_in.jpg"
import swipe_to_reply from "../images/swipe_to_reply.jpg"
import search_screen from "../images/search_screen.jpg"
import location_large from "../images/location_large.jpg"
import all_stickers from "../images/all_stickers.jpg"
function Messages() {
    return (

        <div className="Messages">
            <section className="container-fluid">
                <h3>Messages</h3>

                <section className="Messagesectionone">
                    <div className="row row-cols-1 row-cols g-3 " >
                        <div className="col-lg-6 ">
                            <div className=" website-card-internal h-100">
                                <div className=" ">
                                    <h5 className=" ">All your iMessage apps in one place</h5>

                                    <h1 className=" ">Tap the new plus button to view all the things you send the most — like photos, audio messages, and your location. Swipe up to view the rest of your iMessage apps.</h1>

                                    <img src={iMessageapps} className="card-img-top  img-fluid " alt="..." />

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="website-card-internal h-100">
                                <div className="">
                                    <h5 className=" ">Let your friend know when you arrive safely</h5>

                                    <h1 className=" ">Check In automatically notifies your friend or family member when you arrive at your destination, such as your home.</h1>

                                    <img src={check_in} className="card-img-top img-fluid" alt="..." />

                                </div>

                            </div>
                        </div>

                    </div>
                </section>


                <section className="Messagesectiontwo">
                    <div className="row row-cols-1 row-cols g-3 " >
                        <div className="col-lg-9 ">
                            <div className=" website-card-internal h-100">
                                <div className=" ">
                                    <h5 className=" ">Catch-up and swipe to reply</h5>

                                    <h1 className=" ">A new catch-up arrow lets you jump to the first message you haven’t seen in a conversation. And now you can swipe to the right on any message to send a reply.</h1>

                                    <img src={swipe_to_reply} className="card-img-top  img-fluid " alt="..." />

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 ">
                            <div className="website-card-internal h-100">
                                <div className="">
                                    <h5 className=" ">Search filters</h5>

                                    <h1 className=" ">Find the message you’re looking for faster by combining search filters to quickly narrow your search.</h1>

                                    <img src={search_screen} className="card-img-top img-fluid" alt="..." />

                                </div>

                            </div>
                        </div>

                    </div>
                </section>



                <section className="Messagesectionthree">

                    <div class="    website-card-external d-flex  flex-column flex-lg-row justify-content-center  ">


                        <div className=" col-lg-6 ">
                            <h5 className="  ">A new way to share and view locations</h5>

                            <h1 className="h1textpadding  ">View a friend's or family member's shared location directly within your conversation.</h1>



                        </div>

                        <div className="  col-lg-6 ">

                            <img src={location_large} className="card-img-top " alt="..." />

                        </div>
                    </div>
                </section>

                <section className="Messagesectionfour">
                    <div className="row row-cols-1 row-cols g-3 " >
                        <div className="col-lg-12">
                            <div className=" website-card-internal h-100">
                                <div className=" ">
                                    <h5 className=" ">All your stickers in one place</h5>

                                    <h1 className=" ">The new stickers drawer lets you access all your Live Stickers, emoji, Memoji, and other sticker packs in one place. Your stickers sync with iCloud so they are available on your iPhone, iPad, and Mac devices..</h1>

                                    <img src={all_stickers} className="card-img-top  img-fluid " alt="..." />

                                </div>

                            </div>
                        </div>


                    </div>
                </section>





            </section>

        </div>
    );
}

export default Messages;

