import { CONTACT_FORM, ADDRESS_FORM, CATEGORY_FORM } from '../constants/constants';
import { ContactTypes, AddressTypes, CategoryTypes } from '../types/types';
import { Dispatch } from 'redux';

export const submitContact = (data: ContactTypes) => (dispatch: Dispatch) => {
    dispatch({ type: CONTACT_FORM, payload: data  });
};

export const submitAddress = (data: AddressTypes) => (dispatch: Dispatch) => {
    dispatch({ type: ADDRESS_FORM, payload: data  });
};

export const submitCategory = (data: CategoryTypes) => (dispatch: Dispatch) => {
    dispatch({ type: CATEGORY_FORM, payload: data  });
};
