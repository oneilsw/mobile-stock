import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ChangeScreen from '../screens/ChangeScreen'

const Stack = createStackNavigator()

const PostAuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Settings"
          component={SettingsScreen}
        />
        <Stack.Screen 
          name="Change Screen"
          component={ChangeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default PostAuthStack