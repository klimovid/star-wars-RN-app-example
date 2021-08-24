import React from 'react';
import { StatusBar } from 'react-native';

import MainPage from '../app/MainPage';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <MainPage />
    </>
  );
};

export default App;
