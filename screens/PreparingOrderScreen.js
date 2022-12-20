import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import * as Animatable from "react-native-animatable";

const PreparingOrderScreen = () => {
  return (
    <View style={tw`bg-[#06d6a0] flex-1 justify-center items-center`}>
      <Animatable.Image
        source={require("../assets/deliverfood-preparingOrder.gif")}
        animation="slideInUp"
        iterationCount={1}
        style={tw`h-90 w-90 rounded-[8px]`}
      />
      {/* <Text>PreparingOrderScreen</Text> */}
    </View>
  );
};

export default PreparingOrderScreen;
