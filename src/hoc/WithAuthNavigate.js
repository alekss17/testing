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
            // Пока идёт проверка авторизации — показываем прелоадер
            if (this.props.isAuthChecking) {
                return <Preloader />
            }

            // После проверки: если не авторизован — редирект
            if (!this.props.isAuth) {
                return <Navigate to="/login" replace />
            }

            // Если авторизован — рендерим компонент
            return <Component {...this.props} />
        }
    }

    return connect(MapStateToPropsForRedirect)(RedirectComponent)
}

export default AuthRedirectComponent
