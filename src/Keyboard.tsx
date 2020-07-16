import React from 'react';
import { View } from 'react-native';
import { keyboardStyles as s }  from "./styles";
import CalcButton from "./CalcButton";
import {renderButtons} from "./helpers";

type KeyboardProps = {
    reset(): void,
    onSignPress(): void,
    onNumberPress(numb: string): void,
    onActionPress(numb: string): void,
    onPercentPress(): void,
    onDotPress(): void,
    onEqualPress(): void,
    onMemoClearPress(): void,
    onMemoPlusPress(): void,
    onMemoMinusPress(): void,
    onMemoRenderPress(): void,
    currentSign?: string,
    buffer?: string
}

const Keyboard: React.FC<KeyboardProps> = ({
    currentSign,
    reset,
    onSignPress,
    onNumberPress,
    onPercentPress,
    onActionPress,
    onDotPress,
    onEqualPress,
    onMemoClearPress,
    onMemoPlusPress,
    onMemoMinusPress,
    onMemoRenderPress,
    buffer
}) => {

    return (
        <View style={s.container}>
            <View style={s.row}>
                <CalcButton
                    buttonTheme={{color: "black", bcColor: "grey"}}
                    name={"C"}
                    onKeyPress={reset}
                />

                <CalcButton
                    buttonTheme={{color: "black", bcColor: "grey"}}
                    name="&plusmn;"
                    onKeyPress={onSignPress}
                />

                <CalcButton
                    buttonTheme={{color: "black", bcColor: "grey"}}
                    name={"%"}
                    onKeyPress={onPercentPress}
                />

                <CalcButton
                    buttonTheme={{color: "white", bcColor: "orange"}}
                    name={"/"}
                    onKeyPress={onActionPress}
                />
            </View>

            <View style={s.row}>
                {renderButtons(
                    ["mc", "mr", "m+", "m-"],
                    CalcButton,
                    [onMemoClearPress, onMemoRenderPress, onMemoPlusPress, onMemoMinusPress],
                    currentSign,
                    buffer
                )}
            </View>

            <View style={s.row}>
                {renderButtons(["7", "8", "9", "*"], CalcButton,[onNumberPress, onActionPress], currentSign)}
            </View>

            <View style={s.row}>
                {renderButtons(["4", "5", "6", "-"], CalcButton, [onNumberPress, onActionPress], currentSign)}
            </View>

            <View style={s.row}>
                {renderButtons(["1", "2", "3", "+"], CalcButton,[onNumberPress, onActionPress], currentSign)}
            </View>

            <View style={s.row}>
                <CalcButton
                    buttonTheme={{color: "white", bcColor: "darkGrey"}}
                    isWide={true}
                    name={"0"}
                    onKeyPress={onNumberPress}
                />

                <CalcButton
                    buttonTheme={{color: "white", bcColor: "darkGrey"}}
                    name={"."}
                    onKeyPress={onDotPress}
                />

                <CalcButton
                    buttonTheme={{color: "white", bcColor: "orange"}}
                    name={"="}
                    onKeyPress={onEqualPress}
                />
            </View>
        </View>
    );
}

export default Keyboard;
