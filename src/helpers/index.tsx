import React from "react";
import {ButtonProps} from "../interfaces";
import ErrorWindow from "../ErrorWindow";

/*
Фенкция, к-я выводит кнопки калькулятора в зависимости от аргументов
 */
export const renderButtons = (
    arrayOfNames: string[],
    ButtonComponent: React.FC<ButtonProps>,
    handlers: Array<(numb: string) => void>,
    currentSign?: string,
    buffer?: string
): JSX.Element[] =>
    arrayOfNames.map((item, idx) => {
        let bcColor: "darkGrey" | "grey" | "orange" = "darkGrey";
        let currentHandler: (numb: string)=> void;

        if (item.includes("m")) {
            currentHandler = handlers[idx];
        } else {
            currentHandler = handlers[0];
        }

        if (idx === 3) {
            bcColor = "orange";
        }

        if (["*", "+", "-"].some(i => i === item)) {
            currentHandler = handlers[1];
        }
        return (
            <ButtonComponent
                key={idx}
                name={item}
                currentSign={currentSign}
                onKeyPress={currentHandler}
                buttonTheme={{color: "white", bcColor}}
                buffer={item === "mr" ? buffer : undefined}
            />
        )
    });

/*
Ф-ция, к-я выводит модальное окно если есть ошибка
 */
export const showModal = (error: string): JSX.Element | null => {
    if (error) {
        return (
            <ErrorWindow error={error}/>
        );
    } else {
        return null;
    }
}

/*
Ф-ция, к-я получает строку и возвращает ее не изменяя, если в ней целое число
или окургляет до 4 знаков после запятой, если дробное
 */
export const parseStr = (str: string): string => {
    if (!str) {
        return "0";
    }

    let numb = parseFloat(str);

    if ((numb ^ 0) === numb) {
        return str;
    }

    return numb.toFixed(4);
}

