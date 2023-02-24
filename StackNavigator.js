import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import QuizFruitsScreen from './screens/QuizFruitsScreen';
import ResultsScreen from './screens/ResultsScreen';
import PickQuestionsScreen from './screens/PickQuestionsScreen';
import QuizAnimalsScreen from './screens/QuizAnimalsScreen';
import QuizFamilyScreen from './screens/QuizFamilyScreen';
import QuizTransportationScreen from './screens/QuizTransportation'

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="PickQuestions" component={PickQuestionsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="QuizFamily" component={QuizFamilyScreen} options={{headerShown:false}}/>
        <Stack.Screen name="QuizAnimals" component={QuizAnimalsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="QuizFruits" component={QuizFruitsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="QuizTransportation" component={QuizTransportationScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Results" component={ResultsScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})