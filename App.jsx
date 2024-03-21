import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenHome from './screens/ScreenHome'
import ScreenDetails from './screens/ScreenDetails'



const Stack = createNativeStackNavigator()
export default function Hello() {

  return (
   
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='ScreenHome' component={ScreenHome} options={{title: 'Home Pokemon'}}/>
      <Stack.Screen name='ScreenDetails' component={ScreenDetails} options={{title: 'Details Pokemon'}} />
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})