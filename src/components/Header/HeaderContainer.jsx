import React, {Component} from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { GetMe } from "../../redux/authReducer";

class HeaderContainer extends Component {

   componentDidMount() {
   this.props.GetMe()
  }

  render() {
  return (
    <>
    <Header {...this.props} />
    </>
  )}
};

const MapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect (MapStateToProps, { GetMe })(HeaderContainer);
