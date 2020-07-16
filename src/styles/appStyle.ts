import {Dimensions, StyleSheet} from "react-native";

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        color: "white",
        alignItems: "center",
        justifyContent: "space-around"
    }
});
