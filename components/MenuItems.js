import * as React from "react";
import { Text, View, StyleSheet, FlatList, SectionList } from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
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
