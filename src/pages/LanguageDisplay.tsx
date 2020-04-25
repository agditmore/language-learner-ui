import React from 'react';
import { LanguageCatalog } from '../types';
import { Icon } from 'semantic-ui-react';

interface Props {
  language: LanguageCatalog;
}

const LanguageDisplay: React.FC<Props> = ({ language }) => {
  const getFlagName = (languageName: string): string => {
    return 'flag'; //TODO
  };
  return (
    <div>
      <div>{language.name}</div>
      <Icon className={getFlagName(language.name)} size="massive" />
    </div>
  );
};

export default LanguageDisplay;
