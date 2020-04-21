import React, { useState } from 'react';
import { Modal, Input, Message, Button } from 'semantic-ui-react';
import { addUserRequest } from '../types';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../redux/slice';

interface Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

const NewUserRegistration: React.FC<Props> = ({ showModal, setShowModal }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();

  const clearFields = (): void => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setNewUsername('');
  };

  const handleCancel = (): void => {
    clearFields();
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
        username: newUsername,
      };
      dispatch(addNewUser(newUser));
      handleCancel();
      return;
    }
    setShowError(true);
    return;
  };

  return (
    <Modal open={showModal}>
      <Modal.Header>Register</Modal.Header>
      <Modal.Content>
        <Input
          label="First Name"
          value={firstName}
          onChange={data => setFirstName(data.target.value)}
        />
        <Input
          label="Last Name"
          value={lastName}
          onChange={data => setLastName(data.target.value)}
        />
        <Input
          label="Email"
          value={email}
          onChange={data => setEmail(data.target.value)}
        />
        <Input
          label="Username"
          value={newUsername}
          onChange={data => setNewUsername(data.target.value)}
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
  );
};

export default NewUserRegistration;
