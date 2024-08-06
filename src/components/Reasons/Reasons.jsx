import React from "react";
import "./Reasons.css";
import pavers from "../../assets/Pavers_image.jpg";
import kerbs from "../../assets/kerb_image.jpg";
import saucers from "../../assets/saucer_drains_image.jpg";
import tiles from "../../assets/Tiles_image.jpg";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-s">
        <img src={pavers} alt="" />

        <img src={tiles} alt="" />

        <img src={kerbs} alt="" />

        <img src={saucers} alt="" />
      </div>

      <div className="right-s">
        <span>some reasons</span>
        <div>
            <span className="stroke-text">why </span>
            <span>choose us?</span>
        </div>
        <div className="reasons-r">
        <div><img src={tick}  alt=""></img><span>Expertise You Can Trust: </span> <span className="des">Extensive industry experience.</span></div>
        <div><img src={tick}  alt="" /><span>Competitive Pricing: </span> <span className="des">Best value for your investment.</span></div>
        <div><img src={tick}  alt="" /><span>Diverse Selection: </span> <span className="des">Wide range of models to choose from.</span></div>
        <div><img src={tick}  alt="" /><span>Top Quality: </span> <span className="des">Durable and high-performing products.</span></div>
        <div><img src={tick}  alt="" /><span>Proven Satisfaction: </span> <span className="des">Track record of happy customers.</span></div>
        <div><img src={tick} alt="" /><span>Exceptional Service: </span> <span className="des">Support throughout your project.</span></div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
