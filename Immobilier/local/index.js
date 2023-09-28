/* This file has been downloaded from rnexamples.com */
/* If You want to help us please go here https://www.rnexamples.com/help-us */
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import { ZonesManagement, LocationsManagement ,LocalManagement } from "../Store"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { validationSchema } from "./validation";
import { styles } from "./styles";
import FormField from "./FormField";
function LocalList() {
    const [contacts, setContacts] = useState([])
    const [searchText, setSearchText] = useState('')
    const [filteredContacts, setFilteredContacts] = useState(contacts)
    const [listLocation, setlistLocation] = useState(contacts)
    const [Newlocal, setnewlocal] = useState({})

    const handleSearch = text => {
        setSearchText(text)
    }
    const onSubmit = async (text) => {

        console.log(Newlocal)

    }
    const onSubmitHandler = async (values) => {
        console.log(values)
        console.log(Newlocal)
        var newsv= {...values,...Newlocal}
        var newlocal = await LocalManagement.CreateZones(newsv)
        if(newlocal){
            alert("Done")
        }

    }

    function isFormValid(isValid, touched) {
        return isValid && Object.keys(touched).length !== 0;
    }

    const getlistContact = async () => {

        var listzone = await ZonesManagement.getListZones()
        setFilteredContacts(listzone)
        console.log(listzone)

    }
    const getlistLocation = async () => {

        var listzone = await LocationsManagement.getListZones()
        setlistLocation(listzone)
        console.log(listzone)

    }
    const handlechage = async (e, v) => {

        setnewlocal({ ...Newlocal, [e]: v });


    }

    useEffect(() => {
        getlistContact();
        getlistLocation();

    }, [])



    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={[styles.button, { backgroundColor: "#7f7f82" }]}   >
                <Text style={styles.buttonText}>Site</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.ViewsSelect, { backgroundColor: "#7f7f82" }]}>
                <Text style={styles.buttonText}>Select code comptable</Text>
            </TouchableOpacity>
            <FlatList
                data={filteredContacts}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity
                        key={item}
                        style={[styles.btnColor, { backgroundColor: item === Newlocal.site ? "#00CED1" : "#eee" }]}
                        onPress={() => handlechage("site", item)}>
                        <Text>{item}</Text>
                    </TouchableOpacity>

                )}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity style={[styles.ViewsSelect, { backgroundColor: "#7f7f82" }]}>
                <Text style={styles.buttonText}>Select code system</Text>
            </TouchableOpacity>
            <FlatList
                data={listLocation}
                horizontal
                renderItem={({ item }) => (

                    <TouchableOpacity
                        key={item}
                        style={[styles.btnColor, { backgroundColor: ((Newlocal?.location?.code === item?.code) && (Newlocal?.location?.location === item?.location)) ? "#00CED1" : "#eee" }]}
                        onPress={() => handlechage("location", item)}>
                        <Text>{item.location}</Text>
                        <Text>{item.code}</Text>
                    </TouchableOpacity>

                )}
                keyExtractor={item => item}
            />


            <StatusBar style="light" />

            <SafeAreaView >


                {/* https://github.com/APSL/react-native-keyboard-aware-scroll-view */}
                <KeyboardAwareScrollView
                    style={styles.content}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                //   extraScrollHeight={150}
                >
                    {/* https://formik.org/docs/overview */}
                    <Formik
                        initialValues={{
                            local: "",
                            codeLocal: "",
                            occupant: "",

                        }}
                        onSubmit={onSubmitHandler}
                        validationSchema={validationSchema}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                            isValid,
                        }) => (
                            <>
                              
                                <FormField
                                    field="codeLocal"
                                    label="code Categorie"
                                    autoCapitalize="words"
                                    values={values}
                                    touched={touched}
                                    errors={errors}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />

                                <FormField
                                    field="occupant"
                                    label="Design"
                                    values={values}
                                    touched={touched}
                                    errors={errors}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />




                                <TouchableOpacity
                                    onPress={handleSubmit}
                                >
                                    <View
                                        style={[
                                            styles.button,
                                            {
                                                opacity: isFormValid(isValid, touched) ? 1 : 0.5,
                                            },
                                        ]}
                                    >
                                        <Text style={styles.buttonText}>SUBMIT</Text>
                                    </View>
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>
                </KeyboardAwareScrollView>
            </SafeAreaView>
            <View style={styles.card}>

               
            </View>
        </ScrollView>
    )
}


export default LocalList 