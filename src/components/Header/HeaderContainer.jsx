import React, {Component} from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer";
import { GetIsAuth, loginSelector } from "../../redux/selectors/authSelector";

class HeaderContainer extends Component {

  render() {
  return (
    <>
    <Header {...this.props} />
    </>
  )}
};

const MapStateToProps = (state) => ({
  isAuth: GetIsAuth(state),
  login: loginSelector(state)
})

export default connect (MapStateToProps, { logout })(HeaderContainer);
