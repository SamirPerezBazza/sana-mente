import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './src/routes/stack/routes-stack';
import Login from './src/screens/Login/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='WelcomeScreen'
      >
        {
          routes.map(route => (
            <Stack.Screen key={route.name} name={route.name} component={route.component} />
          ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
