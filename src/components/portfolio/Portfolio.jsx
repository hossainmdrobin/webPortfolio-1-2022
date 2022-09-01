import React from 'react';
import './portrfolio.css';
import IMG1 from './../../assets/portfolio1.png';
import IMG2 from './../../assets/portfolio2.png';
import IMG3 from './../../assets/portfolio3.png';
import IMG4 from './../../assets/portfolio4.png';
import IMG5 from './../../assets/portfolio5.png';


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recnet Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="" />
                    </div>
                    <h3>this is portfolio item tilte</h3>
                    <div className="portfolio__item-cta">
                        <a href="github" className='btn'>Github</a>
                        <a href="live" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG5} alt="" />
                    </div>
                    <h3>this is portfolio item tilte</h3>
                    <div className="portfolio__item-cta">
                        <a href="github" className='btn'>Github</a>
                        <a href="live" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>this is portfolio item tilte</h3>
                    <div className="portfolio__item-cta">
                        <a href="github" className='btn'>Github</a>
                        <a href="live" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>this is portfolio item tilte</h3>
                    <div className="portfolio__item-cta">
                        <a href="github" className='btn'>Github</a>
                        <a href="live" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>this is portfolio item tilte</h3>
                    <div className="portfolio__item-cta">
                        <a href="github" className='btn'>Github</a>
                        <a href="live" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>

        </section>
    );
}

export default Portfolio;
