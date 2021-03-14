import { CONTACT_FORM, ADDRESS_FORM, CATEGORY_FORM, NEXT_STEP } from '../constants/constants';
import { ContactTypes, AddressTypes, CategoryTypes } from '../types/types';
import { Dispatch } from 'redux';

/*
@Params: object
*/
export const submitContact = (data: ContactTypes) => (dispatch: Dispatch) => {
    return dispatch({ type: CONTACT_FORM, payload: data  });
};

/*
@Params: object
*/
export const submitAddress = (data: AddressTypes) => (dispatch: Dispatch) => {
    return dispatch({ type: ADDRESS_FORM, payload: data  });
};

/*
@Params: object
*/
export const submitCategory = (data: CategoryTypes) => (dispatch: Dispatch) => {
    return dispatch({ type: CATEGORY_FORM, payload: data  });
};

//Steps actions

/* 
return dispatch ++number
*/
export const nextStep = (step:number) => (dispatch: Dispatch) => {
    dispatch({ type: NEXT_STEP, payload: { step } });
};
