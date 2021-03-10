import React from 'react';

const Steps = () => {
    return(
        <header className="steps-container">
            <div className="steps-wrapper">
                <div className="step-circle">
                    <span>contacts</span>
                </div>
                <div className="step-line"></div>
                <div className="step-circle">
                    <span>adrres</span>
                </div>
                <div className="step-line"></div>
                <div className="step-circle">
                    <span>categories</span>
                </div>
                <div className="step-line"></div>
                <div className="step-circle">
                    <span>success</span>
                </div>
            </div>
        </header>
    );
};

export default Steps;