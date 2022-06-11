import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator as AppNavigator} from './navigator/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
