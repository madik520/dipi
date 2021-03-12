import { CONTACT_FORM, ADDRESS_FORM, CATEGORY_FORM } from '../constants/constants';
import { ActionsTypes } from '../types/types';

interface IState {
    contact: {
        email: string | null,
        password: string | null,
        secondPassword: string | null,
    },
    address: {
        country: string | null,
        city: string | null,
        address: string | null
    },
    category: {
        category1: string | null
        category2: string | null,
        category3: string | null
    }
}

const initialState = {
    contact: {
        email: null,
        password: null,
        secondPassword: null
    },
    address: {
        country: null,
        city: null,
        address: null
    },
    category: {
        category1: null,
        category2: null,
        category3: null
    }
};

const register = (state = initialState, action:ActionsTypes):IState => {
    switch(action.type){
        case CONTACT_FORM:
            return {
                ...state,
                contact: {
                    email: action.payload.email,
                    password: action.payload.password,
                    secondPassword: action.payload.secondPassword
                }
            }
        case ADDRESS_FORM:
            return {
                ...state,
                address: {
                    country: action.payload.country,
                    city: action.payload.city,
                    address: action.payload.address
                }
            }
        case CATEGORY_FORM:
            return {
                ...state,
                category: {
                    category1: action.payload.category1,
                    category2: action.payload.category2,
                    category3: action.payload.category3
                }
                
            }
        default:
            return state;
    };
};

export default register;