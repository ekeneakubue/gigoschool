import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='container-fluid'>
        <div className="row main">
            <div className="col-md-9 left">
                <div className="left-title">LEARN WEB DESIGN WITH HTML & CSS IN FIVE WEEKS</div>
                <div className="left-title2">
                    <h1 class=" text-danger">Plus</h1> ALL THE TECH TOOLS FOR STARTUP
                </div>
                <div className="left-body">
                    <p>
                        This Program gives you the basic programming skills to kickoff your career in Tech.
                        No prior Programming experience is required. This program is designed to teach you all the basic.
                    </p><br/>
                    <b>The requirements are your passion, a laptop and internet.</b>
                </div>
                <Link to="/application">
                    <div className='left-button'><div className="btn btn-dark btn-block">Get Started</div></div>
                </Link>
            </div>
            <div className="col-md-3">
                <div class="card">
                    <h5 class="card-header text-center">Tutorial Contents</h5>
                    <div class="card-body">
                        <ul>
                            <li>Introduction to Computer Programming</li>
                            <li>Visual Studio Code (IDE)</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Replit</li>
                            <li>GitHub</li>
                            <li>Vercel</li>
                        </ul>
                    </div>
                </div><br/>
                <div class="card">
                    <h5 class="card-header text-center">Tutorial Features</h5>
                    <div class="card-body">
                        <div className="right">
                            <h6><i class="bi bi-geo-alt-fill text-primary"></i>&nbsp; Location: &nbsp;&nbsp;UNEC ICT HUB</h6>
                            <h6><i class="bi bi-calendar-event text-primary"></i>&nbsp; Duration: &nbsp;&nbsp;Five Weeks</h6>
                            <h6><i class="bi bi-alarm text-primary"></i>&nbsp; Start Date: &nbsp;&nbsp;15th Sep, 2023</h6>
                            <h6><i class="bi bi-cash text-primary"></i>&nbsp; Fee: &nbsp;&nbsp;<s>N</s>40,000.00</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
  )
}
