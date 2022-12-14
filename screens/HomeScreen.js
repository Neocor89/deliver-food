import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShow: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured"] {
          ...,
        restaurants[]->{
          ...,
          dishes[] ->
          }
        }
        `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  console.log(featuredCategories);

  return (
    <SafeAreaView style={tw`bg-white pt-5`}>
      {/* Header */}
      <View style={tw`flex-row pb-3 items-center mx-auto w-full px-2`}>
        <Image
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
          source={{
            uri: "https://tse3.mm.bing.net/th?id=OIP.co9InwNa4s3sK7rOKcelVAAAAA&pid=Api&P=0",
          }}
        />
        <View style={tw`flex-1 pl-1`}>
          <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
          <Text style={tw`font-bold text-xl`}>
            Current Location
            <ChevronDownIcon size={20} color="#06d6a0" />
          </Text>
        </View>
        <UserIcon size={30} color="#06d6a0" />
      </View>

      {/* SearchBar */}
      <View style={tw`flex-row items-center w-full pb-2 mx-auto px-2`}>
        <View style={tw`flex-row flex-1 mx-auto bg-gray-200 p-3`}>
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            style={{ outline: "none", color: "gray" }}
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#06d6a0" />
      </View>

      {/* Body Part */}

      <ScrollView
        style={tw`bg-gray-100`}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />

        {featuredCategories?.map((category) => (
          <div key={category._id}>
            <FeaturedRow
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          </div>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
