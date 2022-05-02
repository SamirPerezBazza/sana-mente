import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routesTab } from '../../routes/tab/routes-tab';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {
        routesTab.map(route => (
          <Tab.Screen name={route.name} component={route.component} />
        ))
      }
    </Tab.Navigator>
  )
}

export default Dashboard;