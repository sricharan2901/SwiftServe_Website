import React from "react";
import { Categories } from "./Categories"; 
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import image2 from "/home/sricharan24/SwiftServe/swiftserve/src/assets/Girias.png";
import image3 from "/home/sricharan24/SwiftServe/swiftserve/src/assets/goodrej.png";
import image4 from "/home/sricharan24/SwiftServe/swiftserve/src/assets/urbancompany.png";
import image5 from "/home/sricharan24/SwiftServe/swiftserve/src/assets/babysitter.png";
import image6 from "/home/sricharan24/SwiftServe/swiftserve/src/assets/catering.png";


export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1 id="cat">Service Providers</h1>
      </div>
      <div className="gallery-container">
        <h2></h2>
        <div className="gallery">
          {[image2,image6,image4, image5, image3].map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt={`Gallery Item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <h1 id="cat">Services</h1>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
