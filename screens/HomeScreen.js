import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShow: false,
    });
  }, []);
  //: style={tw``}
  return (
    <SafeAreaView style={tw`bg-white pt-5`}>
      <Text style={tw`px-3`}>
        {/* Header */}
        <View style={tw`flex-row pb-3 items-center mx-auto w-full`}>
          <Image
            style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`}
            source={{
              uri: "https://tse3.mm.bing.net/th?id=OIP.co9InwNa4s3sK7rOKcelVAAAAA&pid=Api&P=0",
            }}
          />
          <View style={tw`flex-1 pl-1`}>
            <Text style={tw`font-bold text-gray-400 text-xs`}>
              Deliver Now!
            </Text>
            <Text style={tw`font-bold text-xl`}>
              Current Location
              <ChevronDownIcon size={20} color="#06d6a0" />
            </Text>
          </View>
          <UserIcon size={30} color="#06d6a0" />
        </View>

        {/* SearchBar style={tw`input`} */}
        <View style={tw`flex-row items-center w-full pb-2 mx-auto`}>
          <View style={tw`flex-row flex-1 mx-auto bg-gray-200 p-3`}>
            <MagnifyingGlassIcon size={20} color="gray" />
            <TextInput
              style={{ outline: "none", color: "#adb5bd" }}
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#06d6a0" />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
