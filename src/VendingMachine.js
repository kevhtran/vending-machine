import React, { useState } from 'react'
import "./VendingMachine.css"
import { Link } from "react-router-dom";
import openFridge from './imgs/open.png'
import moon from './imgs/moon.jpg'
import mars from './imgs/mars.jpg'
import jupiter from './imgs/jupiter.jpg'



import closedFridge from './imgs/closed.png'


const VendingMachine = () => {

    // const [toggle, setToggle] = useState(true)

    // const handleToggle = () => {
    //     setToggle((current) => !current);
    // };

    return (

        <div className='open' >
            <img src={openFridge} alt="closed fridge" className="fridge" />
            <div>
                <Link to="/SailorMoon">
                    <img src={moon} className="moon" />
                </Link>
                <Link to="/SailorMars">
                    <img src={mars} className="mars" />
                </Link>
                <Link to="/SailorJupiter">
                    <img src={jupiter} className="jupiter" />
                </Link>
            </div>
        </div >
        // <div>
        //     {toggle ?
        //         <div className='closed' >
        //             <img src={closedFridge} alt="closed fridge" />
        //             <button onClick={handleToggle}>Open</button>
        //         </div > :
        //         <div className='open' >
        //             <img src={openFridge} alt="closed fridge" />


        //             <button onClick={handleToggle}>Closed</button>

        //         </div >
        //     }
        // </div>
    )
}

export default VendingMachine