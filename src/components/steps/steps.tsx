import React, { useState } from 'react';

const STEP_LINKS = [
    {
        id: "/",
        className: "step-circle",
        text: "contacts",
    },
    {
        id: "address",
        className: "step-circle",
        text: "address",
    },   
    {
        id: "category",
        className: "step-circle",
        text: "categories",
    },   
    {
        id: "success",
        className: "step-circle",
        text: "success",
    },       
]

interface ISteps {
    onClick: () => void
}

const Steps:React.FC<ISteps> = ({ onClick }) => {
    const [ stepsArr, setStepsArr ] = useState(STEP_LINKS);

    return(
        <header className="steps-container">
            <div className="steps-wrapper">
                { stepsArr.map(({ id, className, text }) => {
                    return <div key={id} className="step" >
                        <div onClick={onClick} className={className}>
                            <span>{text}</span>
                        </div>
                        <div className="step-line"></div>
                    </div>
                }) }
            </div>
        </header>
    );
};

export default Steps;