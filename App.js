import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Home from './app/views/Home'
import ScanCode from './app/views/ScanCode'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ScanCode" component={ScanCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
