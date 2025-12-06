import { NavLink } from 'react-router-dom';
import '../../Styles/Header.css'

const Header = (props) => {
  return (
    <header className="header-container">
      <img
        className="header-icon"
        src="https://img.freepik.com/free-vector/abstract-wavy-background-template_1035-8922.jpg"
        alt="Header logo"
      />
      <div className='loginB'>
        {props.isAuth ? <>{props.login}<button onClick={() => props.logout()}>logout</button></> : <><NavLink className='login' to={'/login'}>login</NavLink></> }
      </div>
    </header>
  );
};

export default Header;