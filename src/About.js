//About.js
import React from 'react';
import { FontAwesomeIcon }
    from '@fortawesome/react-fontawesome';
import { faUser }
    from '@fortawesome/free-solid-svg-icons';
import '/style.css';

const About = () => {
    return (
        <section id="about"
            className="container text-center">
            <div className="row">
                <div className="col-md-8 offset-md-2";
                    <h2 className="section-title">
                        <FontAwesomeIcon icon={faUser}
                            className="mr-2" />
                        About Me
                    </h2>
                    <div className="profile-image-container">

                        <img src="/user.png"
                            alt="geek pic"
                            className="img-fluid rounded-circle profile-image" />
                    </div>
                    <p className="section-description mt-4">
                        ENTER ABOUT ME HERE FOR LOLS
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;