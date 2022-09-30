import react from "react";
import { Link, Route, Routes} from "react-router-dom";
import { RightSidePart } from "../../../component/RightSidePart";
import { TopTitle } from "../../../component/subTabMenu/TopPartSubTab";

const GeneralPageHouse = ()=>{
    const MyTitleTop=({newTitle})=>{
        const stopGrowing = {
            topInfo:[
                {
                    title1: "Houseplant",
                    linkTo1:"/houseplant",
                    title2: "General Houseplant Care",
                    linkTo2:"/houseplant/general"
                },
            ]
        }
        const addTitle = ()=>{
            return(
            <>
            <span className="" style={{ color: "rgb(51 51 51)" }}>
              &nbsp;›
            </span>
            <span style={{ color: "rgb(87 161 195)" }}>
                &nbsp;{newTitle}
            </span>
          </>
          )
        }
        return(
            <>
                <div className="mt-5">
                    <TopTitle dataTop={stopGrowing} addTitle={addTitle()}/>
                </div>
            </>
        )

    
}
// /////////////////////////////////////////
    const StopGrowing = ()=>{
        return(
            <>
                <div className="container ">
                    <div className="mt-5">
                        <MyTitleTop newTitle={"Stop Growing"} />
                    </div>
                    <div className="row  ">
                        <div className="col-9">
                            <h1 className="text-center mt-5 py-5">Why Is My Indoor Plant Not Growing? (Possible Problems+Solution)</h1>
                            <div>by: <span className="text-success">Richa</span></div>
                            <div>Last updated: 03/04/2022</div>
                            <hr className=" border border-dark" />
                            <div className="" style={{fontSize:"20px"}}>

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
                                <div>
                                    <table className="table table-bordered">
                                        <thead className="text-white bg-danger text-center">
                                            <tr>
                                            <th  scope="col">Essential Plant Supplies</th>
                                            <th  scope="col">Check Out On Amazon</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr >
                                            <td >Miracle-Gro Indoor Potting Mix</td>
                                            <td > <a className="btn btn-warning" href="https://www.amazon.com/dp/B0828SMZNS?tag=simplifyplants-20&linkCode=ogi&th=1&psc=1" target="_blank" role="button">Buy Now</a> </td>
                                            </tr> 
                                            <tr>
                                            <td >Miracle-Gro Indoor Plant Food</td>
                                            <td > <a className="btn btn-warning" href="https://www.amazon.com/dp/B082BPQH6Z?tag=simplifyplants-20&linkCode=ogi&th=1&psc=1" target="_blank" role="button">Buy Now</a> </td>
                                            </tr>
                                            <tr>
                                            <td >LED Grow Light for Indoor plants</td>
                                            <td > <a className="btn btn-warning" href="https://www.amazon.com/dp/B085CDPSMR?tag=simplifyplants-20&linkCode=ogi&th=1&psc=1" target="_blank" role="button">Buy Now</a> </td>
                                            </tr>
                                            <tr>
                                            <td >Kensizer Soil Tester, 3-in-1 Soil Moisture/Light/pH Meter.</td>
                                            <td > <a className="btn btn-warning" href="https://www.amazon.com/dp/B07NQLZB2T?tag=simplifyplants-20&linkCode=ogi&th=1&psc=1" target="_blank" role="button">Buy Now</a> </td>
                                            </tr>
                                            <tr>
                                            <td >Heavy Duty Gardening Tools with Non-Slip Rubber Grip</td>
                                            <td > <a className="btn btn-warning" href="https://www.amazon.com/dp/B07WGXM895?tag=simplifyplants-20&linkCode=ogi&th=1&psc=1" target="_blank" role="button">Buy Now</a> </td>
                                            </tr>
                                            <tr>
                                            <td >Govee Bluetooth Hygrometer and Thermometer</td>
                                            <td > <a className="btn btn-warning" href="https://www.amazon.com/dp/B07DWMJKP5?tag=simplifyplants-20&linkCode=ogi&th=1&psc=1" target="_blank" role="button">Buy Now</a> </td>
                                            </tr>
                                            <tr>
                                            <td >Humidifiers for Home and houseplants</td>
                                            <td > <a className="btn btn-warning" href="https://www.amazon.com/dp/B089YJXC2S?tag=simplifyplants-20&linkCode=ogi&th=1&psc=1" target="_blank" role="button">Buy Now</a> </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="h5">Also Read : </p>
                                <ul>
                                    <li><a href="https://simplifyplants.com/do-indoor-plants-need-sunlight/">How much sun do indoor plants need?</a></li>
                                    <li><a href="https://simplifyplants.com/grow-lights-for-indoor-plants/">How To Use Grow Lights For Indoor Plants? (A Complete Guide)</a></li>
                                    <li><a href="https://simplifyplants.com/indoor-plants-watering-guide/"> How Often Should You Water Indoor Plants? (Indoor Plants Watering Guide)</a></li>
                                </ul>
                                <div>
                                    <h2 className="text-success" >Help, My Houseplant Stopped Growing!</h2>
                                    <p><b className="text-primary">Light : </b> All plants need light. Some thrive in bright, direct light, but most prefer more moderate indirect light. If your houseplant stopped growing, you may need to move plants away from a too-bright window, or you can reduce the light with a sheer curtain. If, on the other hand, the light in your house is low, you may need to supplement available sunlight with grow lights or fluorescent tubes. Be sure to wipe the leaves occasionally, as dust blocks light and air.  0 seconds of 1 minute, 15 secondsVolume 0%   Next Stay</p>
                                    <p><b className="text-primary">Water : </b> Lack of water, or too much, is a common reason for a houseplant not growing. Don’t get in the habit of watering on a schedule, because some plants need watering more often or less frequently. Most prefer to be watered deeply when the soil is fairly dry, rather than by dribs and drabs. Empty the drainage saucer after a few minutes, and never let the plant stand in water. </p>
                                    <p><b className="text-primary">Fertilizer : </b>When it comes to feeding plants, too little fertilizer is always better than too much. Most plants benefit from light, regular feeding during spring and summer, but very little or no fertilizer at all when the plant is dormant during the winter months. Too much fertilizer can cause stunted houseplants, wilting, and yellow leaves. </p>
                                    <p><b className="text-primary">Repotting : </b> If your indoor plant isn’t growing, check to see if it’s rootbound. If the roots are too crowded, there may not be enough soil to hold adequate water and nutrients, and the plant may starve. Look for roots growing on the surface of the soil, or extending through the drainage hole. The new pot should be only slightly larger, as a pot that holds too much soil can retain water that leads to root rot. Be sure the new pot has a drainage hole in the bottom.</p>
                                    <p><b className="text-primary">Pests and disease : </b>Pests and disease: Pests are always a possibility when an indoor plant isn’t growing, and some are difficult to spot. For instance, spider mites are tiny pests that are difficult to see, but they leave visible webbing on the foliage. Watch for diseases such as powdery mildew or sooty mold, which are often linked to excess moisture. Viruses can cause stunted houseplants, too.</p>
                                </div>
                                <h2>How often should you water your indoor plant during the summer?</h2>
                                <div className="text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/IbM1M4wwruY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                                <p>Houseplants do not need too much water. However, there are some exceptions. During the summers, the heat of the sun is intense, and the temperature is high.</p>
                                <p>On the other hand, while growing indoors, the humidity decreases. Summers and springs are the time when most houseplants are in their growing season. Due to these reasons, the watering frequency increases during the summer season. The indoor plants need consistent and thorough watering. To follow the correct watering schedule, you can keep a calendar. Mark the dates in them and stay on track.</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <RightSidePart />
                        </div>
                    </div>
                </div>
            </>
        )
    }
// ///////////////////////////////////////////
    const PatchesOfBrown = ()=>{
        return(
            <>
                <div className="container border border-success">
                    <div className="mt-5">
                        <MyTitleTop newTitle={"Patches Of Brown"} />
                    </div>
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

////////////////////////////////////////////////////////
    const Dieffenbachia = ()=>{
        const typeDieffen=[
            {
                nameDieffen:" Dieffenbachia Honeydew",
            },
            {
                nameDieffen:"Dieffenbachia Maculata ‘Tropical Tiki’",
            },
            {
                nameDieffen:"Dieffenbachia Seguin",
            },

        ]
        return(
            <>
                <div className="container border border-success">
                    <div className="mt-5">
                        <MyTitleTop newTitle={"Different Dieffenbachia"} />
                    </div>
                    <div className="row  border border-danger">

                        <div className="col-9">
                            <h1>15 Types of Dieffenbachia You will Love to Grow</h1>
                            <div>
                                <span>by Salman Khan Gurung</span>
                                <span>August 5, 2022</span>
                                <span>10 minute read</span>
                            </div>
                            <div><img src="https://plantscraze.com/wp-content/uploads/2022/08/Dieffenbachia-800x500.webp" alt="dieffenbachia" /></div>
                            <p>Growing beautiful-looking Dieffenbachia plants may be a great idea because these low-maintenance plants will thrive in almost any condition.Moreover, their large, colorful leaves will effectively cleanse indoor air of toxins, improve air quality, and add to the decor.</p>
                            <p><b>In general, Dieffenbachia plants display over 50 species boasting shades of cream, yellow, green, and white, with varying sizes (3 to 6 feet) and unique-looking spadix flowers under ideal conditions</b></p>
                            <p> Dieffenbachia is said to ward off evil spirits and improve your health in Brazilian folklore. However, they will falter when incorrectly watered or lose color without proper lighting.</p>

                            <div>
                                <h3>15 Types of Dieffenbachia with Pictures and Names</h3>
                                <ol>
                                    {typeDieffen.map((item,index)=>{
                                        return(
                                            <>
                                                <li >
                                                    <a href="">
                                                        {item.nameDieffen}
                                                    </a>
                                                </li>
                                            </>
                                        )
                                    })}
                                </ol>
                            </div>
                            {/* work and design this part */}
                            <div>
                                <ol>
                                    <li>
                                        <h3>Diffenbachia Honeydew</h3>
                                        <p>Dieffenbachia Honeydew is a unique and colorful species hailing from Mexico and is known to be hardy and drought tolerant.</p>
                                        <p><b>It boasts broad leaves that display lines of different hues of green and white and is easily recognizable for its golden-yellow leaves with a green border.</b></p>
                                        <p>A mature plant will reach over 3 feet tall and boast leaves measuring around 12  to 16 inches in length and 2 to 3 inches wide.</p>
                                        <div><img src="https://plantscraze.com/wp-content/uploads/2022/08/Dieffenbachia-honeydew-640x853.jpg" alt="Honeydew" /></div>
                                        <p>The thick leaves easily prevent transpiration, making them perfect houseplants for warmer regions such as USDA 10 or above.It also makes one of the most commonly grown Dieffenbachia plants, as you can find them at reasonable prices in the nearby nurseries.</p>
                                        <p>Consider this Dieffenbachia variety to decorate your living room or office if you fancy a table plant. It does well with moderate watering and a few hours of lighting.</p>
                                        <div className="bg-secondary">
                                            <h4>Note: Dieffenbachia Honeydew is not known to produce blossoms.</h4>
                                        </div>
                                    </li>
                                </ol>
                            </div>        

                        </div>

                        <div className="col-3">
                            <RightSidePart />
                        </div>
                    </div>

                </div>
            </>
        )
    }
    // //////////////////////////////////
    const Citronella  = ()=>{
        return(
            <>
                <div className="container border border-success">
                    <div className="mt-5">
                        <MyTitleTop newTitle={"Citronella"} />
                    </div>
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
                    <div className="mt-5">
                        <MyTitleTop newTitle={"placement"} />
                    </div>
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