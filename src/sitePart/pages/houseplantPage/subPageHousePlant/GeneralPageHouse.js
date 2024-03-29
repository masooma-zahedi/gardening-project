import react from "react";
import { Link, Route, Routes} from "react-router-dom";
import { RightSidePart } from "../../../component/RightSidePart";
import { TopTitle } from "../../../component/subTabMenu/TopPartSubTab";
import { nanoid } from "nanoid";
import {BackToTopButton} from "../../../component/BackToTopButton";
import MainContent from "../../../component/MainContent";
import { Section3, Section4 } from "../../../component/SectionsBottomPage";

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
// //////////////////////////////// Stop Growing Page////////////////////////
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

    // ////////////////////////////////  (calla lilies)///////////////

    const CallaLilies = ()=>{
        return(
            <>
                <div className="container">
                    <div className="mt-5">
                        <MyTitleTop newTitle={"Calla Lilies"} />
                    </div>
                    <div className="row ">
                        <div className="col-12 col-md-9">
                            <h1 className="text-center my-5 bg-light">All About Calla Lilies</h1>
                            <section style={{fontSize:"18px",fontWeight:500,marginBottom:"40px"}} >
                                <h2>Your Guide to Planning, Planting, and Growing Calla Lilies</h2>
                                <p>Calla lilies are easy to grow and add a classy look to perennial gardens, cutting gardens and container plantings. The distinctive flowers come in many beautiful colors, including classic white (a favorite for weddings), yellow, orange, pink, rose, lavender and dark maroon.</p>
                                <p>The plants have smooth, sword-like foliage that's often decorated with white freckles. Calla lily foliage looks neat and attractive all season long, both before and after the flowers bloom. Whether in the garden or in a vase, fresh calla lilies are always impressive.</p>
                                <h3>Start with a Better Plant</h3>
                                <p>It’s easy to see differences in quality when you compare two calla lily rhizomes side by side. Newly harvested rhizomes are graded by circumference. A large, 14/16 cm rhizome (shown at far left) will grow into a bigger plant with a more impressive display of flowers.</p>
                                <div className="text-center">
                                    <div className=" mx-auto" style={{maxWidth:"500px",maxHeight:"625px"}}><img className="w-100 h-100" src="https://cdn11.bigcommerce.com/s-1b9100svju/product_images/uploaded_images/all-about-calla-lilies1.jpg" alt="callaLilies" /></div>
                                </div>
                            </section>
                            <section style={{fontSize:"18px",fontWeight:500 ,marginBottom:"40px"}}>
                                <h3>Plan for Success </h3>
                                <p>Calla lilies are easy to grow. Here’s how to get them off to a great start.</p>
                                <p><span className="h5">Shade and Sun: </span>In warm climates, calla lilies grow well in full sun or partial shade. In cooler areas they grow best in full sun.</p>
                                <p><span className="h5">Zone: </span>Calla lilies are winter hardy in zones 8-10. In colder areas they can either be grown as annuals or can be dug up in the fall and stored indoors for replanting the next spring. Reference the USDA Hardiness zone map here.</p>
                                <p><span className="h5">When to Plant: </span>Calla lilies should be planted in the spring after all danger of frost has passed. In cold climates it's best to wait until the soil has warmed to at least 65°F. For a head start, you can plant the rhizomes in pots indoors about a month before planting them into the garden.</p>
                                <div className="text-center">
                                    <div className=" mx-auto" style={{maxWidth:"500px",maxHeight:"625px"}}><img className="w-100 h-100" src="https://cdn11.bigcommerce.com/s-1b9100svju/product_images/uploaded_images/all-about-calla-lilies2.jpg" alt="callaLilies" /></div>
                                </div>
                            </section>
                            <section style={{fontSize:"18px",fontWeight:500 ,marginBottom:"40px"}}>
                                <h3>Where to Plant Calla Lilies </h3>
                                <p><span className="h5">Flowerbeds and Borders: </span>Depending on the cultivar, calla lilies grow between 1 and 2 feet tall. This makes them a great choice for the front or middle of a flowerbed. The speckled foliage looks attractive all season long.</p>
                                <p><span className="h5">Cutting Gardens: </span> Calla lilies are terrific cut flowers. They are easy to arrange and can last for up to two weeks in a vase. Planting callas in a cutting garden allows you to grow a wide range of different colors and have plenty of flowers for bouquets.</p>
                                <p><span className="h5">Containers: </span>Calla lilies grow well in pots and planters. They can be mixed with other annuals, but usually perform better in a pot on their own. The flowers last for weeks.</p>
                                <div className="text-center">
                                    <div className=" mx-auto " style={{maxWidth:"500px", maxHeight:"625px"}}><img className="w-100 h-100 " style={{maxHeight:"625px"}}  src="https://cdn11.bigcommerce.com/s-1b9100svju/product_images/uploaded_images/all-about-calla-lilies3.jpg" alt="CallaLilies" /></div>
                                </div>
                            </section>
                            <section style={{fontSize:"18px",fontWeight:500 ,marginBottom:"40px"}}>
                                <h3>How to Plant Calla Lilies</h3>
                                <p>Dig a hole 3” to 4" deep.</p>
                                <p>Set the calla lily into the hole with the “eyes” (growing tips) facing up.</p>
                                <p>In the garden, you can space the rhizomes about 6” apart on center. In containers they look best planted more closely (4" on center).</p>
                                <p>Cover with soil and water lightly.</p>
                                <div className="text-center">
                                    <div className=" mx-auto" style={{maxWidth:"500px",maxHeight:"625px"}}><img className="w-100 h-100" src="https://cdn11.bigcommerce.com/s-1b9100svju/product_images/uploaded_images/all-about-calla-lilies4.jpg" alt="callaLilies" /></div>
                                </div>
                            </section>
                            <section style={{fontSize:"18px",fontWeight:500 ,marginBottom:"40px"}}>
                                <h3>Planting Tips for Calla Lilies</h3>
                                <p>Like most plants, calla lilies should be grown in well-drained soil. If you are growing them in containers, use a quality growing mix rather than garden soil.</p>
                                <p>When the rhizomes are first planted, it’s important to water sparingly. Once the plants have a few leaves, you can begin watering more generously.</p>
                                <div className="text-center">
                                    <div className=" mx-auto" style={{maxWidth:"500px",maxHeight:"625px"}}><img className="w-100 h-100" src="https://cdn11.bigcommerce.com/s-1b9100svju/product_images/uploaded_images/all-about-calla-lilies5.jpg" alt="callaLilies" /></div>
                                </div>
                            </section>
                            <section style={{fontSize:"18px",fontWeight:500 ,marginBottom:"40px"}}>
                                <h3>What to Expect</h3>
                                <p>After planting, it may take 2 weeks or more for the first calla shoots to appear. Once that happens, the plants grow quickly.</p>
                                <p>In warm climates, where calla lilies are perennial, the plants typically flower in early summer. When calla lilies are planted in the spring, flowering is usually delayed until late summer.</p>
                                <p>During the growing season, calla lilies appreciate a monthly dose of liquid fertilizer. This is especially important when they are grown in containers.</p>
                                <div className="text-center">
                                    <div className=" mx-auto" style={{maxWidth:"500px",maxHeight:"625px"}}><img className="w-100 h-100" src="https://cdn11.bigcommerce.com/s-1b9100svju/product_images/uploaded_images/all-about-calla-lilies6.jpg" alt="callaLilies" /></div>
                                </div>
                            </section>
                            <section style={{fontSize:"18px",fontWeight:500 ,marginBottom:"40px"}}>
                                <h3>Caring for Calla Lilies After They Bloom </h3>
                                <p>In warm climates where calla lilies are winter hardy (zones 8-10), the rhizomes may be left in the ground to bloom again the following summer. The plants may need to be divided every few years to keep them blooming well.</p>
                                <p>In cooler areas (zones 3-7), calla lilies are usually treated as annuals, with new bulbs planted each spring. The bulbs may be dug up and overwintered indoors, but you may not get the same results the second year.</p>
                                <p>If want to try saving your calla lilies for next year, here's what to do. Fertilize the plants throughout the growing season. Cut off the flower stems as soon as the blooms fade. Preventing the plants from setting seed will help conserve energy for next year’s flowers. Continue fertilizing until the foliage begins to yellow.</p>
                                <p>When the leaves have died back, or after the first frost, dig up the rhizomes and trim off the foliage, leaving an inch or two of stem attached. Let the rhizomes cure in a warm, dry place for several days and then put them into a box with barely damp peat moss. Store the box in a dark place at 50-60°F. Check once or twice during the winter to make sure the rhizomes are not too moist (rotting) or too dry (shriveling). Replant in spring.</p>
                            </section>
                        </div>
                        <div className="col-12 col-md-3">
                            <RightSidePart />
                        </div>
                    </div>
                </div>
            </>
        )
    }

/////////////////////////////////// Dieffenbachia Page /////////////////////////
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

                        <div className="col-12 col-md-9" style={{fontSize:"24px"}}>
                            <div className="py-4 px-3">
                                <h1 className="pt-4">10 Types of Dieffenbachia You will Love to Grow</h1>
                                <div style={{fontSize:"15px"}}>
                                    <span><span className="text-secondary">by </span> Salman Khan Gurung / </span>
                                    <span className="text-secondary" > August 5, 2022 / </span>
                                    <span className="text-secondary " >10 minute read</span>
                                </div>
                                <div className="text-center py-4"><img className="img-fluid" src="https://plantscraze.com/wp-content/uploads/2022/08/Dieffenbachia-800x500.webp" alt="dieffenbachia" /></div>
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
                                <ol className="list-unstyled px-sm-2 px-md-5 py-3" >

                                    {typeDieffen.map((item,index)=>{
                                        return(
                                            <>
                                                <li id={`${item.id}`} className="py-5" style={{borderTop:"5px solid #aaa"}} key={item.id}>
                                                    <h3 style={{color:"#7d8a22"}}>{index+1}.{item.nameDieffen}</h3>
                                                    <div className="px-sm-1 px-md-4 " >
                                                        <p>{item.p1} </p>
                                                        <p><b>{item.p2}</b></p>
                                                        <p>{item.p3}</p>
                                                        <div style={{height:"600px"}} className="text-center py-4 h-sm-50 h-md-100"  ><img className=" h-100 img-fluid" src={item.srcDieffen} alt={item.altImg} /></div>
                                                        <p>{item.p4}</p>
                                                        <p>{item.p5}</p>
                                                        <div className="bg-light p-sm-2 p-md-5 ">
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

                        <div className="col-12 col-md-3">
                            <RightSidePart />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    // //////////////////////////// Citronella Page ///////////////////////////////

    const Citronella  = ()=>{
        const infoItems = {
            caladium :[
                {
                    mainTitle:"Citronella ",
                    topTitle:"Citronella As A Houseplant – Can You Keep Mosquito Plant Citronella Indoors",
                    auther:"By: Raffaele Di Lallo",
                    describe: "Have you enjoyed your citronella plant outdoors and wondered if you can have citronella as a houseplant? The good news is that you certainly can grow this plant indoors. This plant is actually a type of geranium (Pelargonium genus) and is not frost hardy. It is considered an evergreen perennial in zones 9 through 11.  If you live in a colder region, you can bring your plant indoors and continue to grow it there. Although these plants bloom, they are grown for their citrusy scent that is thought to repel mosquitos.",
                    srcImg:"https://www.gardeningknowhow.com/wp-content/uploads/2020/12/citronellageranium-400x533.jpg",
                    questoin:"Mosquito Plant Citronella Indoors ? ",
                    answerQ:"One of the most important parts of growing citronella plants inside is to give these plants as much direct sun as possible. If you can give citronella plants six or more hours of direct sunlight every day, it will keep the plant bushier and more sturdy.f your houseplant citronella is not getting enough light, the stems will stretch out, weaken, and tend to fall over. If you see this occurring, prune the weakened stems back and place the plant in an area with more direct sun.   Allow the top inch or so of your indoor citronella geranium’s soil to dry out before watering it again. You’ll want to keep the potting mix relatively moist and take care not to allow the soil to dry out completely. Be sure to use a good well-draining potting mix and fertilize regularly for best results.   If you have grown your plant outdoors and you don’t want to take in a large plant, you can easily propagate cuttings at the end of the summer and pot them up for indoor use. To accomplish this, you can use the layering technique. Simply bend one of the plant stems over, taking care not to snap it, and simply bury the stem into another pot of soil that you’ve placed right next to the mother plant. You’ll want to bury part of the stem where there is an actual leaf attached. The roots will grow from this location, called the node. Leave the growing tip of that stem exposed though.  ",
                    iframe:<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqoWHVV9J42nBxDGw8uxUkVIKLfZTefwBOw&usqp=CAU" alt="citronella" />,
                    descIframe:"Growing citronella plants indoors is the best way to enjoy them year-round and keep them as part of your collection for years to come. Citronella plants are not frost hardy, so in most zones where they are kept outdoors, they are grown as an annual. (Citronella plants can only be kept outdoors year-round in specific zones 9 through 11.) That means most gardeners will need to either raise their citronella plants indoors or bring them inside in the winter months if they want to enjoy their citronella plants on a long-term basis.",
                    title1:"HOW TO PLANT CITRONELLA PLANTS INDOORS",
                    infoTitle1:"It’s important that your citronella plants are provided with soil that drains well. For best results, the containers you grow your citronella plants in must have drainage holes in the bottom. MacGyver solutions like broken pottery or rocks in the bottom of the container are not an effective way of helping with drainage, so the holes are important. Use a loose, rich soil or potting mix.If you’re planting citronella outdoors but you know your citronella plants are destined to move indoors at some point, you may wish to consider planting your citronella plants in containers. That way, once it’s time to move them indoors, you simply pick up the pot and move it to its new location. You won’t need to fuss with digging up plants or finding containers to move them into. ",
                 }
            ],
        
        }

        const caladium = {
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
              &nbsp;{infoItems.caladium [0].mainTitle}
            </span>
          </>
          )
          }
    

        const innerImgIframePrint = () =>{
            return (
                document.getElementById("remove2").innerHTML = '<img src="https://www.gardeningknowhow.com/wp-content/uploads/2020/12/citronellageranium-400x533.jpg"/>',
                document.getElementById("remove3").innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqoWHVV9J42nBxDGw8uxUkVIKLfZTefwBOw&usqp=CAU" alt="citronella" />'
                )
        }
    
        
        return(
            <>
            <div className="container" >
                <div className="mt-5">
                    <TopTitle dataTop={caladium} addTitle={addTitle()}/>
                </div>
                <div className="subinfo mb-5 row" >
                    {/* start main for apple tree */}
                    <MainContent infoItems={infoItems.caladium[0]} innerImgIframePrint={innerImgIframePrint} />
                    {/* end of main for apple tree */}
                    <div className="col-12 col-md-3"><RightSidePart /></div>
                </div>
                <div className='pt-5'>
                    <Section3 />
                </div>
            </div>
            <Section4/>

            </>
        )
    }


// /////////////////////////////////// Placement Page////////////////////////
    const Placement = ()=>{
        return(
            <>
                <div className="container ">
                    <div className="mt-5">
                        <MyTitleTop newTitle={"placement"} />
                    </div>
                    <div className="row ">
                        <div className="col-sm-12 col-md-9 " style={{overflow:"hidden"}}>
                            <iframe className="" style={{position:"relative",left:"-80px", top:"-230px"}} src="https://www.gardeningknowhow.com/houseplants/hpgen/houseplant-placement.htm" height="2800" width="900px" title="Iframe Example" scrolling="no" ></iframe>
                        </div>
                        <div className="col-sm-12 col-md-3  ">
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
                <Route path="callaLilies" element={<CallaLilies/>} />
                <Route path="dieffenbachia" element={<Dieffenbachia/>} />
                <Route path="citronella" element={<Citronella/>} />
                <Route path="placement" element={<Placement/>} />
            </Routes>
        </>
    )
}
export default GeneralPageHouse;