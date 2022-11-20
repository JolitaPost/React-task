import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavBar } from '../StyledComponents/StyledComponents.js'


export const Navigation = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/register');
    }

    return (
        <NavBar>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <button onClick={handleLogout}>Logout</button>
        </NavBar>
    )
}