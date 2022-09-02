import React from 'react'
import './about.css';
import me from './../../assets/aboutme.png'
import {FaAward} from 'react-icons/fa';
import {BiFootball} from 'react-icons/bi';
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={me} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>Education</h5>
              <small>BSC engineering in ICT at CoU (current)</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ projects</small>
            </article>

            <article className='about__card'>
              <BiFootball  className='about__icon'/>
              <h5>Hobby</h5>
              <small>Playing Football</small>
            </article>
          </div>
          <p>
            I am a MERN Stack web developer. I learning it since 2021. I still learning so. I love to learn new technologies
          </p>
          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>

      </div>
    </section>
  )
}

export default About