export interface ButtonTheme {
    color: "white" | "black";
    bcColor: "grey" | "darkGrey" | "orange";
};

export interface ButtonProps {
    currentSign?: string;
    buffer?: string,
    isWide?: boolean;
    name: string;
    onKeyPress(numb: string): void;
    buttonTheme: ButtonTheme;
};

