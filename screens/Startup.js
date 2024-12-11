// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import { auth } from "../firebase";
// import colors from "../constants/colors";

// const Startup = () => {
//   const navigation = useNavigation(); 

//   return (
//     <View style={{ flex: 1, color: "#EEEEEE" }}>
//       {/* Position the background image absolutely to fill the screen */}
//       <Image
//         source={require("../assets/mainBg.png")}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           width: "100%",
//           height: "50%",
//         }}
//       />
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text style={{ fontSize: 24, color: "#000000", top: 200 }}>
//           FEED YOUR PET!
//         </Text>
//       </View>

//       <View
//         style={{
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           padding: 0,
//           margin: 0,
//           top: -50,
//         }}
//       >
//         <Image
//           source={require("../assets/dogLogo.png")}
//           style={{
//             width: 150,
//             height: 150,
//             marginTop: 20,
//           }}
//         />
//       </View>

//       <View
//         style={{
//           width: "100%",
//           position: "absolute",
//           bottom: 60,
//           alignItems: "center",
//         }}
//       >
//         <TouchableOpacity
//           style={{
//             backgroundColor: "#9a7e6f",
//             height: 50,
//             justifyContent: "center",
//             alignItems: "center",
//             borderRadius: 10,
//             width: "80%",
//             flexDirection: "row",
//             paddingLeft: 20,
//           }}
//           onPress={() => navigation.navigate("landing")}
//         >
//           <Image
//             source={require("../assets/forward.png")}
//             style={{
//               width: 20,
//               height: 20,
//               right: 40,
//             }}
//           />
//           <Text style={{ color: "white", fontSize: 18 }}>Get Started</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Startup;
