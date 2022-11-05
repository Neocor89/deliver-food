import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const CategoriesCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity style={tw`relative mr-2`}>
      <Image
        style={tw`h-20 w-20 rounded`}
        source={{
          uri: imgUrl,
        }}
      />
      <Text style={tw`absolute left-1 bottom-1 text-white font-bold`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
