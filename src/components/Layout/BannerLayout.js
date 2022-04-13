import React from "react";
import Image1 from '../../assests/Img1.webp'
import Image2 from '../../assests/Img2.jpg'
import Image3 from '../../assests/Img3.jpg'
const BannerItems=()=>{

    return(

        <div className="maintainBannner">

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                    <div className="carousel-item active maintainBannner">
                    <img src={Image1} className="d-block w-100" alt="..."/>
                </div>
                    <div className="carousel-item maintainBannner">
                    <img src={Image2} className="d-block w-100" alt="..."/>
                </div>
                    <div className="carousel-item maintainBannner">
                    <img src={Image3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    )
}

export default BannerItems