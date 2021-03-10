import React from 'react';
import {Field, reduxForm } from 'redux-form';

//Redux-form settings
const validate = (values:{ email:string, password:number, secondPassword: number }) => {
    const errors = {
        email: "",
        password: "",
        secondPassword: ""
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    } 
    if(values.password < 6){
        errors.password = 'Password mast be min 6 symbol'
    } 
    if(values.secondPassword !== values.password){
        errors.secondPassword = "Password mismatch"
    } 
    return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }:any) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
);

interface ICreateContactFrom {
    props: any
}

const CreateContactForm:React.FC<ICreateContactFrom> = (props) => {
    return(
        <form>
            <Field 
                name="email"
                type="email"
                component={renderField}
                label="Email"
            />
            <Field 
                name="password"
                type="password"
                component={renderField}
                label="Password"
            />
            <Field 
                name="secondPassword"
                type="password"
                component={renderField}
                label="Password Confirm"
            />
            <button type="submit" className="btn-submit">next</button>
        </form>
    );
};

export default reduxForm<any, any>({
    form: 'form-contact',
    validate
})(CreateContactForm);

