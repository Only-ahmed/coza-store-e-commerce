import React from 'react';
import img from '../../assets/contact/bg-01.jpg.webp';
import './contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-header'>
                <h1>Contact</h1>
                <img src={img} alt='img' />
            </div>
            <div className='contact-container'>
                <div className='contact-form1'>
                    <div className='contact-form1-content'>
                        <h4>Send Us A Message</h4>
                        <input type='text' placeholder='Your Name Address' />
                        <textarea placeholder='Your Message' style={{ height: '200px' }}></textarea>
                        <button>SUBMIT</button>
                    </div>
                </div>
                <div className='contact-form2'>
                    <div className='contact-form2-content'>
                        <div>
                            <div>
                                <i class="fa-solid fa-location-dot"></i>
                                <h5>Send Us A Message</h5>
                            </div>
                            <p>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                        </div>
                        <div>
                            <div>
                                <i class="fa-solid fa-phone"></i>
                                <h5>Lets Talk</h5>
                            </div>
                            <p>+1 800 1236879</p>
                        </div>
                        <div>
                            <div>
                                <i class="fa-solid fa-envelope"></i>
                                <h5>Sale Support</h5>
                            </div>
                            <p>contact@example.com</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;