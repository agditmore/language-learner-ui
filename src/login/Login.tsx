import React, { useState } from 'react';
import { Header, Input, Button, Form, Label } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { loadUser } from '../redux/slice';
import { useHistory } from 'react-router-dom';
import { getUserByUsername } from '../controller/controller';
import { getUserRoutes } from '../routingConfig';
import NewUserRegistration from './NewUserRegistration';
import './Login.css';

interface Props {}

const Login: React.FC<Props> = () => {
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (): void => {
    if (username.trim().length > 0) {
      getUserByUsername(username).then(data => {
        console.log(data);
        dispatch(loadUser(data));
        history.push(getUserRoutes(data.id).landingPage.path);
      });
    }
  };

  return (
    <div className="login__container">
      <Header>Welcome to Language Learner</Header>
      <div className="login__form-container">
        <Form onSubmit={handleLogin}>
          <Form.Input
            value={username}
            onChange={data => setUsername(data.target.value)}
            label="Enter Username"
          />
        </Form>
        <div className="login__buttons">
          <Button primary onClick={handleLogin}>
            Log In
          </Button>
          <Button onClick={() => setShowModal(true)}>
            Register as New User
          </Button>
        </div>
      </div>
      <NewUserRegistration showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Login;
