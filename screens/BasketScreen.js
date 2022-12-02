import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { urlFor } from "../sanity";
import { NumericFormat } from "react-number-format";

const BasketScreen = () => {
  //: Acess to store state
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
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
    <SafeAreaView style={tw`flex-1 bg-white mt-3`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <View style={tw`border-[#06d6a0] shadow-sm`}>
          <View>
            <Text style={tw`text-center text-gray-500 font-medium mb-3`}>
              {restaurant.title}
            </Text>
          </View>

          <View style={tw`flex-row items-center px-4 py-3 bg-white`}>
            <Image
              style={tw`h-7 w-7 bg-gray-300 p-3 rounded-full`}
              source={{
                uri: "https://tse3.mm.bing.net/th?id=OIP.co9InwNa4s3sK7rOKcelVAAAAA&pid=Api&P=0",
              }}
            />
            <Text style={tw`flex-1 text-xs ml-2`}>Delivery in 50-75 min</Text>
            <TouchableOpacity>
              <Text style={tw`text-[#06d6a0]`}>Change</Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            {Object.entries(groupedItemsInBasket).map(([index, items]) => (
              <View
                key={index}
                style={tw`flex-row items-center mt-2 px-4 py-3 bg-white`}
              >
                <Text style={tw`px-1`}>{items.length} x</Text>
                <Image
                  style={tw`h-12 w-12 rounded-full`}
                  source={{ uri: urlFor(items[0]?.image).url() }}
                />
                <Text style={tw`flex-1 px-2 text-[13px]`}>
                  {items[0]?.name}
                </Text>

                <Text style={tw`flex-1`}>
                  <NumericFormat
                    key={index}
                    displayType="text"
                    decimalScale={2}
                    value={items[0]?.price}
                    prefix="$"
                  />
                </Text>

                <TouchableOpacity>
                  <Text
                    style={tw`text-[#06d6a0] text-xs`}
                    onPress={() => dispatch(removeFromBasket({ id: index }))}
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          <View style={tw`p-5 bg-white mt-5 px-4`}>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-gray-400 mb-2`}>Subtotal</Text>
              <Text style={tw`text-gray-400`}>
                <NumericFormat
                  displayType="text"
                  decimalScale={2}
                  value={basketTotal}
                  prefix="$"
                />
              </Text>
            </View>

            <View style={tw`flex-row justify-between mb-2`}>
              <Text style={tw`text-gray-400`}>Delivery fee</Text>
              <Text style={tw`text-gray-400`}>
                <NumericFormat displayType="text" value={5.99} prefix="$" />
              </Text>
            </View>

            <View style={tw`flex-row justify-between`}>
              <Text>Order Total</Text>
              <Text style={tw`font-extrabold`}>
                <NumericFormat
                  displayType="text"
                  decimalScale={2}
                  value={basketTotal + 5.99}
                  prefix="$"
                />
              </Text>
            </View>
          </View>

          <TouchableOpacity style={tw`m-4 rounded-lg bg-[#06d6a0] p-3`}>
            <Text style={tw`text-white text-center text-lg font-bold`}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
