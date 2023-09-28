import { StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

const HEADER_BACKGROUND = "#eee";
const CONTENT_BACKGROUND = "#f9f9f9";

export const styles = StyleSheet.create({
  topSafeArea: {
    backgroundColor: HEADER_BACKGROUND,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    backgroundColor: '#eee',
    marginTop: 10
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
  },
  Buttons: {
    backgroundColor: '#00CED1',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    alignContent: "center",
    marginLeft: 60

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: "center"
  },
  btnColor: {
    padding: 10,
    marginHorizontal: 3,
    backgroundColor: '#eee',
    marginTop: 5,
    marginVertical: 5,
  },
  card: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    shadowColor: '#00CED1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#00CED1',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%"
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'space-between',
    justifyContent: 'space-between',

    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  textContainer: {
    marginLeft: 16,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  phoneText: {
    fontSize: 16,
    color: '#999',
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor:
      Platform.OS === "ios" ? CONTENT_BACKGROUND : HEADER_BACKGROUND,
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: HEADER_BACKGROUND,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
  },
  content: {
    padding: 20,
    backgroundColor: CONTENT_BACKGROUND,
  },
  formGroup: {
    marginBottom: 10,
  },
  label: {
    color: "#7d7e79",
    fontSize: 16,
    lineHeight: 30,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#e3e3e3",
    backgroundColor: "#fff",
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "#ff7675",
  },
  button: {
    marginTop: 5,
    backgroundColor: "#2980b9",
    padding: 15,
  },
  ViewsSelect: {
    marginTop: 5,
    backgroundColor: "#2980b9",
    padding: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
