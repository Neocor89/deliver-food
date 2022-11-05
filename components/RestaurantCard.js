import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity
      style={{
        background: "white",
        width: "min-content",
        marginRight: "0.75rem",
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
        marginBottom: "0.5rem",
      }}
    >
      <Image
        style={tw`h-36 w-64 rounded`}
        source={{
          uri: imgUrl,
        }}
      />

      <View style={tw`px-5 pb-4`}>
        <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
        <View style={tw`flex-row items-center`}>
          <StarIcon color="#06d6a0" opacity={0.5} size={22} />
          <Text style={tw`text-xs text-gray-500 mx-1`}>
            <Text style={tw`text-green-500 ml-1`}>{rating}</Text> . {genre}
          </Text>
        </View>

        <View style={tw`flex-row items-center`}>
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text style={tw`text-xs text-gray-500 mx-2`}>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
