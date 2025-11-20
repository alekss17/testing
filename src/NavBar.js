import { Link } from 'react-router-dom';
import './Styles/App.css';

const NavBar = () => {
  return (
    <div>
        <div className='Routes'>
      <Link className='Home' to="/profile">Profile</Link>
      <Link className='Home' to="/dialogs">Dialogs</Link>
      <Link className='Home' to="/music">Music</Link>
      <Link className='Home' to="/settings">Settings</Link>
      <Link className='Home' to="/users">Users</Link>
      </div>
    </div>
  );
};
 
export default NavBar;