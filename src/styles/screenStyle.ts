import {StyleSheet} from "react-native";
import {height, width} from "./appStyle";

export const screenStyles = StyleSheet.create({
    output: {
        alignSelf: "flex-end",
    },

    text: {
        fontSize: 0.08 * height,
        fontWeight: "bold",
        includeFontPadding: true,
        color: "white",
        padding: 5
    },

    nineSymbols: {
        fontSize: 0.06* height
    },

    twelveSymbols: {
        fontSize: 0.05* height
    }

});
