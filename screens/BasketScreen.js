import { View, Text, SafeAreaView } from "react-native";
import tw from "twrnc";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { selectBasketItems } from "../features/basketSlice";

const BasketScreen = () => {
  const navigation = useNavigation();
  //: Acess to store state
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  console.log(groupedItemsInBasket);

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <View style={tw`p-5 border-[#06d6a0] shadow-sm`}>
          <View>
            <Text style={tw`text-center text-gray-500`}>
              {restaurant.title}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
