import PropTypes from "prop-types";
const Button = ({ color, backgroundColor, children }) => {
  return (
    <button
      style={{
        color,
        backgroundColor,
      }}
      className="primary-button"
    >
      {children}
    </button>
  );
};

export default Button;
Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.any,
};
