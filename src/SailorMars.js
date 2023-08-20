import React from 'react'
import "./sodas.css"
import mars from './imgs/mars.jpg'

const SailorMars = () => {

    return (
        <div>
            <h1>Ocean Bomb: Sailor Mars</h1>

            <img src={mars} alt="Sailor Mars soda can" className="bigMars" />
        </div >
    )
}

export default SailorMars