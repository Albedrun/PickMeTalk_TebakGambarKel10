import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
   <StackNavigator style={styles.container}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#823032',
    alignItems: '',
    justifyContent: 'center',
  },
});
