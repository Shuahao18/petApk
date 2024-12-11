import {Image,Text,TextInput,TouchableOpacity, View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native"; 
import colors from "../constants/colors";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPass, setConfirm] = useState("");
  
  // Initialize navigation
  const navigation = useNavigation(); 

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 60,
        backgroundColor: colors.bg,
      }}
    >
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 0,
          right: -40,
          top: 40
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: '900', color: colors.text }}>
          Furry parents,
        </Text>
        <Text style={{ fontSize: 24, fontWeight: '900', color: colors.text, marginBottom: 20 }}>
          Hurry up it's time to eat!
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          top: 252,
          width: '90%',
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          bottom: 140,
        
        }}
      >
        <Image
          source={require("../assets/dog.png")}
          style={{
            width: 230,
            height: 150,
            bottom: 30
          }}
        />
      </View>

      <View
        style={{
          flex: 2,
          width: "90%",
          position: "absolute",
          bottom: 80,
          borderRadius: 10,
          alignItems: "center",
          bottom: 20
        }}
      >
        {/* Email Input */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 67,
            width: "100%",
            borderRadius: 25,
            backgroundColor: colors.bg,
            borderWidth: 2,
            borderColor: colors.punkan,
            paddingHorizontal: 10,
            marginBottom: 20,
          }}
        >
          <Image
            source={require("../assets/Email.png")}
            style={{
              width: 34,
              height: 34,
              marginRight: 30,
              left: 10,
            }}
          />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{
              flex: 1,
              color: colors.primary,
              fontSize: 20,
            }}
            placeholder="Email"
            placeholderTextColor="#EB9477"
          />
        </View>

        {/* Password Input */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 67,
            width: "100%",
            borderRadius: 25,
            backgroundColor: colors.bg,
            borderWidth: 2,
            borderColor: colors.punkan,
            paddingHorizontal: 10,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={
                showPassword
                  ? require("../assets/padlock.png")
                  : require("../assets/padlock.png")
              }
              style={{
                width: 34,
                height: 34,
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{
              flex: 1,
              color: "#000000",
              fontSize: 20,
              marginLeft: 20,
            }}
            placeholder="Password"
            placeholderTextColor="#EB9477"
            secureTextEntry={!showPassword}
          />
        </View>

        {/* Confirm Password Input */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 67,
            width: "100%",
            borderRadius: 25,
            backgroundColor: colors.bg,
            borderWidth: 2,
            borderColor: colors.punkan,
            paddingHorizontal: 10,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={
                showPassword
                  ? require("../assets/padlock.png")
                  : require("../assets/padlock.png")
              }
              style={{
                width: 34,
                height: 34,
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
          <TextInput
            value={confirmPass}
            onChangeText={(text) => setConfirm(text)}
            style={{
              flex: 1,
              color: "#000000",
              fontSize: 20,
              marginLeft: 20,
            }}
            placeholder="Confirm password"
            placeholderTextColor="#EB9477"
            secureTextEntry={!showPassword}
          />
        </View>

        {/* Register Button */}
        <TouchableOpacity
          style={{
            backgroundColor: colors.punkan,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            width: "100%",
            height: 90,
            marginBottom: 10
          }}
          onPress={() => alert("Registration Successful!")}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: '900', color: colors.bg }}>
            REGISTER
          </Text>
        </TouchableOpacity>

        <Text style={{ color: "white", fontSize: 20, fontWeight: '900', color: colors.text, left: -30 }}>
          First time here?
        </Text>

        {/* Log In Button (wrap in TouchableOpacity) */}
        <TouchableOpacity
          style={{ top: -25, right: -60 }} // Adjust position to be clickable
          onPress={() => navigation.navigate('login')} // Navigate to Login screen
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: '900', color: colors.punkan }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
