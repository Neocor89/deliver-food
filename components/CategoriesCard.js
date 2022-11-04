import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const CategoriesCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <Image
        style={tw`h-10 w-10`}
        source={{
          uri: imgUrl,
        }}
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
