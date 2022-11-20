import { LogBox, TouchableOpacity } from "react-native";
import { View, Text, ScrollView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import tw from "twrnc";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  StarIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";

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
    navigation.setOptions({
      headerShow: false,
    });
  }, []);

  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  return (
    <ScrollView>
      <View>
        <Image
          key={id}
          style={tw`w-full h-56 bg-gray-300 p-4`}
          source={{
            uri: urlFor(imgUrl).url(),
          }}
        />
      </View>

      <View style={tw`bg-white`}>
        <View style={tw`px-4 pt-4`}>
          <Text style={tw`text-3xl font-bold`}>{title}</Text>
          <View style={tw`flex-row px-2 my-1`}>
            <View style={tw`flex-row items-center px-1`}>
              <StarIcon color="#06d6a0" opacity={0.5} size={20} />
              <Text style={tw`text-xs text-gray-500`}>
                <Text style={tw`text-green-500`}>{rating}</Text> . {genre}
              </Text>
            </View>

            <View style={tw`flex-row items-center px-1`}>
              <MagnifyingGlassIcon color="gray" opacity={0.6} size={20} />
              <Text style={tw`text-xs text-gray-500`}>Nearby . {address}</Text>
            </View>
          </View>
          <Text style={tw`text-gray-500 pb-4 px-4`}>{short_description}</Text>
        </View>

        <TouchableOpacity
          style={tw`flex-row items-center px-2 p-4 border border-gray-300`}
        >
          <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
          <Text style={tw`pl-2 flex-1 font-bold`}>Have a food allergy?</Text>
          <ChevronRightIcon color="#06d6a0" size={20} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={tw`px-4 pt-6 mb-3 font-bold text-xl`}>Menu</Text>

        {dishes.map((dish, index) => (
          <div key={index}>
            <DishRow
              id={dish.id}
              name={dish.name}
              short_description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          </div>
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
