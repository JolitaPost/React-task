import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title, Wrapper, Form, FormInput, Button } from '../../components/StyledComponents/StyledComponents.js';

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
                <FormInput placeholder="Username" onChange={handleUsernameChange} />
                <FormInput type="password" placeholder="Password" />
                <Button>Login</Button>
            </Form>
        </Wrapper>
    )
};

export default LoginPage;
    


