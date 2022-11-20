import { View, Text, ScrollView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import tw from "twrnc";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
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
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({});
  }, []);

  return (
    <ScrollView>
      <View>
        <Image
          key={id}
          style={tw`w-full h-56 bg-gray-300 p-4`}
          source={{
            uri: urlFor(imgUrl),
          }}
        />
        <Text style={tw`w-full bg-gray-200 p-1`}>{title}</Text>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;