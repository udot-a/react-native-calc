import {StyleSheet} from "react-native";
import {height} from "./appStyle";

export const calcButtonStyles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        backgroundColor: "#696969",
        minHeight: 0.09 * height,
        minWidth: 0.09 * height,
        borderRadius: 0.09 * height/2

    },

    wideButton: {
        minWidth: 0.21 * height,
        alignItems: "flex-start"
    },

    lefMargin: {
        marginLeft: 0.02 * height
    },

    text: {
        color: "white",
        fontSize: 0.06 * height,
        marginBottom: 5
    },

    darkGrey: {
        backgroundColor: "#696969"
    },

    grey: {
        backgroundColor: "#D3D3D3"
    },

    orange: {
        backgroundColor: "#FF8C00"
    },

    antiqueWhite: {
      backgroundColor: "#FAEBD7"
    },

    lightOrange: {
        backgroundColor: "#FFE4B5"
    },

    black: {
        color: "black"
    },

    white: {
        color: "white"
    },
});
