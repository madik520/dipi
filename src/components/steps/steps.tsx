import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../reducers/combineReducers';
import { nextStep } from '../../actions/actionCreator';

//Step component types
type StepTypes = {
    id: number,
    className: string,
    text: string,
    link: string
}

//render steps components
const STEP_COMPONENT:StepTypes[] = [
    {
        id: 1,
        className: "step-circle",
        text: "contacts",
        link: "/"
    },
    {
        id: 2,
        className: "step-circle",
        text: "address",
        link: "/address"
    },   
    {
        id: 3,
        className: "step-circle",
        text: "categories",
        link: "/category"
    },   
    {
        id: 4,
        className: "step-circle",
        text: "success",
        link: "/success"
    },       
]

//Connect types
const mapState = (state: RootState) => ({
    register: state.register
});

const connector = connect(mapState, { nextStep });

type PropsReducer = ConnectedProps<typeof connector>

interface ISteps {

}

type Props = PropsReducer & ISteps;
const Steps:React.FC<Props> = (props) => {
    const { steps } = props.register;
    

    return(
        <header className="steps-container">
            <div className="steps-wrapper">
                { STEP_COMPONENT.map(({ id, className, text, link }) => {
                    return <div key={id} className={`step ${steps > id ? "complete-step" : null}`}>
                    { steps >= id ? <Link onClick={() => props.nextStep(id)} to={`${link}`} className={`${className} ${steps === id ? "active" : "prev-step"}`}>
                        <span>{text}</span>
                        <div className="circle"></div>
                    </Link> 
                    :
                    steps === 'complete' ?
                    <div className={`${className} ${id === 4 ? "active" : "prev-step"}`}>
                        <span>{text}</span>
                        <div className="circle"></div>
                    </div>
                    :
                    <div className={`${className}`}>
                        <span>{text}</span>
                        <div className="circle"></div>
                    </div>
                    }
                    </div>
                })}
            </div>
        </header>
    );
};

export default connector(Steps);