import { Navbar, } from 'react-bootstrap';
import logo from '../../logo.svg';

function Header() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            AniList
            </Navbar.Brand>
        </Navbar>
        </>
    );
  }

  export default Header;