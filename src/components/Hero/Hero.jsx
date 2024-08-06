import React from 'react'
import Header from '../Header/header'
import './Hero.css'
import hero_image from "../../assets/hero.jpg"
import Heart from "../../assets/heart_rate.png"

const Hero = () => {
  return (
    <div className = "hero">
        <div className = "left-h">
            <Header/>
{/*the best ad*/}
            <div className="the-best-ad">
                <span> The Best Place for All Cement Products</span>
                <div></div>
            </div>
            {/*Hero Heading */}
            <div className='hero-text'>
                <div>
                    <span className='stroke-text'>Find </span>
                    <span>Your</span>
                </div>
                <div>
                <span>Ideal Product</span>
                </div>
                <div>
                    <span>
                        We will help you find the perfect design and product for your requirement at the most affordable price.
                    </span>
                </div>
            </div>
            {/*figures*/}
            <div className='figures'>
                <div>
                    <span>14+</span>
                    <span>Years Experience</span>
                </div>
                <div>
                    <span>200+</span>
                    <span>Deliveries</span>
                </div>
                <div>
                    <span>30+</span>
                    <span>Location Services</span>
                </div>                
            </div>
            {/*hero buttons*/}
            <div className="hero-buttons">
                <buttons className = "btn">Get Started</buttons>
                <buttons className = "btn">Learn More</buttons>
            </div>
        </div>

        <div className = "right-h">
            <button className = "btn"> Contact Us</button>

            <div className='Model-type'>
                <img src={Heart} alt = ""></img>
                <span>Tile Type</span><span>3D-Model</span>
            </div>
            <div className='images'>
                <img src={hero_image} alt="" className='hero-image'/>
            </div>
        </div>
    </div>
  )
}

export default Hero
