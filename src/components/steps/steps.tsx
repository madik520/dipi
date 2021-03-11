import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const STEP_LINKS = [
    {
        id: "contacts",
        className: "steps-circle",
        text: "contacts",
    },
    {
        id: "address",
        className: "steps-circle",
        text: "address",
    },   
    {
        id: "categories",
        className: "steps-circle",
        text: "categories",
    },   
    {
        id: "success",
        className: "steps-circle",
        text: "success",
    },       
]

const Steps = () => {
    const [ stepsArr, setStepsArr ] = useState(STEP_LINKS);

    return(
        <header className="steps-container">
            <div className="steps-wrapper">
                { stepsArr.map(({ id, className, text }) => {
                    return <Link key={id} to={id}>
                        <div className={className}>
                            <span>{text}</span>
                        </div>
                        <div className="step-line"></div>
                    </Link>
                }) }
            </div>
        </header>
    );
};

export default Steps;