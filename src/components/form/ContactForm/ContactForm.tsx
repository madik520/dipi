import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../../reducers/combineReducers';
import { submitContact, nextStep } from '../../../actions/actionCreator';
import { validate, renderField } from '../RenderFields/RenderFields';

//Connect types
const mapState = (state: RootState) => ({
    register: state.register
});
const connector = connect(mapState, { submitContact, nextStep });
type ReducerProps = ConnectedProps<typeof connector>

const CreateContactForm:React.FC<InjectedFormProps<ReducerProps>> = (props) => {
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
                autoComplete="new-password"
            />
            <Field 
                name="secondPassword"
                type="password"
                component={renderField}
                label="Password Confirm"
                required={true}
                autoComplete="current-password"
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
        props.submitContact(data);
        props.nextStep(2);
        props.history.replace("/address");
    }
    return(
        <ReducerContactForm onSubmit={submiting} />
    )
}

export default connector(ContactForm);
