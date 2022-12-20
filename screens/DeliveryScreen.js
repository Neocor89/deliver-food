import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import tw from "twrnc";
import { XMarkIcon } from "react-native-heroicons/solid";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View style={tw`bg-[#06d6a0] flex-1`}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Basket")}>
          <XMarkIcon color="white" size={30} />
        </TouchableOpacity>
      </View>

      <Text>Order Help</Text>
    </View>
  );
};

export default DeliveryScreen;
