import react from "react";
import { Link, Route, Routes} from "react-router-dom";
import { RightSidePart } from "../../../component/RightSidePart";

const GeneralPageHouse = ()=>{
    const StopGrowing = ()=>{
        return(
            <>
                <div className="container border border-success">
                    <div className="row  border border-danger">
                        <div className="col-9">
                            <h1>Why Is My Indoor Plant Not Growing? (Possible Problems+Solution)</h1>
                            <div>by: <span>Richa</span></div>
                            <div>Last updated: 03/04/2022</div>
                            <hr />
                            <p>We all love that one corner in our room bearing houseplants. But it becomes somewhat discouraging when these indoor plants stop growing. This problem doesn’t happen in one day. After prolonged wrongdoings and unsuitable surroundings, the plant starts acting negatively.</p>
                            <p>So, in this article, we shall discuss everything about why is your indoor plant not growing and how you can fix the same.</p>
                            <p>In general, indoor plants stop growing because their primary care requirements are not met. Poor lighting conditions, Too much or too little water, low humidity, inadequate fertilizer, and unacceptable temperature range are primary causes of stunted growth in houseplants.</p>
                            <div><img src="https://simplifyplants.com/wp-content/uploads/2021/11/Indoor-plant-not-growing-735x490.jpeg.webp" alt="" /></div>
                            <div>
                                <p>ome links in the post are affiliate links and I get a commission from purchases made through links in the post.</p>
                            </div>
                            <h2>What are the causes behind indoor plants not growing?</h2>
                            <p>It can be pretty frustrating when your houseplants stop showing any progress. You might think you’re doing the right things.</p>
                            <p>But somewhere, something is wrong due to which your plant’s health is not improving. That is what we will discuss in this article.</p>
                            <p>I have listed the probable causes for indoor plants not growing that I have encountered over the years. Read them attentively to know what is wrong with your houseplants.</p>
                            <h2>Your plant is getting low light.</h2>
                            <p>The indoor plants will need light for photosynthesis and energy. Without these, either they will grow slowly or just stop growing.</p>
                            <p>Make sure that your indoor plants are getting a good amount of light. You will have to research your particular houseplant to know its light requirements.</p>
                            <p>Also Read : </p>
                            <ul>
                                <li><a href="https://simplifyplants.com/do-indoor-plants-need-sunlight/">How much sun do indoor plants need?</a></li>
                                <li><a href="https://simplifyplants.com/grow-lights-for-indoor-plants/">How To Use Grow Lights For Indoor Plants? (A Complete Guide)</a></li>
                                <li><a href="https://simplifyplants.com/indoor-plants-watering-guide/"> How Often Should You Water Indoor Plants? (Indoor Plants Watering Guide)</a></li>
                            </ul>
                            <h2>How often should you water your indoor plant during the summer?</h2>
                            <div><iframe width="560" height="315" src="https://www.youtube.com/embed/IbM1M4wwruY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            <p>Houseplants do not need too much water. However, there are some exceptions. During the summers, the heat of the sun is intense, and the temperature is high.</p>
                            <p>On the other hand, while growing indoors, the humidity decreases. Summers and springs are the time when most houseplants are in their growing season. Due to these reasons, the watering frequency increases during the summer season. The indoor plants need consistent and thorough watering. To follow the correct watering schedule, you can keep a calendar. Mark the dates in them and stay on track.</p>
                        </div>

                        
                        <div className="col-3">
                            <RightSidePart />
                        </div>
                    </div>

                </div>
            </>
        )
    }

    const PatchesOfBrown = ()=>{
        return(
            <>
                <div className="container border border-success">
                    <div className="row  border border-danger">
                        <div className="col-9">dged</div>
                        <div className="col-3">
                            <RightSidePart />
                        </div>
                    </div>

                </div>
            </>
        )
    }

    const Dieffenbachia = ()=>{
        return(
            <>
                <div className="container border border-success">
                    <div className="row  border border-danger">
                        <div className="col-9">dged</div>
                        <div className="col-3">
                            <RightSidePart />
                        </div>
                    </div>

                </div>
            </>
        )
    }
    const Citronella  = ()=>{
        return(
            <>
                <div className="container border border-success">
                    <div className="row  border border-danger">
                        <div className="col-9">dged</div>
                        <div className="col-3">
                            <RightSidePart />
                        </div>
                    </div>

                </div>
            </>
        )
    }
    const Placement = ()=>{
        return(
            <>
                <div className="container border border-success">
                    <div className="row  border border-danger">
                        <div className="col-9">dged</div>
                        <div className="col-3">
                            <RightSidePart />
                        </div>
                    </div>

                </div>
            </>
        )
    }

    return(
        <>
            <h1>this is General page</h1>
            <Routes>
                <Route path="stopGrowing" element={<StopGrowing/>} />
                <Route path="patchesOfBrown" element={<PatchesOfBrown/>} />
                <Route path="dieffenbachia" element={<Dieffenbachia/>} />
                <Route path="citronella" element={<Citronella/>} />
                <Route path="placement" element={<Placement/>} />
            </Routes>
        </>
    )
}
export default GeneralPageHouse;