import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* <CategoriesCard /> */}
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="test img 1"
      />
      <CategoriesCard
        imgUrl="https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        title="Pizza"
      />
      <CategoriesCard
        imgUrl="https://images.unsplash.com/photo-1615887087343-6a32f45f27a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        title="Thai"
      />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="Sushi" />
      <CategoriesCard
        imgUrl="https://images.unsplash.com/photo-1615887087343-6a32f45f27a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        title="Asian"
      />
      <CategoriesCard
        imgUrl="https://images.unsplash.com/photo-1615887087343-6a32f45f27a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        title="test img 3"
      />
      <CategoriesCard
        imgUrl="https://images.unsplash.com/photo-1615887087343-6a32f45f27a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        title="test img 3"
      />
    </ScrollView>
  );
};

export default Categories;
