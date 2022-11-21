import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title, Wrapper, Form, FormInput, Button } from '../../components/StyledComponents/StyledComponents.js'

   const RegisterPage = ({ onLogin }) => {
   const [username, setUsername] = useState('');
   const navigate = useNavigate();

  const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username);

          
      navigate('/');
    };
    const handleUsernameChange = (e) => setUsername(e.target.value);

    return (
        <Wrapper>
            <Title>Register page</Title>
            <Form onSubmit={handleSubmit}>
               <FormInput placeholder="Username" onChange={handleUsernameChange} />
               <FormInput type="password" placeholder="Password" />
              <Button>Register</Button>
            </Form>
        </Wrapper>
    )
};

export default RegisterPage;