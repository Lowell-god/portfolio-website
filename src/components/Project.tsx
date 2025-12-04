import React from "react";
import Proposal_generator from '../assets/images/Proposal_generator.png';
import Essay_writer from '../assets/images/Essay_writer.png';
import Name_generator from '../assets/images/Name_Generator.png';
import Story_generator from '../assets/images/Story_generator.png';
import Boyok from '../assets/images/Byok.png';
import Aethera from '../assets/images/Aethera.png'
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://sclof.com" target="_blank" rel="noreferrer"><img src={Proposal_generator} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://sclof.com" target="_blank" rel="noreferrer"><h2>Cover Letter Generator</h2></a>
                <p>Developed cover letter generator which is a specialized software tool that leverages artificial intelligence to assist job seekers in creating personalized and engaging cover letters.</p>
            </div>
            <div className="project">
                <a href="https://www.freeessaywriter.ai" target="_blank" rel="noreferrer"><img src={Essay_writer} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.freeessaywriter.ai" target="_blank" rel="noreferrer"><h2>Free Essay Writer</h2></a>
                <p>This is an AI-powered tool that helps students and professionals create high-quality essays and papers without manual writing. It offers a suite of tools for generating original content and enhancing productivity..</p>
            </div>
            <div className="project">
                <a href="https://startupnamegenerator.ai" target="_blank" rel="noreferrer"><img src={Name_generator} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://startupnamegenerator.ai" target="_blank" rel="noreferrer"><h2>Startup Name Generator</h2></a>
                <p>Startup Name Generator is an AI-powered tool designed to help entrepreneurs and businesses generate unique and memorable names. It offers instant name ideas with domain availability checks, ensuring that the chosen name is not only creative but also practical for online branding. </p>
            </div>
            <div className="project">
                <a href="https://aistorybook.app"><img src={Story_generator} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://aistorybook.app"><h2>AI Story Generator</h2></a>
                <p>AI Story Book creates personalized stories from family photos using AI.</p>
            </div>
            <div className="project">
                <a href="https://geekflare.com/"><img src={Boyok} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://geekflare.com/"><h2>BYOK AI Platform</h2></a>
                <p>The collaborative AI platform for business flexibility. Bring your own API keys with Geekflare Connect, or start instantly with our all-in-one Geekflare Chat subscription.e</p>
            </div>
            <div className="project">
                <a href="https://aethera.ai/"><img src={Aethera} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://aethera.ai/"><h2>AI Diary</h2></a>
                <p>AI Diary is a digital journal with AI capabilities designed to boost mood and improve writing. It offers AI-powered support for personal growth, goal setting, self-reflection, mental health, and productivity. Users can engage in daily journaling with AI features that make writing fun and insightful, including AI-powered writing prompts, mood analysis, writing analysis, and AI-generated summaries and poems. It prioritizes privacy and data protection, ensuring entries remain confidential.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;