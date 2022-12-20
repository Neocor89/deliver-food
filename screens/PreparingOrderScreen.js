import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);

  return (
    <View style={tw`bg-[#06d6a0] flex-1 justify-center items-center`}>
      <Animatable.Image
        source={require("../assets/deliverfood-preparingOrder.gif")}
        animation="slideInUp"
        iterationCount={1}
        style={tw`h-90 w-90 rounded-[8px]`}
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        style={tw`text-lg my-10 text-white font-bold text-center`}
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Bar indeterminate={true} width={180} color="white" />
      {/* <Text>PreparingOrderScreen</Text> */}
    </View>
  );
};

export default PreparingOrderScreen;
