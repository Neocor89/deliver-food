import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NumericFormat } from "react-number-format";
import tw from "twrnc";

const DishRow = ({ id, name, short_description, price, image }) => {
  /*
  : Libraries React Format Number added 
  : For convert price number to string format
  */

  return (
    <TouchableOpacity>
      <View>
        <Text style={tw`text-lg mb-1`}>{name}</Text>
        <Text style={tw`text-gray-400`}>{short_description}</Text>
        <Text style={tw`text-gray-400`}>
          {/* <CurrencyFormat quantity={price} currency="GBP" /> */}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
