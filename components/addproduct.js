import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Picker, Button } from 'react-native';
import axios from 'axios';

export default function AddProduct({navigation}) {
    const [imageURL, setImageURL] = useState("")
    const [name, setName] = useState("")
    const [category, setCategory] = useState("Mobiles")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)

        const submit = () => {
            let productBody = {
                "imageURL": imageURL,
                "name": name,
                "category": category,
                "price": price,
                "stock": stock
            }
            axios.post("http://localhost:3000/products", productBody)
                .then(response => {
                    console.log(response)
                    console.log("Done")
                    navigation.push("Home")
                }, error => {
                    console.log(error)
                })
        }

        return (
            <View>
                <Text>Add Image:</Text>
                <TextInput
                 style={{
                    backgroundColor:'lightblue',
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 0.5
                }}
                    placeholder="Enter image url"
                    onChangeText={(text) => setImageURL(text)}
                ></TextInput>
                <Text> Name:</Text>
                <TextInput
                 style={{
                    backgroundColor:'lightblue',
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 0.5
                }}
                    placeholder="Product Name"
                    onChangeText={(text) => setName(text)}
                ></TextInput>
              
                <Text>Product Category:</Text>
                <Picker
                 style={{
                    backgroundColor:'lightblue',
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 0.5
                }}
                    selectedValue={category}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                >
                    <Picker.Item label="Electronics" value="Electronics" />
                    <Picker.Item label="Clothing" value="Clothing" />
                    <Picker.Item label="stationary" value="stationary" />
                </Picker>
                <Text>Price:</Text>
                <TextInput
                 style={{
                    backgroundColor:'lightblue',
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 0.5
                }}
                    placeholder="Price"
                    keyboardType='number-pad'
                    onChangeText={(text) => setPrice(text)}
                ></TextInput>
                <Text>Stock:</Text>
                <TextInput
                 style={{
                    backgroundColor:'lightblue',
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 0.5
                }}
                    placeholder="Stock"
                    keyboardType='number-pad'
                    onChangeText={(text) => setStock(text)}
                ></TextInput>
                 <View style={{width:200}}>
                <Button
                style={{paddingVertical:25,paddingHorizontal:25}}
                 color = "green"
                    title="Add"
                    onPress={submit}
                ></Button>
                </View>
            </View>
        )
    }