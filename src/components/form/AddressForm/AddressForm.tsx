import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../../reducers/combineReducers';
import { submitAddress, nextStep } from '../../../actions/actionCreator';
import { validate, renderField } from '../RenderFields/RenderFields';

//Connect types
const mapState = (state: RootState) => ({
    register: state.register
});
const connector = connect(mapState, { submitAddress, nextStep });
type ReducerProps = ConnectedProps<typeof connector>

const CreateAddressForm:React.FC<InjectedFormProps<ReducerProps>> = (props) => {
    const { handleSubmit } = props;
    return(
        <form onSubmit={handleSubmit}>
            <Field 
                name="country"
                type="text"
                component={renderField}
                label="Country"
                required={true}
            />
            <Field 
                name="city"
                type="text"
                component={renderField}
                label="City"
                required={true}
            />
            <Field 
                name="address"
                type="text"
                component={renderField}
                label="Address"
                required={true}
            />
            <button className="btn-submit">next</button>
        </form>
    );
};

const ReducerAddressForm = reduxForm<any, any>({
    form: 'address-form',
    validate
})(CreateAddressForm);

const AddressForm = (props:any) => {
    const submiting = (data:any) => {
        props.submitAddress(data);
        props.nextStep(3);
        props.history.replace("/category");
    }
    return(
        <ReducerAddressForm onSubmit={submiting} />
    )
}

export default connector(AddressForm);