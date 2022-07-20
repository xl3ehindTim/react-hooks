import React, { FC } from 'react';
import { useNavigatorLanguage } from './useNavigatorLanguage';

export default {
  title: 'useNavigatorLanguage',
};

export const Default: FC = () => {
  const language = useNavigatorLanguage();

  return (
    <>Language: {language}</>
  );
};
