import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from "./components/productlist";
import AddProduct from './components/addproduct';
import ProductDetail from './components/productdetail';
import UpdateProduct from './components/updateproduct';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductList} />
        <Stack.Screen name="Add Product" component={AddProduct} />
        <Stack.Screen name="Product Detail" component={ProductDetail} />
        <Stack.Screen name="Update Product" component={UpdateProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
