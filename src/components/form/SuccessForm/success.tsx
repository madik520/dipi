
import React from 'react';

const Success = () => {
    return(
        <div className="success-container">
            <h1>Success!</h1>
            <div className="success-text-wrapper">
                <span>Your account was successfuly registered.</span>
                <span>Please wait for account approval.</span>
                <span>It can take up to 24 hours.</span>
            </div>
            <footer>
                <span>Have questions?</span>
                <span>Contact <a href='https://google.com' target="blank">info@site.com</a></span>
            </footer>
        </div>
    );
};

export default Success;