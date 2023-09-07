import "../Styles/Button.css";

const Button = ({
  children = "Button",
  disabled = false,
  onClick,
  isActive = true,
  extended = false,
}) => {
  return (
    <button
      className={`m-btn ${isActive ? "active" : ""} ${
        extended ? "extended" : ""
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
