import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Animated, Image } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native"; 
import colors from "../constants/colors";

const Home = () => {
  const navigation = useNavigation();
  const bounceAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -10, 
          duration: 500,
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

  const navigateToAbout = () => {
    navigation.navigate('About'); 
  };


  const navigateToHome = () => {
    navigation.navigate('Home'); 
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingTop: 10,
        backgroundColor: colors.bg,
      }}
    >

      <Animated.Image
        source={require("../assets/pawpaw.png")}
        style={{
          alignSelf: "flex-end",
          marginRight: 20,
          transform: [{ translateY: bounceAnim }],
        }}
      />

      <Text style={{ fontSize: 65, fontFamily: 'PoetSen', color: colors.text }}>
        Feeding
      </Text>
      <Text
        style={{
          fontSize: 48,
          fontFamily: 'PoetSen',
          color: colors.bg,
          backgroundColor: colors.punkan,
        }}
      >
        Time?
      </Text>

      <Image
        source={require("../assets/catsye.png")}
        style={{
          alignSelf: "center",
          justifySelf: "center",
          top: 20,
          width: 308,
          height: 190,
        }}
      />

      <View
        style={{
          flex: 2,
          width: "100%",
          padding: 12,
          gap: 10,
          height: "auto",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 50,
          backgroundColor: colors.bg,
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: colors.punkan,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            width: "90%",
            height: 80,
            paddingHorizontal: 10,
          }}
          onPress={() => alert("Button Pressed")}
        >
          <Text style={{ color: colors.bg, fontSize: 24, fontWeight: "900" }}>
            FEED
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: colors.bg,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            width: "90%",
            height: 80,
            paddingHorizontal: 10,
            backgroundColor: colors.text,
          }}
          onPress={() => alert("Button Pressed")}
        >
          <Text style={{ color: colors.bg, fontSize: 24, fontWeight: "900" }}>
            STOP
          </Text>
        </TouchableOpacity>

        <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: 120,
                bottom: -20,
                top: 50,
                paddingHorizontal: 30,
              }}
                >           
              {/* About Us Button */}
              <TouchableOpacity
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 50,
                  height: 70,
                }}
                onPress={() => navigation.navigate('about')}
              >
                <Image
                  source={require("../assets/aboutBtn.png")}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "contain", 
                  }}
             />
             <Text
               style={{
                 color: colors.punkan,
                 fontSize: 12,
                 fontWeight: "900",
                 marginTop: 5,
                 textAlign: "center",
               }}
             >
               About
             </Text>
           </TouchableOpacity>
             
           {/* Home Button */}
           <TouchableOpacity
             style={{
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center", 
               width: 50,
               height: 70, 
             }}
             onPress={() => navigation.navigate('home')}
           >
             <Image
               source={require("../assets/homebtn.png")}
               style={{
                 width: 30, 
                 height: 30,
                 resizeMode: "contain", 
               }}
             />
             <Text
               style={{
                 color: colors.text,
                 fontSize: 12,
                 fontWeight: "900",
                 marginTop: 5,
                 textAlign: "center", 
               }}
             >
               Home
             </Text>
           </TouchableOpacity>
             
           {/* Log Out Button */}
           <TouchableOpacity
             style={{
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center", 
               width: 50,
               height: 70, 
             }}
             onPress={() => console.log('Log Out pressed')} 
           >
             <Image
               source={require("../assets/Logout.png")}
               style={{
                 width: 30, 
                 height: 30,
                 resizeMode: "contain", 
               }}
             />
             <Text
               style={{
                 color: colors.punkan,
                 fontSize: 12,
                 fontWeight: "900",
                 marginTop: 5,
                 textAlign: "center", 
               }}
             >
               Log Out
             </Text>
           </TouchableOpacity>
             
        </View>
      </View>
    </View>
  );
};

export default Home;
