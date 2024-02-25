// import React from 'react'
import NavBar from '../components/NavBar'

const Video = () => {
    return (
    <>
        <NavBar/>

        <div className="project-wrapper">
            <div className="project-title">
                <h1>Video Portfolio</h1>
            </div>
            <div className='video-wrapper'>
                <div className="project-video">
                    <iframe width="450" height="253" src="https://www.youtube.com/embed/B50_wW3h4p0" title="Peso Congress 2023 Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h4 className='video-title'>PESO Congress 2023 Teaser</h4>
                </div>
                <div className='project-video'>
                    <iframe width="450" height="253" src="https://www.youtube.com/embed/cM2SkS87Cw0" title="First Time Jobseeker Advertisement (DOLE Radio)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h4 className='video-title'>First Time Jobseeker Ads (DOLE Radio 8)</h4>
                </div>
                <div className='project-video'>
                    <iframe width="450" height="253" src="https://www.youtube.com/embed/aIbt-qDRtVs" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h4 className='video-title'>Government Internship Program Ads (DOLE Radio 8)</h4>
                </div>
                <div className="project-video">
                    <iframe width="450" height="253" src="https://www.youtube.com/embed/vfu7O-0qKB0" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h4 className='video-title'>Sports Fest 2023</h4>
                </div>
            </div>

        </div>
    </>
    )
}

export default Video