import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PetsFeedScreen from './PetsFeedScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="PetsFeed"
      screenOptions={{
        tabBarActiveTintColor: 'dodgerblue',
      }}
    >
      <Tab.Screen
        name="PetsFeed"
        component={PetsFeedScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Pets Feed',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }
      }
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
