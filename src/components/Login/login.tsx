import React from "react";
import LoginForm from "../Forms/LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import { formErrorSelector, getCaptcha, GetIsAuth } from "../../redux/selectors/authSelector";
import { RootState } from "../../redux/redux-store";
import { formDataType } from "../../types/Types";

interface LoginType {
    isAuth: boolean;
    formError: string | null;
    captchaUrl: string | null;
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const Login = (props: LoginType) => {
    const Submit = (formData: formDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

       if (props.isAuth) {
        return <Navigate to={"/profile"} replace />
       }  
    return (
        <>
        <h1>LOGIN</h1>
        <p>(test account Email: free@samuraijs.com, Password: free)</p>
        <LoginForm captchaUrl={props.captchaUrl} formError={props.formError} Submit={Submit} />
        </>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
    isAuth: GetIsAuth(state),
    formError: formErrorSelector(state),
    captchaUrl: getCaptcha(state)
}}

export default connect(mapStateToProps, {login})(Login);