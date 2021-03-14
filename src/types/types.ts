import { CONTACT_FORM, ADDRESS_FORM, CATEGORY_FORM, NEXT_STEP } from '../constants/constants';

//Category types
export type ContactTypes = {
    email: string,
    password: string,
    secondPassword: string
};

interface IContactActions {
    type: typeof CONTACT_FORM,
    payload: ContactTypes
}

//Address types

export type AddressTypes = {
    country: string,
    city: string,
    address: string
}

interface IAddressActions {
    type: typeof ADDRESS_FORM,
    payload: AddressTypes
}

//Category types
export type CategoryTypes = {
    category1: string,
    category2: string,
    category3: string
}

interface ICategoryActions {
    type: typeof CATEGORY_FORM,
    payload: CategoryTypes
}

//Steps types
type NextStepType = {
    step: number | string
}
interface INextStepActions {
    type: typeof NEXT_STEP,
    payload: NextStepType
}


//export form actions
export type ActionsTypes = IContactActions | IAddressActions | ICategoryActions | INextStepActions;