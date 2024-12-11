import {Image,Text,TextInput,TouchableOpacity,View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native"; 
import colors from "../constants/colors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
      <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', padding: 0, right: -40, top: 40 }}>
        <Text style={{ fontSize: 24, color: colors.text, fontWeight: '900' }}>Hello,</Text>
        <Text style={{ fontSize: 24, color: colors.text, marginBottom: 20, fontWeight: '900' }}>
          Welcome To Pet Feeder
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: "center",
          alignItems: "center",
          bottom: 130,
        }}
      >
        <Image
          source={require("../assets/cat.png")}
          style={{
            width: 230,
            height: 150,
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
              color: colors.punkan,
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

        {/* Login Button */}
        <TouchableOpacity
          style={{
            backgroundColor: colors.punkan,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            width: "100%",
            height: 90,
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate('home')}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: '900', color: colors.bg }}>
            Log In
          </Text>
        </TouchableOpacity>

        <Text style={{ color: "white", fontSize: 20, fontWeight: '900', color: colors.text, left: -30 }}>
          First time here?
        </Text>

        {/* Register Button (wrap in TouchableOpacity) */}
        <TouchableOpacity
          style={{ position: 'absolute', bottom: -1, right: 61 }} 
          onPress={() => navigation.navigate('signup')} 
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: '900', color: colors.punkan }}>
            Register
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Login;
