import { Link } from 'react-router-dom';
import './App.css';

const NavBar = () => {
  return (
    <div>
        <div className='Routes'>
      <Link className='Home' to="/test">Test</Link>
      <Link className='Home' to="/">Home</Link>
      <Link  className='Home' to="/dialogs">Dialogs</Link>
      <Link className='Home' to="/music">Music</Link>
      <Link className='Home' to="/settings">Settings</Link>
      </div>
    </div>
  );
};
 
export default NavBar;