import 'react-native';
import React from 'react';
import App from '../src/app/App';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
