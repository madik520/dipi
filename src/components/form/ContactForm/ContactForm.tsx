import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { validate, renderField } from '../RenderFields/RenderFields';

//Redux-form settings




interface ICreateContactFrom {

}

const CreateContactForm:React.FC<InjectedFormProps<ICreateContactFrom>> = (props) => {
    const { handleSubmit } = props;
    return(
        <form onSubmit={handleSubmit}>
            <Field 
                name="email"
                type="email"
                component={renderField}
                label="Email"
                required={true}
            />
            <Field 
                name="password"
                type="password"
                component={renderField}
                label="Password"
                required={true}
            />
            <Field 
                name="secondPassword"
                type="password"
                component={renderField}
                label="Password Confirm"
                required={true}
            />
            <button className="btn-submit">next</button>
        </form>
    );
};

const ReducerContactForm = reduxForm<any, any>({
    form: 'contact-form',
    validate
})(CreateContactForm);

const ContactForm = (props:any) => {
    const submiting = (data:any) => {
        console.log(data)
    }
    return(
        <ReducerContactForm onSubmit={submiting} />
    )
}

export default ContactForm;
