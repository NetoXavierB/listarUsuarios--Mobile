import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';

import { LogBox } from 'react-native';


LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" translucent={true}/>
      <Routes/>
    </>
  );
}