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
   * This is message for show
   */
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
