/// <reference types="react" />
import "./myLabel.css";
export interface MyLabelProps {
    /**
     * This is message for show label
     */
    label: string;
    /**
     * This is message for show size
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * This is message for show allCaps
     */
    allCaps?: boolean;
    /**
     * This is message for show color
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * This is message for show fontColor
     */
    fontColor?: string;
    /**
     * This is message for show backgroundColor
     */
    backgroundColor: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
