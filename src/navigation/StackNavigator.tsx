import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import BaymaxScreen from '../screens/BaymaxScreen';
import { Colors } from '../utils/Constants';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='SplashScreen'
      screenOptions={{
        statusBarColor:Colors.primary,
        headerShown:false,
       
      }}
      
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="BaymaxScreen" component={BaymaxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
