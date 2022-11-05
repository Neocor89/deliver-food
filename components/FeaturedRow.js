import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import tw from "twrnc";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-3`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <ArrowRightIcon color="#06d6a0" />
      </View>

      <Text style={tw`text-xs text-gray-500 px-3`}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        showsHorizontalScrollIndicator={false}
        style={tw`pt-4`}
      >
        {/* THIS ERROR IS HERE  */}
        <RestaurantCard
          id={id}
          imgUrl="https://res.cloudinary.com/dwoifuutn/image/upload/v1666282176/cld-sample-4.jpg"
          title="Go! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          short_description="This is a good restaurants"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={id}
          imgUrl="https://res.cloudinary.com/dwoifuutn/image/upload/v1666282176/cld-sample-4.jpg"
          title="Go! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          short_description="This is a good restaurants"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={id}
          imgUrl="https://res.cloudinary.com/dwoifuutn/image/upload/v1666282176/cld-sample-4.jpg"
          title="Go! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          short_description="This is a good restaurants"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
