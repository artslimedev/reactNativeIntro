import * as React from "react";
import { Text, View, StyleSheet, FlatList, SectionList } from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Gyoza", price: "$5.00" },
      { name: "Crab Rangoons", price: "$5.00" },
      { name: "Sushi", price: "$7.50" },
      { name: "Calamari", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Salmon Bowl", price: "$10.00" },
      { name: "Thai Fried Rice", price: "$14.00" },
      { name: "Yakisoba", price: "$11.00" },
      { name: "Crispy Chicken", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Sesame Sauce", price: "$3.00" },
      { name: "White Rice", price: "$3.00" },
      { name: "Steamed Broccoli", price: "$3.00" },
      { name: "Spicy Chilli Sauce", price: "$3.75" },
      { name: "Sushi", price: "$6.00" },
      { name: "Miso", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Matcha Ice Crea", price: "$3.00" },
      { name: "Tempura Cheesecake", price: "$3.00" },
      { name: "Tempura Ice Crea", price: "$5.00" },
      { name: "Fruits", price: "$5.00" },
    ],
  },
];

const seperator = () => {
  return (
    <View style={{ height: 1, width: "100%", backgroundColor: "black" }} />
  );
};

const MenuItem = ({ name, price }) => {
  return (
    <View style={menuStyles.menuItem}>
      <Text style={menuStyles.menuItemText}>{name}</Text>
      <Text style={menuStyles.menuItemText}>{price}</Text>
    </View>
  );
};

const MenuItems = () => {
  const renderItem = ({ item }) => {
    return (
      <MenuItem
        name={item.name}
        price={item.price}
        keyExtractor={(item) => item.id}
      />
    );
  };
  const renderSectionHeader = ({ section: { title } }) => {
    return <Text style={menuStyles.sectionHeader}>{title}</Text>;
  };
  return (
    <View style={menuStyles.menuContainer}>
      {/* <FlatList
        data={menuItemsToDisplay}
        renderItem={renderItem}
        indicatorStyle="black"
      /> */}
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

const menuStyles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: "#FDD69B",
  },
  menuTitle: {
    fontSize: 29,
    color: "333333",
    textAlign: "center",
  },
  sectionHeader: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 20,
    backgroundColor: "#FDD69B",
    color: "black",
    textAlign: "center",
  },
  menuItem: {
    backgroundColor: "rgba(255, 255, 255, .6)",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  menuItemText: {
    fontSize: 18,
    padding: 20,
    marginVertical: 8,
    color: "black",
    textAlign: "center",
  },
});

export default MenuItems;
