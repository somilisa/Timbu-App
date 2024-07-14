import PropTypes from "prop-types";
const IconButton = ({ children }) => {
  return <button className="icon-button">{children}</button>;
};

export default IconButton;
IconButton.propTypes = {
  children: PropTypes.any,
};
