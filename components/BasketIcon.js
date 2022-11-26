import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { NumericFormat } from "react-number-format";
import tw from "twrnc";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  //TODO : >> Continuation of the creation of the cart features and the layout

  return (
    <View style={tw`absolute bottom-10 w-full z-50 mx-auto`}>
      <TouchableOpacity
        style={tw`mx-5 bg-[#06d6a0] p-4 rounded-lg flex-row items-center px-3 py-3 ml-2`}
      >
        <Text style={tw`text-white font-extrabold text-lg bg-[#0EB88C] px-2`}>
          {items.length}
        </Text>
        <Text style={tw`text-[16px] font-medium`}>View Basket</Text>
        <Text style={tw`text-lg text-white font-extrabold ml-2`}>
          <NumericFormat displayType="text" value={basketTotal} prefix="$" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
