// import React from 'react'
import Avatar from '@mui/material/Avatar';
import profilePic from '/src/assets/img/profile-pic.png'
import { Link } from 'react-router-dom';
import resume from '../assets/resume.pdf'

const Profile = () => {
    return (
    <>
    <div className='profile-wrapper'>
        <div className='profile-pic'>
            <Avatar
                alt="Remy Sharp"
                src={profilePic}
                sx={{ width: 300, height: 300 }
            }/>
        </div>
        <div className='profile-details'>
            <p>Hello I`m</p>
            <h1>MARK</h1>
            <h2>Graphics Specialist</h2>
            <div className='button-wrapper'>
                <a href={resume} className='profile-buttons contained'>Download CV</a>
                <Link to='/contact' className='profile-buttons contained'>Contact Info</Link>
            </div>
        </div>
    </div>
    </>
    )
}

export default Profile