import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, Button } from 'react-native';
import { Card } from 'react-native-elements';
import axios from "axios";

export default function ProductDetail({ route, navigation }) {

    const { item } = route.params

    const [imageURL, setImageURL] = useState("")
    const [name, setName] = useState("")
    const [category, setCategory] = useState("Mobiles")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [product, setProduct] = useState([])

    useEffect(() => {
        setImageURL(item.imageURL)
        setName(item.name)
        setCategory(item.category)
        setPrice(item.price)
        setStock(item.stock)
        setProduct(item)
    })

    const deleteProduct = () => {
        console.log("Delete product with received id: " + item.id)
        axios.delete("http://localhost:3000/products/" + item.id)
            .then(response => {
                console.log(response.data);
                navigation.push("Home")
            }, error => { console.log(error);})
    }

    return (
        <View style={{backgroundColor:'lightgrey'}}>
            <Card >
                <Image
                    source={{ uri: imageURL }}
                    style={{ width: 200, height: 200,alignSelf:'center' }}
                />
                <Text style={{alignSelf:'center',backgroundColor:'wheat'}}>Product Name: {name}</Text>
                <Text style={{alignSelf:'center',backgroundColor:'wheat'}}>Category: {category}</Text>
                <Text style={{alignSelf:'center',backgroundColor:'wheat'}}>Price: {price}</Text>
                <Text style={{alignSelf:'center',backgroundColor:'wheat'}}>Stock: {stock}</Text>
                <View style={{width:200,alignSelf:'center'}}>
                <Button 
                color = "green"
                style={{alignSelf:'center'}}
                    title="Update"
                    onPress={()=>navigation.navigate("Update Product",{items:product})}
                ></Button>
                </View>
                 <View style={{width:200,alignSelf:'center'}}>               
                  <Button
                color = "red"
                style={{alignSelf:'center'}}
                    title="Delete"
                    onPress={deleteProduct}
                ></Button>
                </View>

            </Card>



        </View>
    )
}