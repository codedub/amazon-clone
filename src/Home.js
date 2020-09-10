import "./Home.css"

import Product from "./Product";
import React from 'react'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg" alt=""/>
            
            <div className="home__row">
                <Product 
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                />
                <Product 
                    id="49538094"
                    title="Shark Cordless Stick Vacuum Cleaner [IZ201UK] Anti Hair Wrap, Single Battery, Orange and White" 
                    price={248.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/512drADP3KL._AC_SL1400_.jpg"
                    rating={4}
                />
            </div>

            <div className="home__row">
            <Product 
                id="49538726"
                title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric" 
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/616NfcPi-zL._AC_SL1000_.jpg"
                rating={4}
            />
            <Product 
                id="49592184"
                title="Duracell Plus AAA Alkaline Batteries [Pack of 12], 1.5 V LR03 MN2400" 
                price={5.99}
                image="https://images-na.ssl-images-amazon.com/images/I/7140hQBt6iL._AC_SL1500_.jpg"
                rating={5}
            />                
            <Product 
                id="49536461"
                title="KAQI Octopus Doll Pet Sounding Toy Octopus Plush Toy Doll Marine Life Doll" 
                price={2.99}
                image="https://images-na.ssl-images-amazon.com/images/I/61lzx-Bu6NL._AC_SL1080_.jpg"
                rating={3}
            />
            </div>

            <div className="home__row">
                <Product 
                    id="49128541"
                    title="Apple iPad Mini (Wi-Fi, 64GB) - Space Grey (latest model)" 
                    price={349.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Ha06XS-VL._AC_SL1500_.jpg"
                    rating={5}
                />
            </div>
            
            </div>
        </div>
    )
}

export default Home
