import { Colors } from "../../utils/Colors";

type ButtonProps = {
  children?: React.ReactNode;
  color: string;
  textColor?: string;
  text: string,
  width: number | string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export default function Button({
  color,
  textColor,
  width,
  text,
  onClick,
  children,
  disabled
}: ButtonProps) {
  return (
    <button
      className="button"
      style={{ ...styles.button, backgroundColor: color, width }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}

      <span style={{ ...styles.buttonSpan, color: textColor }}>{text}</span>
    </button>
  );
}

Button.defaultProps = {
  color: Colors.primary,
  textColor: Colors.white,
  children: null,
  width: 100,
};

const styles = {
  button: {
    borderRadius: 4,
    paddingInline: 16,
    paddingBlock: 8,
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    cursor: "pointer",
  },

  buttonSpan: {
    color: "white",
    fontSize: 16,
    fontFamily: "PoppinsMedium",
  },
};
