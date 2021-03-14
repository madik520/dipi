import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import register from './registerReducer';

const rootReducer = combineReducers({
    form: formReducer,
    register: register,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;