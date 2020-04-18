import React, { useState } from 'react';
import { Header, Input, Button, Modal, Message } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { addUserRequest } from '../types';
import { addNewUser } from '../redux/slice';

interface Props {}

const Login: React.FC<Props> = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = (): void => {};

  const handleCancel = (): void => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setNewUsername('');
    setShowModal(false);
    setShowError(false);
  };

  const validateTextField = (text: string): boolean => {
    if (text.trim().length > 0) {
      return true;
    }
    return false;
  };

  const handleRegister = (): void => {
    console.log(validateTextField(firstName), 'first') 
    console.log(validateTextField(lastName), 'last');
    console.log(validateTextField(email), 'email');
    console.log(validateTextField(newUsername), 'username');
    if (
      validateTextField(firstName) &&
      validateTextField(lastName) &&
      validateTextField(email) &&
      validateTextField(newUsername)
    ) {
     const newUser: addUserRequest = {
        firstName,
        lastName,
        email,
        username: newUsername
     }
     dispatch(addNewUser(newUser));
     handleCancel();
     return;
    }
    setShowError(true);
    return;
  };

  return (
    <>
      <Header>Welcome to Language Learner</Header>
      <Input
        value={username}
        onChange={data => setUsername(data.target.value)}
        label="Username"
      />
      <Button primary onClick={handleLogin}>
        Log In
      </Button>
      <Button onClick={() => setShowModal(true)}>Register as New User</Button>
      <Modal open={showModal}>
        <Modal.Header>Register</Modal.Header>
        <Modal.Content>
          <Input
            label="First Name"
            value={firstName}
            onChange={data => setFirstName(data.target.value)}
            // error={!validateTextField(firstName)}
          />
          <Input
            label="Last Name"
            value={lastName}
            onChange={data => setLastName(data.target.value)}
            // error={!validateTextField(lastName)}
          />
          <Input
            label="Email"
            value={email}
            onChange={data => setEmail(data.target.value)}
            // error={!validateTextField(email)}
          />
          <Input
            label="Username"
            value={newUsername}
            onChange={data => setNewUsername(data.target.value)}
            // error={!validateTextField(newUsername)}
          />
          <Message negative hidden={!showError}>
            <Message.Header>
              Please ensure that all fields have been filled out.
            </Message.Header>
          </Message>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={handleCancel}>CANCEL</Button>
          <Button primary onClick={handleRegister}>
            REGISTER
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default Login;
