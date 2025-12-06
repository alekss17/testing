import React from "react";
import LoginForm from "../Forms/LoginForm";
import { connect } from "react-redux";
import { login, logout } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";

const Login = (props) => {
    const Submit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
        }

       if (props.isAuth) {
        return <Navigate to={"/profile"} replace />
       }  
    return (
        <>
        <h1>LOGIN</h1>
        <p>(test account Email: free@samuraijs.com, Password: free)</p>
        <LoginForm formError={props.formError} Submit={Submit} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
    isAuth: state.auth.isAuth,
    formError: state.auth.formError
}}

export default connect(mapStateToProps, {login})(Login);