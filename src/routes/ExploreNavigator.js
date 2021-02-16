import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../pages/Home';
import SearchResults from '../pages/SearchResults';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';

const Stack = createStackNavigator();

function ExploreNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchResults"
        component={SearchResultsTabNavigator}
        options={{title: 'Search your destination'}}
      />
    </Stack.Navigator>
  );
}

export default ExploreNavigator;
