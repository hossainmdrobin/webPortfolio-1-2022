import React from 'react'
import './about.css';
import me from './../../assets/aboutme.png'
import {FaAward} from 'react-icons/fa';
import {FiUser} from 'react-icons/fi';
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
              <h5>Experience</h5>
              <small>3+ years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ projects</small>
            </article>

            <article className='about__card'>
              <FiUser  className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ clients</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea deserunt recusandae voluptatem, nobis temporibus mollitia dolorum voluptas maxime repudiandae porro fugiat placeat exercitationem, perspiciatis itaque. Voluptatem explicabo dolorum alias.
          </p>
          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>

      </div>
    </section>
  )
}

export default About