import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Guests from '../pages/Guests';
import DestinationSearch from '../pages/DestinationSearch';

import HomeTabNavigator from './homeTabNavigation';

const Stack = createStackNavigator();

function routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DestinationSearch"
          component={DestinationSearch}
          options={{title: 'Search your destination'}}
        />
        <Stack.Screen
          name="Guests"
          component={Guests}
          options={{title: 'How many people?'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default routes;
