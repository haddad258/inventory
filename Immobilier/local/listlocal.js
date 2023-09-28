/* This file has been downloaded from rnexamples.com */
/* If You want to help us please go here https://www.rnexamples.com/help-us */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { LocalManagement } from '../Store/index'




function ListLocal() {
    const [searchText, setSearchText] = useState('');
    const [filteredContacts, setFilteredContacts] = useState([])

    const handleSearch = (text) => {
        setSearchText(text);
    }
    useEffect(() => {
        getlistContact()

    }, [])
    const getlistContact = async () => {

        var listzone = await LocalManagement.getListZones()
        setFilteredContacts(listzone)
        console.log(listzone[0])

    }
    const DeleteZones = async (text) => {

        var listzone = await LocalManagement.deleteZone(text)
        getlistContact()
        console.log(listzone)
  
     }
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
            <View style={styles.cardBody}>
                <View style={styles.cardFooter}>

                    <Text style={styles.price}>{item.codeLocal}</Text>
                    <TouchableOpacity onPress={() => DeleteZones(item)} >

                        <Image style={styles.images} source={{ uri: "https://i.ibb.co/w4KzXj6/delete.jpg" }} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.address}>{item.local}</Text>
                <Text style={styles.parking}>{item.site} </Text>
                <Text style={styles.squareMeters}>{item.occupant}</Text>
            </View>
            <View style={styles.cardFooter}>
                <Text style={styles.beds}>{item?.location.code} </Text>
                <Text style={styles.baths}>{item?.location.location} </Text>
            </View>
        </TouchableOpacity>
    );



    return (
        <View style={styles.container}>
            <View style={styles.searchInputContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search properties..."
                    onChangeText={handleSearch}
                    value={searchText}
                />
            </View>
            <FlatList
                contentContainerStyle={styles.ListLocalContainer}
                data={filteredContacts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: "#eee"
    },
    searchInputContainer: {
        paddingHorizontal: 20,
    },
    searchInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    ListLocalContainer: {
        paddingHorizontal: 20,
    },
    images: {
        width: 30,
        height: 30,
        borderRadius: 24,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    image: {
        height: 150,
        marginBottom: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    cardBody: {
        marginBottom: 10,
        padding: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    address: {
        fontSize: 16,
        marginBottom: 5
    },
    squareMeters: {
        fontSize: 14,
        marginBottom: 5,
        color: '#666'
    },
    cardFooter: {
        padding: 10,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dcdcdc',
        justifyContent: 'space-between',
    },
    beds: {
        fontSize: 14,
        color: '#ffa500',
        fontWeight: 'bold'
    },
    baths: {
        fontSize: 14,
        color: '#ffa500',
        fontWeight: 'bold'
    },
    parking: {
        fontSize: 14,
        color: '#ffa500',
        fontWeight: 'bold'
    }
});

export default ListLocal