import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './src/screens/Login';
import { Cadastro } from './src/screens/Cadastro';
import { Enderecos } from './src/screens/Endereços';
import { Routes } from './src/routes';



const Stack = createStackNavigator();

function MyRoutes() {
  return <Routes/>
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}} />
      <Stack.Screen name="Enderecos" component={Enderecos} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={MyRoutes} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default function App() {
  
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

