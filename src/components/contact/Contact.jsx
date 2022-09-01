import React from 'react';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__potion">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>email</h4>
                        <h5>hossainmdrobin967@gmail.com</h5>
                        <a href="mailto:hossainmdrobin967@gmail.com">
                            Send a message
                        </a>
                    </article>
                    <article className="contact__potion">
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>hossainmdrobin967@gmail.com</h5>
                        <a href="https://m.me/mdrobin.hosseain.7">
                            Send a message
                        </a>
                    </article>
                    <article className="contact__potion">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>Whats app</h4>
                        <h5>+880 1772 7840 31</h5>
                        <a href="https://api.whatsapp.com/send?phone+8801772784031">
                            Send a message
                        </a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <textarea name="" id="" cols="30" rows="10" placeholder='your message'></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
