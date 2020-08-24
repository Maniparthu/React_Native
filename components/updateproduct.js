import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Picker, Button } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements';

export default function UpdateProduct({ route, navigation }) {

    const { items } = route.params
    const [imageURL, setImageURL] = useState(items.imageURL)
    const [name, setName] = useState(items.name)
    const [category, setCategory] = useState(items.category)
    const [price, setPrice] = useState(items.price)
    const [stock, setStock] = useState(items.stock)

    const submit = () => {
        let productBody = {
            "imageURL": imageURL,
            "name": name,
            "category": category,
            "price": price,
            "stock": stock
        }
        axios.put("http://localhost:3000/products/" + items.id, productBody)
            .then(response => {
                console.log(response)
                console.log("Done")
                navigation.push("Home")
            }, error => {
                console.log(error)
            })
    }

    return (
        <View style={{backgroundColor:'lightblue'}}>
            <Card>
                <Text>product Image:</Text>
                <TextInput
                 style={{
                    backgroundColor:'lightblue',
                    height: 40,
                    borderColor: "lightblue",
                    borderWidth: 0.5
                }}
                    defaultValue={imageURL}
                    placeholder="Enter image url*"
                    onChangeText={(text) => setImageURL(text)}
                ></TextInput>
                <Text> Name:</Text>
                <TextInput
                 style={{
                    backgroundColor:'lightblue',
                    height: 40,
                    borderColor: "lightblue",
                    borderWidth: 0.5
                }}
                    placeholder="Product Name*"
                    defaultValue={name}
                    onChangeText={(text) => setName(text)}
                ></TextInput>
               <Text>Category:</Text>
                <Picker
                    defaultValue={category}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                >
                    <Picker.Item label="Electronics" value="Electronics" />
                    <Picker.Item label="Clothing" value="Clothing" />
                    <Picker.Item label="Stationary" value="Stationary" />
                </Picker>
                <Text>Price:</Text>
                <TextInput
                 style={{
                    backgroundColor:'lightblue',
                    height: 40,
                    borderColor: "lightblue",
                    borderWidth: 0.5
                }}
                    placeholder="Price*"
                    keyboardType='number-pad'
                    defaultValue={`${price}`}
                    onChangeText={(text) => setPrice(text)}
                ></TextInput>
                <Text>Stock:</Text>
                <TextInput
                 style={{
                    backgroundColor:'lightblue',
                    height: 40,
                    borderColor: "lightgrey",
                    borderWidth: 0.5
                }}
                    placeholder="Stock*"
                    keyboardType='number-pad'
                    defaultValue={`${stock}`}
                    onChangeText={(text) => setStock(text)}
                ></TextInput>
                <View style={{width:200}}>
                <Button
                    color = "green"
                    title="Update"
                    onPress={submit}
                ></Button>
                </View>
            </Card>
        </View>
    )
}