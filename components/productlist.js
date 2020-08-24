import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card } from 'react-native-elements';
import { ScrollView, TouchableOpacity, View, Text, Image, Button,TextInput } from "react-native";


export default function ProductList({ navigation }) {

    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(response => {
                console.log(response.data);
                setProducts(response.data)
                setFilter(response.data)
            }, error => {
                console.log(error);
            })
    }, [])
    function search(event) {
        let products = filter.filter((p) => {
            return (p.name.toLowerCase().includes(event.toLowerCase()))  
        })
        setProducts(products)
    }
    return (
           
        <View style={{backgroundColor:'lightblue'}}>
           <View style={{width:200,alignSelf:'center'}}>
            <Button
                 color = "purple"
                title="Add Product"
                onPress={() => navigation.navigate("Add Product", { item: products })}
            ></Button>
            </View>

            <ScrollView>

            <TextInput 
                  style={{height: 40, borderColor: 'gray', borderWidth: 1,width:250,alignSelf:'center'}}
                    placeholder='Search Here'
                    onChangeText={search}
                ></TextInput>
                 
                {
                    products.map(product => {
                        return (

                            <View key={product.id}>
                                <Card>
                                    <TouchableOpacity onPress={() => navigation.navigate("Product Detail", { item: product })}>
                                        <Image
                                            source={{ uri:product.imageURL }}
                                            style={{ width: 100, height: 100,alignSelf:'center' }}
                                        />
                                        <Text style={{alignSelf:'center'}}>{product.name}</Text>
                                    </TouchableOpacity>
                                </Card>
                            </View>
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}