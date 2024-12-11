import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated, Easing, Image,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../constants/colors";

const Landing = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current; 
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -4, 
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0, 
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [bounceAnim]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingTop: 60,
        backgroundColor: colors.bg,
      }}
    >
      <View style = {{ flexDirection: 'col', width: '100%', height: 100, justifyContent: 'center', alignItems: 'center', }}>
      
      <Animated.Image
        source={require("../assets/pawpaw.png")}
        style={{
          width: 40,
          height: 40,
          transform: [{ translateY: bounceAnim }],
          top: 40,
          right: 70

        }}
      />

      <Text style={{ fontFamily: 'SixtyFour',fontSize: 40, color: colors.text,}}>P WFECT</Text>
      <Text style={{ fontFamily: 'SixtyFour',fontSize: 40, color: colors.text,}}>FEEDER</Text>
      <Text style={{ fontSize: 12, fontWeight: 900, color: colors.text}}>
        Pet feeder for dog and cats only
      </Text>
      </View>
    

     
        <View style = {{position: 'absolute', width: '100%', height: 120, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', bottom: 267 }}>
        <Image
          source={require("../assets/cat.png")}
          style={{
            width: 150,
            height: 100,
            marginLeft: 20,
          }}
        />

        <Image
          source={require("../assets/dog.png")}
          style={{
            width: 150,
            height: 100,
            marginRight: 20,
          }}
        />
      </View>


      <View
        style={{
          flex: 1,
          width: "90%",
          height: 156,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 123,
          backgroundColor: colors.bg,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: colors.punkan
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: colors.punkan,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            width: "90%",
            height: 80,
            paddingHorizontal: 10,
            
          }}
          onPress={() => navigation.navigate("login")}
        >
          <Image
            source={require("../assets/Vectors.png")}
            style={{
              width: 50,
              height: 50,
              right: 30,
            }}
          />
          <Text style={{ color: colors.bg, fontSize: 24, fontWeight: 900 }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Landing;
