import React, {useState} from 'react';
import { View } from 'react-native';
import {appStyles as s} from "./src/styles";
import Screen from "./src/Screen";
import Keyboard from "./src/Keyboard";
import {parseStr, showModal} from "./src/helpers";

const App: React.FC = () => {
    const [screenData, setScreenData] = useState('0');
    const [action, setAction] = useState('');
    const [currentValue, setCurrentValue] = useState('');
    const [isNewValue, setIsNewValue] = useState(false);
    const [buffer, setBuffer] = useState("0");
    const [error, setError] = useState("");

    const reset = (): void => {
        setScreenData('0');

        setCurrentValue("");

        setAction("");
    };

    const onNumberPress = (numb: string): void => {
        if (screenData.length >= 10 && !isNewValue) {
            setError("Число не может больше 10 разрядов!");
            return;
        } else {
            setError("");
        }

        let sign = screenData[0] === "-" ? "-" : "";

        if (isNewValue) {
            sign = "";
        }

        if (screenData === "0" || screenData === "-0" || isNewValue) {
            setIsNewValue(false);
            setScreenData(sign + numb);
        } else {
            setScreenData( sign + (sign ? screenData.slice(1) : screenData) + numb);
        }
    }

    const onSignPress = (): void => {
        if (screenData[0] !== "-") {
            setScreenData(() => "-" + screenData);
        } else {
            setScreenData(() => screenData.slice(1));
        }
    }

    const onDotPress = () => {
        if (isNewValue || screenData.includes(".")) {
            return;
        }

        setScreenData(() => screenData + ".")
    }

    const onActionPress = async(sign: string) => {
        setCurrentValue(screenData);

        if (action && currentValue) {
            const result = parseStr(eval((currentValue + action + screenData).replace("--", "+")));

            setCurrentValue(result);

            setScreenData(result);
        }

        setAction(sign);

        setIsNewValue(true);
    }

    const onEqualPress = () => {
        if (!action || !currentValue) {
            return;
        }

        const result = parseStr(eval((currentValue + action + screenData).replace("--", "+")));

        setScreenData(result);

        setCurrentValue("");

        setAction("");

        setIsNewValue(true);
    }

    const onPercentPress = () => {
        if (!currentValue) {
            setScreenData(eval(screenData + "/100"));
        } else {
            setScreenData(eval(screenData + "/100*" + currentValue));
        }
    }

    const onMemoClearPress = () => {
        setBuffer("0");
    }

    const onMemoRenderPress = () => {
        setScreenData(buffer);

        setIsNewValue(true);
    }

    const onMemoPlusPress = () => {
        const result = parseStr(eval((buffer + "+" + screenData).replace("--", "+")));

        setBuffer(result);

        setIsNewValue(true);
    }

    const onMemoMinusPress = () => {
        const result = parseStr(eval((buffer + "-" + screenData).replace("--", "+")));

        setBuffer(result);

        setIsNewValue(true);
    }

    if ( screenData === "Infinity") {
        setError("Деление на ноль!");
        setScreenData("0");
    }

    return (
        <View style={s.container}>
            {
                showModal(error)
            }

            <Screen screenData={screenData}/>

            <Keyboard
                currentSign={action}
                onActionPress={onActionPress}
                onDotPress={onDotPress}
                onEqualPress={onEqualPress}
                onMemoClearPress={onMemoClearPress}
                onMemoPlusPress= {onMemoPlusPress}
                onMemoMinusPress={onMemoMinusPress}
                onMemoRenderPress={onMemoRenderPress}
                onNumberPress={onNumberPress}
                onPercentPress={onPercentPress}
                onSignPress={onSignPress}
                reset={reset}
                buffer={buffer}
            />
        </View>
    );
}

export default App;
