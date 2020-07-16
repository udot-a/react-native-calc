import {StyleSheet} from "react-native";

export const errorWindowStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    modalView: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        backgroundColor: "#696969",
        borderRadius: 20,
        borderColor: "tomato",
        borderWidth: 1,
        padding: 35,
        shadowColor: "#2F4F4F",
        shadowOffset: {
            width: 0,
            height: 2
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
