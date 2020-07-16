import React from 'react';
import {TouchableOpacity, Text } from 'react-native';
import { calcButtonStyles as s }  from "./styles";
import {ButtonProps } from "./interfaces";

const CalcButton: React.FC<ButtonProps> = ({
    name ,
    onKeyPress,
    buttonTheme,
    isWide ,
    currentSign,
    buffer
}) => {
    const {color, bcColor} = buttonTheme;

    let isBuffer = false;

    if (buffer !== "0" && buffer !== undefined) {
        isBuffer = true;
    }

    return (
        <TouchableOpacity
            onPress={() => onKeyPress(name)}
            style={[
                s.container,
                s[bcColor],
                isWide && s.wideButton,
                name === currentSign && s.lightOrange,
                isBuffer && s.antiqueWhite
            ]}
        >
            <Text
                style={[
                    s.text,
                    s[color],
                    isWide && s.lefMargin,
                    name === currentSign && s.black,
                    isBuffer && s.black
                ]}
            >
                {name}
            </Text>
        </TouchableOpacity>
    );
}

export default CalcButton;
