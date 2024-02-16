import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const IgAvatar = ({IgBorder,IsLive}:{IgBorder?:boolean, IsLive?:boolean}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 80,
          height: 80,
        }}
      >
       {

        IsLive?
        <LinearGradient
        // Background Linear Gradient
        colors={["#C90281", "#DF053E"]}
        style={{
          width: 45,
          height: 25,
          borderRadius: 5,

          position: "absolute",
          zIndex: 3,
          bottom: -1,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 3,
          borderColor: "white",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 12,
          }}
        >
          Live
        </Text>
      </LinearGradient>
      :
      null
       }

      {

        IgBorder?
        <Image
        resizeMode="contain"
        source={require("../assets/igAssets/IgBorder.png")}
        style={{
          width: 70,
          height: 70,
          position: "absolute",
        }}
      />
      :
      null
      }

        <Image
          source={{
            uri: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderWidth: 1,
          }}
        />
      </View>

      <Text>Matthew</Text>
    </View>
  );
};

export default IgAvatar;
