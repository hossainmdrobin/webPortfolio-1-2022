import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What skills I have</h5>
            <h2>My experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Developer</h3>
                    <div className="experience__content">
                        <article className="experience__detail">
                            <BsPatchCheckFill />
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill />
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill />
                            <h4>Javascript</h4>
                            <small className='text-light'>Entermediate</small>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill />
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill />
                            <h4>Tailwind</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill />
                            <h4>React</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                <h3>Frontend Developer</h3>
                    <div className="experience__content">
                        <article className="experience__detail">
                            <BsPatchCheckFill />
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill />
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill />
                            <h4>Javascript</h4>
                            <small className='text-light'>Entermediate</small>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill />
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill />
                            <h4>Tailwind</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className="experience__detail">
                            <BsPatchCheckFill />
                            <h4>React</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Experience;