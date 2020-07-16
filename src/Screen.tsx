import React from 'react';
import { Text, View } from 'react-native';
import { screenStyles as s }  from "./styles";

type ScreenProps = {
    screenData: string
}

const Screen: React.FC<ScreenProps> = ({ screenData }) => {
    const currentFontSize = screenData.length > 9 && screenData.length <= 12
        ? s.nineSymbols
        : screenData.length > 12
        ? s.twelveSymbols
        : null;

    return (
        <View style={s.output}>
            <Text style={[s.text, currentFontSize]}>
                {screenData}
            </Text>
        </View>
    );
}

export default Screen;
