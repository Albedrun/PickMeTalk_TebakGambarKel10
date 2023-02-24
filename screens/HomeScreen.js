import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/pickmetalk.png')}  style={styles.image}>
      <View> </View>
      
      <View style={{ padding: 10, height: 870 }}>
        
      </View>

      <Pressable
      onPress={() => navigation.navigate("PickQuestions")}
        style={{
          backgroundColor: "#FF725E",
          padding: 14,
          width:120,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      >
        <Text style={{color:"white",fontWeight:"600",textAlign:"center",}}>START</Text>
      </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: '',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '',
    alignItems: 'center'
  },
});
