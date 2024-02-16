import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../Constants/CONSTANTS";

const MyButton = ({
  Title,
  Color,
  BacgroundColor,
  hight,
  width,
  BorderColor,
  CallBack
}: {
  Title: string;
  BacgroundColor?: string;
  hight?: number;
  width: number;
  BorderColor?: string;
  Color?:string,
  CallBack:()=>void
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        CallBack()
      }}
    >
      <View
        style={{
          backgroundColor: BacgroundColor?BacgroundColor:COLORS.Blue,
          width: width,
          height: hight?hight:45,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          borderWidth:BorderColor?1:0,
          borderBlockColor:BorderColor?BorderColor:'transparent'
        }}
      >
        <Text
          style={{
            color:Color?Color:'white',
          }}
        >
   {Title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;
