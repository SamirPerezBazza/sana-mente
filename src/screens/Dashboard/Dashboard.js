import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routesTab } from '../../routes/tab/routes-tab';
import HomeSvg from '../../assets/svgs/home';
import GroupsSvg from '../../assets/svgs/groups';
import ChatTabSvg from '../../assets/svgs/chatTab';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'FeedScreen') {
            iconName = <HomeSvg color={color}/>;
          } else if (route.name === 'GroupsScreen') {
            iconName = <GroupsSvg color={color}/>;
          } else if (route.name === 'ChatScreen') {
            iconName = <ChatTabSvg color={color}/>;
          }
          return iconName;
        },
        tabBarActiveTintColor: '#25D0A2',
        tabBarInactiveTintColor: '#FAFAFA',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#303030',
          height: '9%'
        },
        tabBarIconStyle: {
          width: '12%'
        }
      })}
    >
      {
        routesTab.map(route => (
          <Tab.Screen key={route.name} name={route.name} component={route.component} />
        ))
      }
    </Tab.Navigator>
  )
}

export default Dashboard;