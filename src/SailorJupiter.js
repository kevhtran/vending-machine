import React from 'react'
import "./sodas.css"
import jupiter from './imgs/jupiter.jpg'


const SailorJupiter = () => {

    return (
        <div>
            <h1>Ocean Bomb: Sailor Jupiter</h1>

            <img src={jupiter} alt="Sailor Jupiter soda can" className="bigJupiter" />
        </div >
    )
}

export default SailorJupiter