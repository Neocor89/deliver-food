import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import tw from "twrnc";
import { Image } from "react-native-web";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const DishRow = ({ id, name, short_description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, short_description, price, image }));
  };

  const removeItemsFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

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
            <Text style={tw`text-gray-600 mt-2`}>
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
            <TouchableOpacity key={id} onPress={removeItemsFromBasket}>
              <MinusCircleIcon
                disabled={!items.length}
                color={items.length > 0 ? "#06d6a0" : "gray"}
                size={35}
              />
            </TouchableOpacity>

            <Text style={tw`px-2`}>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon
                color={items.length > 0 ? "#06d6a0" : "gray"}
                size={35}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
