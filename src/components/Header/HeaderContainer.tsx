import React, {Component} from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer";
import { GetIsAuth, loginSelector } from "../../redux/selectors/authSelector";
import { RootState } from "../../redux/redux-store";
import { HeaderPropsTypes } from "../../types/Types";

class HeaderContainer extends Component<HeaderPropsTypes> {
  render() {
  return (
    <>
    <Header {...this.props} />
    </>
  )}
};

const MapStateToProps = (state: RootState) => ({
  isAuth: GetIsAuth(state),
  login: loginSelector(state)
})

export default connect (MapStateToProps, { logout })(HeaderContainer);
