import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import tw from "twrnc";
import { Image } from "react-native-web";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const DishRow = ({ id, name, short_description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        style={tw`bg-white border p-4 border-gray-200`}
      >
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-2`}>
            <Text style={tw`text-lg mb-1`}>{name}</Text>
            <Text style={tw`text-gray-400`}>{short_description}</Text>
            <Text style={tw`text-gray-400 mt-2`}>
              <NumericFormat displayType="text" value={price} prefix="$" />
            </Text>
          </View>

          <View>
            <Image
              key={id}
              style={tw`w-20 h-20 p-4 bg-white rounded-full border border-[#06d6a0]`}
              source={{
                uri: urlFor(image).url(),
              }}
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View style={tw`bg-white px-4`}>
          <View style={tw`flex-row items-center px-2 py-2 pb-3`}>
            <TouchableOpacity>
              <MinusCircleIcon color="#06d6a0" size={35} />
            </TouchableOpacity>

            <Text style={tw`px-2`}>0</Text>

            <TouchableOpacity>
              <PlusCircleIcon color="#06d6a0" size={35} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
