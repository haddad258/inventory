/* This file has been downloaded from rnexamples.com */
/* If You want to help us please go here https://www.rnexamples.com/help-us */
import React, {  useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  FlatList,
} from 'react-native'
import { LocalManagement } from '../src/Store/index'
import axios from 'axios'

function ListWithSearchView(){
  const [data,setdata]=useState([])

  const [results, setResults] = useState(data)
  const [query, setQuery] = useState()
  useEffect(() => {
    getlistContact()

}, [])
const getlistContact = async () => {

    var listzone = await LocalManagement.getListZones()
    setResults(listzone)
    console.log(listzone[0])

}
  const showAlert = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId)

    console.log(query)
    axios.post("http://"+query?.name_address+":3000/getallist",results).then((response)=>{
        console.log(response.data)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <View style={styles.inputContainer}>
          {/* <Image
            style={[styles.icon, styles.inputIcon]}
            source={{ uri: 'https://img.icons8.com/color/70/000000/search.png' }}
          /> */}
          <TextInput
            style={styles.inputs}
            placeholder="Ip server"
            underlineColorAndroid="transparent"
            onChangeText={name_address => setQuery({ name_address })}
          />
        </View>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => showAlert('search')}>
          <Image
            style={[styles.icon, styles.iconBtnSearch]}
            source={{ uri: 'https://i.ibb.co/gJFmytx/images.png' }}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.notificationList}
        enableEmptySections={true}
        data={results}
        renderItem={({ item }) => {
          return (
            <View style={{backgroundColor:'#ffff' ,marginTop:10}}>
            <View style={styles.notificationBox}>
              <Text style={styles.description}>{item.codeLocal}</Text>
              <Text style={styles.description}>{item.occupant}</Text>
            </View>
           
           </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  saveButton: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 70,
    alignSelf: 'flex-end',
    backgroundColor: '#40E0D0',
    borderRadius: 30,
  },
  saveButtonText: {
    color: 'white',
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  notificationBox: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent:"space-between"
  },
  image: {
    width: 45,
    height: 45,
  },
  description: {
    fontSize: 18,
    color: '#3498db',
    marginLeft: 10,
  },
})
export default ListWithSearchView