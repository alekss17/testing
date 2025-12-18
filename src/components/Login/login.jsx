import React, { useEffect, useState } from "react";
import LoginForm from "../Forms/LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import { formErrorSelector, getCaptcha, loginSelector } from "../../redux/selectors/authSelector";

const Login = (props) => {
    const Submit = (formData) => {
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

const mapStateToProps = (state) => {
    return {
    isAuth: loginSelector(state),
    formError: formErrorSelector(state),
    captchaUrl: getCaptcha(state)
}}

export default connect(mapStateToProps, {login})(Login);