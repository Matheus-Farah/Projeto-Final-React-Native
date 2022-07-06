import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Cadastro } from './src/screens/Cadastro';
import { Login } from './src/screens/Login';
import { Carrinho } from './src/screens/Carrinho';

export default function App() {
  return (
    <Carrinho/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
