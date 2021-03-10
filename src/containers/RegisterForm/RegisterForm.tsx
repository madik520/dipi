import React from 'react';
import Steps from '../../components/steps/steps';
import ContactForm from '../../components/form/ContactForm/ContactForm';

const RegisterForm = () => {
    return(
        <div className="register-form-container">
            <Steps />
            <div className="register-form-wrapper">
                <ContactForm />
            </div>
        </div>
    );
};

export default RegisterForm;