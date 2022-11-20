import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title, Wrapper, Form } from '../../components/StyledComponents/StyledComponents.js';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username);

        // fetch

        navigate('/home');
    };
    const handleUsernameChange = (e) => setUsername(e.target.value);

    return (
        <Wrapper>
            <Title>Login page</Title>
            <Form onSubmit={handleSubmit}>
                <input placeholder="Username" onChange={handleUsernameChange} />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </Form>
        </Wrapper>
    )
};

export default LoginPage;
    


