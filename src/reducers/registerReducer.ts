import { 
    CONTACT_FORM, 
    ADDRESS_FORM, 
    CATEGORY_FORM, 
    SUCCESS 
} from '../constants/constants';

const initialState = {
    contact: {
        email: null,
        password: null,
        passConfirm: null
    },
    address: {
        country: null,
        city: null,
        address: null
    },
    category: {
        cat1: null,
        cat2: null,
        cat3: null
    }
};

const register = (state = initialState, action:any) => {
    switch(action.type){
        case CONTACT_FORM:
            return {
                state
            }
        default:
            return state;
    };
};

export default register;