import { StyleSheet, Text, View, Image, Pressable, TouchableHighlight, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PickQuestionsScreen = () => {
    const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      <View style={{ padding: 20 }}></View>
      <Text style={{color: '#FF725E', fontSize: 30, fontWeight: 600, }}>CHOOSE CATEGORY</Text>
      <View style={{ padding: 10 }}></View>
      <View style={{ padding: 2 }}></View>
      <TouchableHighlight style={styles.boxChoice} onPress={() => navigation.navigate("QuizFruits")}>
        <Image style={{height: 180, width: 300}} source={require('../assets/Fruit.png')} />
      </TouchableHighlight>
      <View style={{ padding: 10 }}></View>
      <View style={{ padding: 2 }}></View>
      <TouchableHighlight style={styles.boxChoice} onPress={() => navigation.navigate("QuizAnimals")}>
        <Image style={{height: 200, width: 300}} source={require('../assets/Animals.png')} />
      </TouchableHighlight>
      <View style={{ padding: 10 }}></View>
      <View style={{ padding: 2 }}></View>
      <TouchableHighlight style={styles.boxChoice} onPress={() => navigation.navigate("QuizFamily")}>
        <Image style={{height: 180, width: 270}} source={require('../assets/family.png')} />
      </TouchableHighlight>
      <View style={{ padding: 10 }}></View>
      <View style={{ padding: 2 }}></View>
      <TouchableHighlight style={styles.boxChoice} onPress={() => navigation.navigate("QuizTransportation")}>
        <Image style={{height: 170, width: 270}} source={require('../assets/transport.png')} />
      </TouchableHighlight>
      <View style={{ padding: 10 }}></View>
    </View>
  );
};


export default PickQuestionsScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '',
    alignItems: 'center'
  },
  boxChoice: {
    //shadowColor: 'black',
    //shadowOpacity: 0.26,
    //shadowOffset: { width: 0, height: 2},
    //shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: 350,
    height: 250, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  textChoice: {
    textDecorationLine: 'overline underline',
  }
});