import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* <CategoriesCard /> */}
      <CategoriesCard
        imgUrl="https://images.unsplash.com/photo-1615887087343-6a32f45f27a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        title="test img 1"
      />
      <CategoriesCard
        imgUrl="https://images.unsplash.com/photo-1615887087343-6a32f45f27a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        title="test img 2"
      />
      <CategoriesCard
        imgUrl="https://images.unsplash.com/photo-1615887087343-6a32f45f27a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        title="test img 3"
      />
    </ScrollView>
  );
};

export default Categories;
