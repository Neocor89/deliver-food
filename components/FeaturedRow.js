import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import tw from "twrnc";
import RestaurantCard from "./RestaurantCard";
import sanityClient, { urlFor } from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == 'featured' && _id == $id]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type-> {
              name
            }
          },
        }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, [id]);

  console.log(restaurants);

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
        {restaurants?.map((restaurant, index) => (
          <div key={index}>
            <RestaurantCard
              id={restaurant.id}
              imgUrl={restaurant.image}
              address={restaurant.address}
              title={restaurant.name}
              dishes={restaurant.dishes}
              rating={restaurant.rating}
              short_description={restaurant.short_description}
              genre={restaurant.type?.name}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          </div>
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
