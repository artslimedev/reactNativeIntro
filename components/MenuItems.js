import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const menuItemsToDisplay = [
  { name: "Hummus", price: "$5.00", id: "1A" },
  { name: "Moutabal", price: "$5.00", id: "2B" },
  { name: "Falafel", price: "$7.50", id: "3C" },
  { name: "Marinated Olives", price: "$5.00", id: "4D" },
  { name: "Kofta", price: "$5.00", id: "5E" },
  { name: "Eggplant Salad", price: "$8.50", id: "6F" },
  { name: "Lentil Burger", price: "$10.00", id: "7G" },
  { name: "Smoked Salmon", price: "$14.00", id: "8H" },
  { name: "Kofta Burger", price: "$11.00", id: "9I" },
  { name: "Turkish Kebab", price: "$15.50", id: "10J" },
  { name: "Fries", price: "$3.00", id: "11K" },
  { name: "Buttered Rice", price: "$3.00", id: "12L" },
  { name: "Bread Sticks", price: "$3.00", id: "13M" },
  { name: "Pita Pocket", price: "$3.00", id: "14N" },
  { name: "Lentil Soup", price: "$3.75", id: "15O" },
  { name: "Greek Salad", price: "$6.00", id: "16Q" },
  { name: "Rice Pilaf", price: "$4.00", id: "17R" },
  { name: "Baklava", price: "$3.00", id: "18S" },
  { name: "Tartufo", price: "$3.00", id: "19T" },
  { name: "Tiramisu", price: "$5.00", id: "20U" },
  { name: "Panna Cotta", price: "$5.00", id: "21V" },
];

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
  return (
    <View style={menuStyles.menuContainer}>
      <FlatList
        data={menuItemsToDisplay}
        renderItem={renderItem}
        indicatorStyle="black"
      />
    </View>
  );
};

const menuStyles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: "#EE9972",
  },
  menuTitle: {
    fontSize: 29,
    color: "333333",
    textAlign: "center",
  },
  menuItem: {
    backgroundColor: "#333333",
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
    color: "white",
    textAlign: "center",
  },
});

export default MenuItems;
