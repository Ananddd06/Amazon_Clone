import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home-container'>
            <img className='hero_logo' src="https://f.media-amazon.com/images/I/71qdCIlqoNL._SX3000_.jpg"/>
        </div>

        <div className='home_row'>
            <Product id='1000' title=' Apple Iphone 15 - (128GB) Black'price={70499} image='https://f.media-amazon.com/images/I/71657TiFeHL._AC_UY436_QL65_.jpg'rating={5}/>
            <Product id='1001' title='Bacca Bucci HIKE 5-Eye Moto Inspired Light weighted Mountaineering Backpacking Trekking/Hiking Boots for Men for beginners' price={1499} image='https://f.media-amazon.com/images/I/71irSZWDKJL._AC_UL640_QL65_.jpg' rating={4}/>
            <Product id='1002' title='U.S. POLO ASSN Mens Abor Sneaker' price={1759} image='https://f.media-amazon.com/images/I/71m+EGqdJ0L._AC_UL640_QL65_.jpg' rating={4}/>
            <Product id='1003' title='iPhone Headphones (3rd Generation) 2024 Latest Version Wireless Bluetooth Earbuds with Fast Charging Case,Running/Fitness(Touch Control,Sweat and Water Resistant) 100% Up to 60+ Hours of Use (3rd Gen)' price={4325} image='https://f.media-amazon.com/images/I/617v8pu7BCL._AC_UY436_QL65_.jpg' rating={5}/>

        </div>
        <div className='home_row'>
            <Product id='1004' title='HP 330 15.6-inch Laptop Backpack/Trolley Pass-Through; Padded Back Panel; Padded air mesh Panel/Hand wash and air Dry/1 Year Limited Warranty (793A7AA)' price={799} image='https://images-eu.ssl-images-amazon.com/images/I/A1KwlpA8pTL._AC_UL450_SR450,450_.jpg' rating={5}/>
            <Product id='1005' title='Philips HL7756/01 750 Watt Mixer Grinder, 3 Stainless Steel Multipurpose Jars with 3 Speed Control and Pulse function (Black)' price={3299} image='https://m.media-amazon.com/images/I/41vCwdjHqEL._AC_SY328_.jpg' rating={3}/>
            <Product id='1006' title='Titan Octane Active Analog Black Dial Mens Watch' price={7532} image='https://f.media-amazon.com/images/I/91hq4DmZ6+L._AC_UL640_QL65_.jpg' rating={5}/>
            <Product id='1007' title='The Psychology of Money by Morgan Housel' price={275} image='https://f.media-amazon.com/images/I/71XEsXS5RlL._AC_UL640_QL65_.jpg' rating={4}/>

        </div>
        <div className='home_row'>
            <Product id='1008' title='Sony DualSense Wireless Controller White (PlayStation 5)' price={5499} image='https://m.media-amazon.com/images/I/21ZmqFPBUCL._AC_SY328_.jpg' rating={4}/>
            <Product id='1009' title='Kadence Slowhand Solid Cedar Wood Guitar (SH100) Premium Solid Wood Guitar with EQ, Heavy padded Bag and Handrest' price={17699} image='https://f.media-amazon.com/images/I/61RQGk7Tg9L._AC_UL640_QL65_.jpg' rating={5}/>
            <Product id='1010' title='Puma Men Cotton Blend Standard Length Jacket' price={1569} image='https://f.media-amazon.com/images/I/412O5U6TjaL._AC_UL640_QL65_.jpg' rating={4}/>
            <Product id='1011' title='Apple 2023 MacBook Pro (16-inch, M3 Max chip with 16‑core CPU and 40‑core GPU, 48GB Unified Memory, 1TB) - Space Black'price={379900} image='https://f.media-amazon.com/images/I/618d5bS2lUL._AC_UY436_QL65_.jpg' rating={5}/>

        </div>
        <div className='home_row'>
          <Product id='1012' title='Samsung 189 cm (75 inches) D Series Crystal 4K Vivid Pro Ultra HD Smart LED TV UA75DUE77AKXXL (Black)'price={119900} image='https://f.media-amazon.com/images/I/81OmhFfS-hL._AC_UY436_QL65_.jpg' rating={4}/>
          <Product id='1013' title='WHP Gold Bracelets For Women, 22KT (916) BIS Hallmark Pure Gold, Accessories For Women, Suitable Birthday Gift For Women Friend, Special Bracelet For Women, Cluster-E1' price={105500} image='https://f.media-amazon.com/images/I/51dMFzlnSAL._AC_UL640_QL65_.jpg'rating={4}/>
        </div>

    </div>
  )
}

export default Home