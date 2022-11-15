import * as React from 'react';
import { Login } from "../screens/Login";
import { Inicio } from "../screens/Inicio";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export function Routes() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Inicio" component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>

  );

}


{/*

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';    
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
    

    <NavigationContainer>
      Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>*/}




