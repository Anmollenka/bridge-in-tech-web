import React from "react";
import Footer from "./Footer";
import './Home.css';
import ReadAboutUs from './ReadAboutUs'
import GetInTouch from './GetInTouch'
import FAQ from "./FAQ";
export default function Home() {

    return (
        <React.Fragment>
            <section id="home">
                <div className="header-text">
                    <h1>Welcome to<br/> Bridge-in-Tech</h1>
                    <p>Bridge-In-Tech is an application inspired by the existing
                    AnitaB.org Mentorship System. It encourages organizations to collaborate
                    with the mentors and mentees on mentoring programs. Through Bridge-In-Tech,
                    an organization can offer a mentorship program to a mentor and a mentee that is customised
                    to meet the needed skills set within its organisation while providing a safety and supportive
                    environment for these mentor/mentee to work in.
                    </p>
                </div>
            </section>
            <ReadAboutUs />
            <FAQ />
            <GetInTouch />
            <Footer/>
        </React.Fragment>
    )
}
