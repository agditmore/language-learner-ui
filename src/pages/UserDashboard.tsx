import React, { useState, useEffect } from 'react';
import { Header, Button, Modal } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux';
import LanguageDisplay from './LanguageDisplay';
import { Language } from '../types';
import { getUserById } from '../redux/slice';
import { useParams } from 'react-router-dom';

const UserDashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const { userId } = useParams<{userId: string}>();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user || !user.username) {
      dispatch(getUserById(userId));
    }
  }, [user, userId, dispatch]);

  return (
    <div className="landing__container">
      <Header>{`Hello, ${user.fullName}`}</Header>
      <Button onClick={() => setShowModal(true)}>Start Learning</Button>
      <Modal open={showModal}>
        <Modal.Header>Which language would you like to study?</Modal.Header>
        <Modal.Content>
          {user.languages && user.languages.length > 0 ? (
            <>
              <div>Current Languages:</div>
              {user.languages.map((language: Language) => (
                <LanguageDisplay language={language.languageCatalog} />
              ))}
            </>
          ) : <div>Click below to start learning a new language!</div>}
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={()=>{}}>All Language Options</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default UserDashboard;
