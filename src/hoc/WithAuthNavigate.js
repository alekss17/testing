import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import Preloader from "../components/common/Preloader/Prelooader";

let MapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
    isAuthChecking: state.auth.isAuthChecking
});

const AuthRedirectComponent = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuthChecking) {
                return <Preloader />
            }

            if (!this.props.isAuth) {
                return <Navigate to="/login" replace />
            }

            return <Component {...this.props} />
        }
    }

    return connect(MapStateToPropsForRedirect)(RedirectComponent)
}

export default AuthRedirectComponent
