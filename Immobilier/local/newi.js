/* This file has been downloaded from rnexamples.com */
/* If You want to help us please go here https://www.rnexamples.com/help-us */
import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { LocalManagement } from '../Store/index'




function App(props) {
  const [products, setProducts] = useState();
  useEffect(() => {
    getlistContact()

}, [])
const getlistContact = async () => {

    var listzone = await LocalManagement.getListZones()
    setProducts(listzone)
    console.log(listzone[0])

}
const DeleteZones = async (text) => {
    var listzone = await LocalManagement.deleteZone(text)
    getlistContact()
    console.log(listzone)

 }
 const ProductCard = ({ item, onIncrement, onDecrement }) => {
    return (
      <View style={styles.productCard}>
        {/* <Image source={{ uri: item.image }} style={styles.productImage} /> */}
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.codeLocal}</Text>
          <Text style={styles.productDescription}>{item.occupant}</Text>
          <Text style={styles.productPrice}>{item?.location?.location} -<Text style={styles.productPriceText}>{item?.location?.code}</Text></Text>
          <Text style={styles.productPrice}>{item.site} </Text>
        </View>
        <View style={styles.productAmount}>
          <TouchableOpacity style={styles.amountButton} onPress={()=>DeleteZones(item)}>
          <Image style={styles.images} source={{ uri: "https://i.ibb.co/w4KzXj6/delete.jpg" }} />
          </TouchableOpacity>
        
        </View>
      </View>
    );
  };


  const renderProductItem = ({ item }) => (
    <ProductCard item={item} onIncrement={() => handleIncrement(item)} onDecrement={() => handleDecrement(item)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        style={styles.productList}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
      />
      <TouchableOpacity onPress={() => console.log(props)}  style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop:40,
  },
  productList: {
    flex: 1,
    paddingTop: 16,
  },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    padding: 16,
    marginBottom: 16,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    marginRight: 16,
  },
  images: {
    width: 30,
    height: 30,
    borderRadius: 24,
},
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  productPriceText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#666',
  },
  productAmount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountButton: {
    width: 30,
    height: 30,
    backgroundColor: '#ffa726',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  continueButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: '#4caf50',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;