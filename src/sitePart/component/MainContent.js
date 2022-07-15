import React, {useRef} from "react";
import { useReactToPrint } from 'react-to-print';


const MainContent = ({infoItems, innerImgIframePrint})=>{

    const componentRef = useRef();
    const handlePrint2 = useReactToPrint({
        content:()=> componentRef.current ,
    })

    const handlePrint= ()=>{
        document.getElementById("remove2").innerHTML ='';
        document.getElementById("remove3").innerHTML ='';

        handlePrint2();
        // document.getElementById("remove2").innerHTML = '<img  src="https://www.gardeningknowhow.com/wp-content/uploads/2021/09/Columnar-Apple-400x533.jpg" alt="" />'
        // document.getElementById("remove3").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Fj430mbb_20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        innerImgIframePrint()
    }


    return(
        <>
                <div className="col-9 px-4" ref= {componentRef}>
                    <h1>{infoItems.topTitle} </h1>
                    <p>{infoItems.auther}</p>
                    <div  id="remove1">
                        <button onClick={handlePrint}  className='noPrint'>
                            <i className='fa fa-print' ></i> Printer Friendly Version
                        </button>
                    </div>
                    <div className="row" >
                        <div className="col-7 px-4" >
                            {infoItems.describe}
                        </div>
                        <div className="col-5 noPrint" id="remove2" >
                            <img  src={infoItems.srcImg} alt="" />
                        </div>
                        <h2 >What is {infoItems.questoin} </h2>
                        <p > {infoItems.answerQ} </p>
                        <div className=' border noPrint' id="remove3" >
                            {infoItems.iframe}
                        </div>
                        <p>{infoItems.descIframe}</p>
                        <h2>{infoItems.title1} </h2>
                        <p>{infoItems.infoTitle1} </p>
                    </div>
                </div>                
                {/* <div className="col-9 px-4" ref= {componentRef}>
                    <h1>{infoItems.appleTree[0].topTitle} </h1>
                    <p>{infoItems.appleTree[0].auther}</p>
                    <div  id="remove1">
                        <button onClick={handlePrint}  className='noPrint'>
                            <i className='fa fa-print' ></i> Printer Friendly Version
                        </button>
                    </div>
                    <div className="row" >
                        <div className="col-7 px-4" >
                            {infoItems.appleTree[0].describe}
                        </div>
                        <div className="col-5 noPrint" id="remove2" >
                            <img  src={infoItems.appleTree[0].srcImg} alt="" />
                        </div>
                        <h2 >What is {infoItems.appleTree[0].questoin} </h2>
                        <p > {infoItems.appleTree[0].answerQ} </p>
                        <div className=' border noPrint' id="remove3" >
                            {infoItems.appleTree[0].iframe}
                        </div>
                        <p>{infoItems.appleTree[0].descIframe}</p>
                        <h2>{infoItems.appleTree[0].title1} </h2>
                        <p>{infoItems.appleTree[0].infoTitle1} </p>
                    </div>
                </div>                 */}
        </>
    )
}

export default MainContent;