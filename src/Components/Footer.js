import React, { Component } from 'react'
import FacebookIcon from '../assets/IMG/FacebookIcon.png';
import InstagramIcon from '../assets/IMG/InstagramIcon.png';
import TwitterIcon from '../assets/IMG/twitter.png';



class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <div className="container d-flex flex-column flex-md-row justify-content-between">
                    <a className="py-2" href="https://www.facebook.com/friendsmkt" aria-label="Product">
                        <img className="mr-5" src={FacebookIcon} width="40" height="36" fill="none" stroke="currentColor" alt="" />
                    </a>
                    <a className="py-2" href="https://www.instagram.com/friendsmkt/" aria-label="Product">
                        <img className="mr-5" src={InstagramIcon} width="40" height="40" fill="none" stroke="currentColor"  alt=""  />
                    </a>
                    <a className="py-2" href="https://www.instagram.com/friendsmkt/" aria-label="Product">
                        <img className="" src={TwitterIcon} width="40" height="40" fill="none" stroke="currentColor"  alt="" />
                    </a>

                </div>

            </footer>





        );
    }
}

export default Footer;