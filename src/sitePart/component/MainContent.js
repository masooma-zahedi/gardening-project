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
        innerImgIframePrint()
    }


    return(
        <>
                <div className="col-9 px-4" ref= {componentRef}>
                    <h1 style={{color:"#c03085"}}>{infoItems.topTitle} </h1>
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
                        <div className="col-5 noPrint " id="remove2" >
                            <img  src={infoItems.srcImg} width="100%" alt={infoItems.mainTitle} />
                        </div>
                        <h2 style={{color:"#9a4c00"}} >What is {infoItems.questoin} </h2>
                        <p > {infoItems.answerQ} </p>
                        <div className='d-flex justify-content-center p-4 ' id="remove3" >
                            {infoItems.iframe}
                        </div>
                        <p>{infoItems.descIframe}</p>
                        <h2 style={{color:"#3a6d25"}}>{infoItems.title1} </h2>
                        <div>{infoItems.infoTitle1} </div>
                    </div>
                </div>                
        </>
    )
}

export default MainContent;