import react from "react";
import { Link, Route, Routes} from "react-router-dom";
import { RightSidePart } from "../../../component/RightSidePart";
import { TopTitle } from "../../../component/subTabMenu/TopPartSubTab";
import { nanoid } from "nanoid";
import BackToTopButton from "../../../component/BackToTopButton";

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
                p1:"Dieffenbachia Honeydew is a unique and colorful species hailing from Mexico and is known to be hardy and drought tolerant.",
                p2:"It boasts broad leaves that display lines of different hues of green and white and is easily recognizable for its golden-yellow leaves with a green border.",
                p3:"A mature plant will reach over 3 feet tall and boast leaves measuring around 12  to 16 inches in length and 2 to 3 inches wide.",
                srcDieffen:"https://plantscraze.com/wp-content/uploads/2022/08/Dieffenbachia-honeydew-640x853.jpg",
                altImg:"Honeydew",
                p4:"The thick leaves easily prevent transpiration, making them perfect houseplants for warmer regions such as USDA 10 or above.It also makes one of the most commonly grown Dieffenbachia plants, as you can find them at reasonable prices in the nearby nurseries.",
                p5:"Consider this Dieffenbachia variety to decorate your living room or office if you fancy a table plant. It does well with moderate watering and a few hours of lighting.",
                note:"Note: Dieffenbachia Honeydew is not known to produce blossoms.",
                id:nanoid()
            },
            {
                nameDieffen:"Dieffenbachia Maculata ‘Tropical Tiki’",
                p1:"Dieffenbachia Maculata is a tall growing plant with large decorative leaves, perfect for keeping on empty spaces and walls.",
                p2:"Dieffenbachia Tropical Tiki boasts creamy blotches in the middle of green leaves in both light and dark shades.",
                p3:"When matured, the variegated leaves will get 8 inches long with a thick and smooth texture.",
                srcDieffen:"https://plantscraze.com/wp-content/uploads/2022/08/Dieffenbachia-maculata-tropical-tiki-640x853.jpg",
                p4:"Some may even attain yellow with ivory splotches, but this is rare. It makes a fantastic houseplant and prefers bright indirect sunlight, requiring warm temperature and bright areas close to the window.",
                p5:"It will attain a height of 2 to 3 meters when adequately cared for, but most plants will stay not more than 1.3 meters. However, it is not grown for flowers but decorated leaves.",
                note:"Do not confuse it with Dieffenbachia Seguine, as the latter boasts lined markings on the leaves instead of blotches.",
                id:nanoid()
            },
            {
                nameDieffen:"Dieffenbachia Seguin",
                p1:"Dieffenbachia Seguine makes a perfect ornamental houseplant with highly decorative leaves and lined markings.",
                p2:"Native to Southern Mexico, Brazil, and Puerto Rico, it displays cane-like stems and white-cream leaves.",
                p3:"The leaves may grow up to 12-inches and boasts veined line marketing colored in yellow or cream.",
                srcDieffen:"https://plantscraze.com/wp-content/uploads/2022/08/Dieffenbachia-seguin-640x853.jpg",
                p4:"When mature, the plant will grow no more than a foot in height, making them a short decorative plant, but they are easy to propagate, making them a perfect beginner’s plant.",
                p5:"When the conditions are ideal, Dieffenbachia Seguin will display showy white flowers that resemble peace lilies.",
                note:"Note: The white spadix will bear fruit with red or red-orange berries as it matures.",
                id:nanoid()
            },
            {
                nameDieffen:"Dieffenbachia Carina",
                p1:"Dieffenbachia Carina is one of the most beautiful houseplants, boasting leathery leaves with white and creamy middle and green edges.",
                p2:"It is commonly used for aesthetic effect as it remains short but gives decorative foliage, and it will grow to approximately 15-20 inches and display large, broader leaves.",
                p3:"Dieffenbachia Carina is a good option to grow them both indoors and outdoors.",
                srcDieffen:"https://plantscraze.com/wp-content/uploads/2022/08/Dieffenbachia-carina-709x1024.jpg",
                p4:"Native to Mexico and Argentina, this plant stays drought-tolerant and requires less watering.",
                p5:"You can quickly grow them in nurseries and online stores, and they will remain trouble-free with optimal care.",
                note:"Dieffenbachia Carina is a good option to grow them both indoors and outdoors.",
                id:nanoid()
            },
            {
                nameDieffen:"Dieffenbachia Tropic Snow",
                p1:"Dieffenbachia Tropic Snow, also known as dumb cane, resembles the tropical tiki plant.",
                p2:"You can easily spot the Tropic snow by their leaves, measuring 4 to 6 inches long and slightly curled at the end. It will grow 6 to 10 feet tall in the wild, but indoors it will stay at 6 feet.",
                p3:"However, it displays large oblong green leaves with variegation ranging from white to gold in the middle.",
                srcDieffen:"https://plantscraze.com/wp-content/uploads/2022/08/Dieffenbachia-tropic-snow-768x960.jpg",
                p4:"Also, one of the largest Dieffenbachia varieties, you can consider trimming the spent leaves and leggy stem to limit its growth.",
                p5:"It may look overwhelming initially, but it is one of the easiest houseplants and thrives in low light. However, please keep it away from the cold drafts.",
                note:"Dieffenbachia Tropic Snow is a beautiful  plant to have in your room, with ovate leaves that are mottled with shades of white or yellow.",
                id:nanoid()
            },
            {
                nameDieffen:"Dieffenbachia Camouflage",
                p1:"Dieffenbachia Camouflage is known for its unique foliage that gives it the impression of a camouflaged plant.",
                p2:"It displays oval-shaped leaves with wavy edges, colored in light and bright shades with deep veined lines. In addition, it shows dark splotches around the leaves.",
                p3:"Gardeners opine placing them at the window to ensure they get adequate indirect sunlight.",
                srcDieffen:"https://plantscraze.com/wp-content/uploads/2022/08/Dieffenbachia-camouflage-768x949.jpg",
                p4:"However, the different cultivar displays different hues of green, where some are dark green.",
                p5:"When properly cared for, it can reach a height of 3.75 feet (45 inches) and boast broader leaves. Ensure ample indirect sunlight to help boost the foliage growth.",
                note:"Dieffenbachia Camouflage is a slow-growing plant that will hardly produce about 5 to 6 leaves per year.",
                id:nanoid()
            },
            {
                nameDieffen:"Dieffenbachia Sterling",
                p1:"Dieffenbachia Sterling is a stunning plant with vibrant colored leaves, often prized as a beautiful decorative plant.",
                p2:"You would love to add them to your houseplant collections because they are easy to care for.",
                p3:"Dieffenbachia Sterling boasts stunning green leaves with bold white midribs from the leaf base to the tip creating a herring-bone pattern.",
                srcDieffen:"https://plantscraze.com/wp-content/uploads/2022/08/Dieffenbachia-sterling-640x853.jpg",
                p4:"Most gardeners find it in contrast to other Dieffenbachia varieties because of the unique-looking color that stays vibrant year around.",
                p5:"It will thrive indoors with bright indirect sunlight, so you should avoid growing them outdoors.",
                note:"A mature plant will grow about 3 feet in height with a well-branched structure averaging 4 to 8 basal shoots.",
                id:nanoid()
            },
            {
                nameDieffen:"Dieffenbachia Panther",
                p1:"Dieffenbachia Panther is a striking houseplant known for its large foliage size and attractive foliage design.",
                p2:"It displays thin-oval-shaped leaves with green edges, white splotches, and dotted markings around the leaf.",
                p3:"Some Panther varieties will display either white or cream splotches. When properly cared for, the plant will reach about 3 feet in height and 3 feet wide and showcase highly decorative foliage.",
                srcDieffen:"https://plantscraze.com/wp-content/uploads/2022/08/Dieffenbachia-panther-498x1024.jpg",
                p4:"Otherwise, you can transfer them to a container and keep them indoors.",
                p5:"Remember, Dieffenbachia Panther does not grow flowers even when kept outdoors. Instead, it develops showy leaves reaching over 8″ in length and a few inches wide.",
                note:"The great thing about them is that you can grow them indoors and outdoors, including nursery beds.",
                id:nanoid()
            },
            {
                nameDieffen:"Dieffenbachia Camille",
                p1:"Dieffenbachia Camille, also known as Dumb Cane ‘Camille’, is one of the laid-back varieties that grow well in nearly all conditions.",
                p2:"Dieffenbachia Camile displays broad, thin leaves with a lime-colored center and deep green edges fading to white in the center.",
                p3:"Originating in Central and South American forests, it boasts a lush tropical appearance and habit.",
                srcDieffen:"https://plantscraze.com/wp-content/uploads/2022/08/Dieffenbachia-camile-768x960.jpg",
                p4:"Do not be confused when visiting the store; look for a Dieffenbachia with pale yellow leaves and white margins.",
                p5:"Do you know that Dieffenbachia Camile is also known as Leopard Lily Camile?",
                note:"When cared for, it will grow about 3 feet in height and display large, broad leaves measuring even a foot in length.",
                id:nanoid()
            },
            {
                nameDieffen:"Dieffenbachia Compacta",
                p1:"Dieffenbachia Compacta is a beautiful variety that resembles Dieffenbachia Camille with its light-colored midrib and deep green edges.",
                p2:"Dieffenbachia Compacta is a beautiful variety that resembles Dieffenbachia Camille with its light-colored midrib and deep green edges.",
                p3:"One way to identify Dieffenbachia Compact is through its big pointy leaves with green edges and creamy midrib with greenish-white patches.",
                srcDieffen:"https://plantscraze.com/wp-content/uploads/2022/08/Dieffenbachia-compacta.jpg",
                p4:"It is a beginner plant that requires minimal care and ample medium sunlight. Remember to provide it with a conducive growing environment to witness a 2 to 3 feet long plant with massive foliage.",
                p5:"However, your Dieffenbachia Compact will fail to grow flowers.",
                note:"They love being outside in the summer but ensure to keep them away from direct sunlight.",
                id:nanoid()
            },

        ]
        return(
            <>
                <div className="container ">
                    <div className="mt-5">
                        <MyTitleTop newTitle={"Different Dieffenbachia"} />
                    </div>
                    <div className="row ">

                        <div className="col-9" style={{fontSize:"24px"}}>
                            <div className="py-4 px-3">
                                <h1 className="pt-4">10 Types of Dieffenbachia You will Love to Grow</h1>
                                <div style={{fontSize:"15px"}}>
                                    <span><span className="text-secondary">by </span> Salman Khan Gurung / </span>
                                    <span className="text-secondary" > August 5, 2022 / </span>
                                    <span className="text-secondary " >10 minute read</span>
                                </div>
                                <div className="text-center py-4"><img className="w-100" src="https://plantscraze.com/wp-content/uploads/2022/08/Dieffenbachia-800x500.webp" alt="dieffenbachia" /></div>
                                <p>Growing beautiful-looking Dieffenbachia plants may be a great idea because these low-maintenance plants will thrive in almost any condition.Moreover, their large, colorful leaves will effectively cleanse indoor air of toxins, improve air quality, and add to the decor.</p>
                                <p><b>In general, Dieffenbachia plants display over 50 species boasting shades of cream, yellow, green, and white, with varying sizes (3 to 6 feet) and unique-looking spadix flowers under ideal conditions</b></p>
                                <p> Dieffenbachia is said to ward off evil spirits and improve your health in Brazilian folklore. However, they will falter when incorrectly watered or lose color without proper lighting.</p>

                                <div>
                                    <h3>10 Types of Dieffenbachia with Pictures and Names</h3>
                                    <ol className="list-unstyled mx-5">
                                        {typeDieffen.map((item,index)=>{
                                            return(
                                                <>
                                                    <li className="" key={item.id}>
                                                        <a href={`#${item.id}`} style={{color:"#aaa",textDecoration:"none"}} onMouseOver={(e)=>{ e.target.style.color= '#231194'; e.target.style.textDecoration="underline"}} onMouseLeave={(e)=>{ e.target.style.color ="#aaa"; e.target.style.textDecoration="none"}}>
                                                            {`${index+1}.`}{item.nameDieffen}
                                                        </a>
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </ol>
                                </div>
                            </div>
                            {/* work and design this part */}
                            <div className=" " >
                                <ol className="list-unstyled px-5 py-3" >

                                    {typeDieffen.map((item,index)=>{
                                        return(
                                            <>
                                                <li id={`${item.id}`} className="py-5" style={{borderTop:"5px solid #aaa"}} key={item.id}>
                                                    <h3 style={{color:"#7d8a22"}}>{index+1}.{item.nameDieffen}</h3>
                                                    <div className="px-4">
                                                        <p>{item.p1} </p>
                                                        <p><b>{item.p2}</b></p>
                                                        <p>{item.p3}</p>
                                                        <div className="text-center py-4" style={{height:"600px"}} ><img className="h-100" src={item.srcDieffen} alt={item.altImg} /></div>
                                                        <p>{item.p4}</p>
                                                        <p>{item.p5}</p>
                                                        <div className="bg-light p-5 ">
                                                        <h3>{item.note}</h3>
                                                        </div>
                                                    </div>
                                                </li>
                                            </>
                                        )
                                    })}

                                </ol>
                            </div>        

                            <BackToTopButton/>
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