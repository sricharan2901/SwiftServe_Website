import React from "react";
import "./homepage.css";
import image1 from "/home/sricharan24/SwiftServe/swiftserve/src/assets/products/swift.png";
import image2 from "/home/sricharan24/SwiftServe/swiftserve/src/assets/Girias.png";
import image3 from "/home/sricharan24/SwiftServe/swiftserve/src/assets/goodrej.png";
import image4 from "/home/sricharan24/SwiftServe/swiftserve/src/assets/urbancompany.png";


export const HomePage = () => {
  return (
    <>
      <div className="heading">
        <h1 id="mainh">Swift<br />Serve</h1>
        <img id="logo" src={image1} alt="Swift Serve Logo" />
      </div>
      <div className="part1">
        <h2 id="subh">Swift Services at your Doorstep</h2>
      </div>
      <div className="gallery-container">
        <h2>Our Main Service Providers</h2>
        <div className="gallery">
          {[image4, image2, image3].map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt={`Gallery Item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="about-us">
        <h2>About Us</h2>
        <p id="para1">Welcome to SwiftServe, where convenience meets innovation at your doorstep. Founded on the principle of making everyday services accessible to all, we've embarked on a journey to revolutionize how you experience service delivery. From urgent repairs to routine maintenance, SwiftServe is your trusted partner in maintaining a seamless lifestyle.
            <br></br><br></br>
At SwiftServe, we believe that your time is invaluable. That's why we've curated a comprehensive suite of services designed to cater to your diverse needs, ensuring that help is just a few clicks away. Our team of skilled professionals is committed to delivering excellence, punctuality, and reliability, transforming mundane tasks into memorable experiences.</p>
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p><b>Email:</b> kevinsajijacob@swiftserve.com</p>
          <p><b>Phone:</b> +91 8714737975</p>
        </div>
      </div>
    </>
  );
};
