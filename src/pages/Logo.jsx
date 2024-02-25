// import React from 'react'
import NavBar from '../components/NavBar'
import doleea8 from '../assets/img/doleea8.png'
import riders from '../assets/img/riders.png'
import ginger from '../assets/img/ginger.png'
import ncc from '../assets/img/ncc.png'
import yd1 from '../assets/img/yd1.png'
import sas from '../assets/img/sas.png'

const Logo = () => {
    return (
    <>
        <NavBar/>

        <div className="project-wrapper">
            <div className="project-title">
                <h1>Logo Portfolio</h1>
            </div>
            <div className='logo-wrapper'>
                <img className='logo' src={doleea8}/>
                <img className='logo' src={riders}/>
                <img className='logo' src={sas}/>
                <img className='logo small' src={ginger}/>
                <img className='logo' src={ncc}/>
                <img className='logo' src={yd1}/>
            </div>
        </div>
    </>
    )
}

export default Logo