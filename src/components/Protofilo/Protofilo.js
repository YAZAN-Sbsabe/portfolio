import React from "react";
import "./Protofilo.css";
import image1 from "../image/Instagram Story – 1.png";
import image2 from "../image/Instagram Story.png";
import image3 from "../image/Mouk up.png";
import image4 from "../image/Mouk up@2x.png";
import image5 from "../image/MoukUp.png";
import image6 from "../image/test1@2x.png";
import image7 from "../image/test2@2x.png";
import image8 from "../image/Web 1920 – 1@2x.png";
import image9 from "../image/test3@2x.png";
const Protofilo = () => {
  return (
    <section id="Protofilo" className="Protofilo">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container protofilo_container">
        <article className="Protofilo_item">
          <div className="Protofilo_item-image">
            <a href={image1} target="_blank">
              <img src={image1} alt="" />
            </a>
          </div>
          <h3>Food order web application</h3>
          <p style={{
            fontSize: "15px",
            opacity: "0.5"
          }}>Click to see the full photo</p>
        </article>
        <article className="Protofilo_item">
          <div className="Protofilo_item-image">
            <a href={image2} target="_blank">
              <img src={image2} alt="" />
            </a>
          </div>
          <h3>Instagram application</h3>
          <p style={{
            fontSize: "15px",
            opacity: "0.5"
          }}>Click to see the full photo</p>
        </article>
        <article className="Protofilo_item">
          <div className="Protofilo_item-image">
            <a href={image5} target="_blank">
              <img src={image5} alt="" />
            </a>
          </div>
          <h3>WhatsApp application</h3>
          <p style={{
            fontSize: "15px",
            opacity: "0.5"
          }}>Click to see the full photo</p>
        </article>
        <article className="Protofilo_item">
          <div className="Protofilo_item-image">
            <a href={image6} target="_blank" >
              <img src={image6} alt="" />
            </a>
          </div>
          <h3>SoftWare WebSite</h3>
          <p style={{
            fontSize: "15px",
            opacity: "0.5"
          }}>Click to see the full photo</p>
        </article>
        <article className="Protofilo_item">
          <div className="Protofilo_item-image">
            <a href={image4} target="_blank">
              <img src={image4} alt="" />
            </a>
          </div>
          <h3>Login and account creation page</h3>
          <p style={{
            fontSize: "15px",
            opacity: "0.5"
          }}>Click to see the full photo</p>
        </article>
        <article className="Protofilo_item">
          <div className="Protofilo_item-image">
            <a href={image7} target="_blank">
              <img src={image7} alt="" />
            </a>
          </div>
          <h3>SoftWare WebSite</h3>
          <p style={{
            fontSize: "15px",
            opacity: "0.5"
          }}>Click to see the full photo</p>
        </article>
        <article className="Protofilo_item">
          <div className="Protofilo_item-image">
            <a href={image8} target="_blank">
              <img src={image8} alt="" />
            </a>
          </div>
          <h3>delusive app</h3>
          <p style={{
            fontSize: "15px",
            opacity: "0.5"
          }}>Click to see the full photo</p>
        </article>
        <article className="Protofilo_item">
          <div className="Protofilo_item-image">
            <a href={image3} target="_blank" >
              <img src={image3} alt="" />
            </a>
          </div>
          <h3>Food order application</h3>
          <p style={{
            fontSize: "15px",
            opacity: "0.5"
          }}>Click to see the full photo</p>
        </article>
        <article className="Protofilo_item">
          <div className="Protofilo_item-image">
            <a href={image9} target="_blank">
              <img src={image9} alt="" />
            </a>
          </div>
          <h3>SoftWare WebSite</h3>
          <p style={{
            fontSize: "15px",
            opacity: "0.5"
          }}>Click to see the full photo</p>
        </article>
      </div>
    </section>
  );
};

export default Protofilo;
