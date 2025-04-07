import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='first-row'>
                <div>
                    <h6>CATEGORIES</h6>
                    <ul>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Shoes</li>
                        <li>Watches</li>
                    </ul>
                </div>
                <div>
                    <h6>HELP</h6>
                    <ul>
                        <li>Track Order</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div>
                    <h6>GET IN TOUCH</h6>
                    <p>Any questions? Let us know in store at 8th floor
                        , 379 Hudson St, New York, NY 10018 or call us
                        on (+1) 96 716 6879</p>
                    <span>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-pinterest-p"></i>
                    </span>
                </div>
                <div>
                    <h6>NEWSLETTER</h6>
                    <p>email@example.com</p>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;