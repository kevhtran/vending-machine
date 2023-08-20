import React from 'react'
import "./sodas.css"
import moon from './imgs/moon.jpg'

const SailorMoon = () => {
    return (
        <div>
            <h1>Ocean Bomb: Sailor Moon</h1>
            <img src={moon} alt="Sailor Moon soda can" className="bigMoon" />
        </div >
    )
}

export default SailorMoon