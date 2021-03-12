import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../../reducers/combineReducers';
import { submitCategory } from '../../../actions/actionCreator';
import { validate, renderField } from '../RenderFields/RenderFields';

//Connect types
const mapState = (state: RootState) => ({
    register: state.register
});
const connector = connect(mapState, { submitCategory });
type ReducerProps = ConnectedProps<typeof connector>

const CreateCategoryForm:React.FC<InjectedFormProps<ReducerProps>> = (props) => {
    const { handleSubmit } = props;
    return(
        <form onSubmit={handleSubmit}>
            <Field className="category-select" name="category1" component="select" required={true}>
                <option></option>
                <option value="Front">Front</option>
                <option value="End">End</option>
                <option value="Developer">Developer</option>
            </Field>
            <Field 
                name="category2"
                type="text"
                component={renderField}
                label="Category 2"
            />
            <Field 
                name="category3"
                type="text"
                component={renderField}
                label="Category 3"
            />
            <button className="btn-submit">next</button>
        </form>
    );
};

const ReducerCategoryForm = reduxForm<any, any>({
    form: 'category-form',
    validate
})(CreateCategoryForm);

const CategoryForm = (props:any) => {
    const submiting = (data:any) => {
        props.submitCategory(data);
        props.history.replace("/success");
    }
    return(
        <ReducerCategoryForm onSubmit={submiting} />
    )
}


export default connector(CategoryForm);