import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Steps from '../../components/steps/steps';
import ContactForm from '../../components/form/ContactForm/ContactForm';
import AddressForm from '../../components/form/AddressForm/AddressForm';
import CategoryForm from '../../components/form/CategoryForm/CategoryForm';
import Success from '../../components/form/SuccessForm/success';


const RegisterForm = () => {
    return(
        <div className="register-form-container">
            <Router>
                <Steps />
                <div className="register-form-wrapper">
                    <Switch>
                        <Route exact path={"/"} component={ContactForm} />
                        <Route path={"/address"} component={AddressForm} />
                        <Route path={"/category"} component={CategoryForm} />
                        <Route path={"/success"} component={Success} />
                        <Redirect to={"/"} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default RegisterForm;