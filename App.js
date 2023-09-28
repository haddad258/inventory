import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  BackHandler,
  TouchableOpacity,
  Image
} from "react-native";
import { Text, ListItem } from "react-native-elements";
import Constants from "expo-constants";
import { EXAMPLE_LIST } from "./example-list";
import { Provider } from 'react-redux';
// import store from "./store/store";
export default function App() {
  const [exampleIndex, setExampleIndex] = useState(null);

  // Handle when user press Hardware Back Button
  useEffect(() => {
    const backAction = () => {
      // Go back to Example List
      if (exampleIndex !== null) {
        setExampleIndex(null);
      } 
      // Exit app if user currently in Example List
      else {
        BackHandler.exitApp();
      }

      return true;
    };

    // https://reactnative.dev/docs/backhandler
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [exampleIndex]);

  if (exampleIndex !== null) return EXAMPLE_LIST[exampleIndex].component;

  return (
    <SafeAreaView style={styles.container}>
      <Text h4 style={styles.heading}>
        Inventaire Mobile App
      </Text>
      <View style={styles.containerT}>
      <TouchableOpacity onPress={() => setExampleIndex(15)} style={styles.menuBox}>
        <Image
          style={styles.icon}
          source={{ uri: 'https://img.icons8.com/color/70/000000/cottage.png' }}
        />
        <Text style={styles.info}>Site</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setExampleIndex(16)} style={styles.menuBox}>
        <Image
          style={styles.icon}
          source={{ uri: 'https://i.ibb.co/WWskszs/emplacemen.png' }}
        />
        <Text style={styles.info}>Location</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setExampleIndex(17)} style={styles.menuBox}>
        <Image
          style={styles.icon}
          source={{ uri: 'https://i.ibb.co/hM9d10k/warhouse.jpg' }}
        />
        <Text style={styles.info}>Add</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setExampleIndex(18)} style={styles.menuBox}>
        <Image
          style={styles.icon}
          source={{ uri: 'https://i.ibb.co/Wvs30F7/listicons.png' }}
        />
        <Text style={styles.info}> Locals</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setExampleIndex(19)} style={styles.menuBox}>
        <Image
          style={styles.icon}
          source={{ uri: 'https://i.ibb.co/C7LNRST/codecomptable.webp' }}
        />
        <Text style={styles.info}>code</Text>
        <Text style={styles.info}>Comptable</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setExampleIndex(20)} style={styles.menuBox}>
        <Image
          style={styles.icon}
          source={{ uri: 'https://i.ibb.co/WczTZYs/tags.png' }}
        />
        <Text style={styles.info}>Code</Text>
        <Text style={styles.info}>SYSTEM</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setExampleIndex(21)} style={styles.menuBox}>
        <Image
          style={styles.icon}
          source={{ uri: 'https://i.ibb.co/c3qmn4c/immobile.jpg' }}
        />
        <Text style={styles.info}>Add</Text>
        <Text style={styles.info}>Item</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setExampleIndex(22)} style={styles.menuBox}>
        <Image
          style={styles.icon}
          source={{ uri: 'https://i.ibb.co/C5hQyyk/newlis.webp' }}
        />
        <Text style={styles.info}>New</Text>
        <Text style={styles.info}>Liste</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setExampleIndex(24)} style={styles.menuBox}>
        <Image
          style={styles.icon}
          source={{ uri: 'https://i.ibb.co/q1TspqD/sync.png' }}
        />
        <Text style={styles.info}>Sync</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setExampleIndex(23)} style={styles.menuBox}>
        <Image
          style={styles.icon}
          source={{ uri: 'https://i.ibb.co/q1TspqD/sync.png' }}
        />
        <Text style={styles.info}>Sync</Text>
        <Text style={styles.info}>Immobilier</Text>
      </TouchableOpacity>
    </View>
      <ScrollView>
        {/* {EXAMPLE_LIST.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={() => setExampleIndex(i)}>
            <View>
              <Text>Level {l.level}</Text>
            </View>

            <ListItem.Content>
              <ListItem.Title style={styles.title}>{l.name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))} */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    textAlign: "center",
    padding: 12,
  },
  title: {
    fontWeight: "bold",
  },
  containerT: {
    paddingTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  menuBox: {
    backgroundColor: '#DCDCDC',
    width: 100,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
  },
  icon: {
    width: 60,
    height: 60,
  },
  info: {
    fontSize: 16,
    color: '#696969',
  },
});
