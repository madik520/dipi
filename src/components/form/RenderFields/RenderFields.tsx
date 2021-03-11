type ErrorTypes = {
    email: string,
    password: string,
    secondPassword: string
}
//validation
export const validate = ({ email = "", password = "", secondPassword = "" }) => {
    const errors:ErrorTypes = {
        email: "",
        password: "",
        secondPassword: ""
    };
    if (!email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address';
    }
    if (password.length < 6) {
        errors.password = 'Password mast be min 6 symbol';
    }else if(password.length > 20){
        errors.password = 'Your password very long'
    }
    if (secondPassword !== password) {
        errors.secondPassword = "Password mismatch";
    }
    return errors;
}


export const renderField:React.FC = ({ input, label, type, meta: { touched, error } }:any) => (
    <div className="form-container">
      <div className="from-wrapper">
        <label>{label}</label>
        <input {...input} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
);

