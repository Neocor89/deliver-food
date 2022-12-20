import { View, Text, TouchableOpacity, Image } from "react-native";
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
      <View style={tw`flex-row justify-between items-center p-5`}>
        <TouchableOpacity onPress={() => navigation.navigate("Basket")}>
          <XMarkIcon color="white" size={30} />
        </TouchableOpacity>
        <Text style={tw`font-light text-white text-lg`}>Order Help</Text>
      </View>

      <View style={tw`bg-white mx-5 my-2 rounded-md p-4 z-50 shadow-md`}>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-lg text-gray-400`}>Estimed Arrival</Text>
          <Text style={tw`text-2xl font-bold`}>45-55 Minutes</Text>
          <Image
            source={{
              uri: "https://cdn.dribbble.com/users/2698916/screenshots/13934288/delivery_concept_illustration._delivery_by_scooter_concept_illustration-01_4x.jpg",
            }}
            style={tw`h-20 w-20 rounded-lg`}
          />
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
