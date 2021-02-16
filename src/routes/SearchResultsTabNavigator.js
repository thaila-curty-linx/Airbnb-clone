import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../pages/SearchResults';
import SearchResultsMap from '../pages/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();

function SearchResultsTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {backgroundColor: '#f15454'},
      }}>
      <Tab.Screen name="list" component={SearchResults} />
      <Tab.Screen name="map" component={SearchResultsMap} />
    </Tab.Navigator>
  );
}

export default SearchResultsTabNavigator;
