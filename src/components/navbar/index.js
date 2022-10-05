import { Menu } from 'react-feather'
import Logo from '../../assets/stamps.png';

import './styles.css';

const NavBar = (props) => {
  return (
    <div className='nav'>
      <div>
        <img src={Logo} className='logo' alt="stamps logo" />
      </div>
      
      <div className='menu-container'>
        <Menu height={40} width={40} />
      </div>
    </div>
  );
}

export default NavBar;