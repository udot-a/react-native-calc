import React, { useState } from "react";
import { errorWindowStyles as s} from "./styles";

import {
    Alert,
    Modal,
    Text,
    TouchableHighlight,
    View
} from "react-native";

type ErrorWindowProps = {
    error: string
}

const ErrorWindow: React.FC<ErrorWindowProps> = ({error}) => {
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={s.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={s.centeredView}>
                    <View style={s.modalView}>
                        <Text style={[s.modalText, {color: "tomato"}]}>
                            {"Ошибка"}
                        </Text>

                        <Text style={s.modalText}>
                            {error}
                        </Text>

                        <TouchableHighlight
                            style={{ ...s.openButton, backgroundColor: "tomato" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={s.textStyle}>Отменить</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ErrorWindow;

