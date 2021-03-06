import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultScreen from '../screens/searchResults';
import SearchResultsTabNav from './SearchResultsTabNavigator';

const Stack = createStackNavigator();

const ExploreNavigator = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={'Welcome'}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name={'SearchResults'}
                component={SearchResultsTabNav}
                options={{
                    title: 'Search your destination'
                }}
            />
        </Stack.Navigator>
    )
}

export default ExploreNavigator;