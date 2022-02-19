import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/HomeScreen';
import CalculatorScreen from './src/CalculatorScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Calculator"
          component={CalculatorScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;