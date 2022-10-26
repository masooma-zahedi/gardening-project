import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import ShopCss from "./shoppingPage/shopping.module.css";
import { shopData } from './shoppingPage/shopData';



const Shopping = (params)=> {
    const [showSortbox,setShowSortbox] = useState(false);
    const [anemone,setAnemone] = useState(false)
    const [asiatic, setAsiatic] = useState(false)

    const showSort = ()=>{
        if(showSortbox === false){
            setShowSortbox(true)
        } else{
            setShowSortbox(false)
        }
    }

    const checkCategory = (e)=>{
        console.log(e.target.name);

        setTimeout(()=>{
            setShowSortbox(false)
        },3000)

        if(e.target.name == "anemone" ){
            setAnemone(!anemone)
        }
        if(e.target.name == "asiatic" ){
            setAsiatic(!asiatic)
        }
    }

    return(
        <>
            <h1 >This is Shopping Page</h1>
            <div className="container border border-success" 
                style={{ fontFamily: "'Roboto      Slab',Times New Roman,Times,serif" }}
            >
                <h1 className="text-center p-3" style={{backgroundColor:"#f2eed3"}}>
                    Shop Flower Bulbs and Perennials
                </h1>
                    <div className='mb-5 p-2 border'>
                        <Link
                            to="/"
                            style={{ color: "rgb(87 161 195)", textDecoration: "none" }}
                        >
                            Home&nbsp;
                        </Link>
                        <span className="" style={{ color: "rgb(51 51 51)" }}>›</span>
                        <span style={{ color: "rgb(87 161 195)" }}>&nbsp;Shoppin</span>
                    </div>
                    <div className="sort row">
                        <div className={`col-md-3 ${ShopCss.boxCategory}`}>
                            <div className={`${ShopCss.category}`} onClick={showSort}>Category</div>
                            <div className={`${showSortbox ? "d-block" : "d-none"}`}>
                                <ul >
                                    <li><input type="checkbox" name ="anemone" value={anemone} onChange={checkCategory}/>
                                        Anemone
                                    </li>
                                    <li><input type="checkbox" name ="asiatic" value={asiatic} onChange={checkCategory}/>
                                        Asiatic
                                    </li>
                                    <li>Aviv</li>
                                    <li>Aflatunenese</li>
                                    <li>Arendsii</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-3  '>
                            <div className={`${ShopCss.category}`}>Color</div>
                            <div></div>
                        </div>
                    </div>
                    <div className="test">
                        {anemone ? <h2> category is Anemone</h2> : ""}
                        {asiatic ? <h2> category is Asiatic wwwwwww ffffff</h2>: ""}
                    </div>
                    {/* /////////////////////// work on it//////////////////// */}
                    <div className="row border ">
                        {shopData.products.map((product, index)=>{
                            return(
                                <>
                                    <div className=" col-12 col-sm-6 col-md-3" key={product.id} >
                                        {console.log(product.id)}
                                        <div className='card m-1' >
                                            <img className="card-img-top" src={product.src} alt={product.title} />
                                            <div className="card-body text-center">
                                                <p className="card-text m-0">{product.star}</p>
                                                <p className="card-text">{product.title}</p>
                                                <p className="card-text h5 m-0">{product.discProduct}</p>
                                                <p className="card-text h5 mt-1">{product.price} <del className='text-secondary'><small>{product.noPrice}</small></del></p>
                                            </div>
                                        </div>                    
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    {/* ///// */}
            </div>
        </>
    )
}

export default Shopping;