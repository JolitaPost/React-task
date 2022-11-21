import { Link, useNavigate } from 'react-router-dom';
import { NavBar, Image, NavWrapper } from '../StyledComponents/StyledComponents.js'

export const Navigation = ({ onLogout }) => {
    const navigate = useNavigate();


    const handleLogout = () => {
        onLogout();
        navigate('/register');
    }

    return (
        <NavWrapper>
                <Image src={process.env.PUBLIC_URL + "/logo111.png"} width="60" alt="logo" />
                <NavBar>            
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <button onClick={handleLogout}>Logout</button>
                </NavBar>
        </NavWrapper>
    )
}