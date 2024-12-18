import PropTypes from "prop-types";

const Button = ({ label }) => {
  return (
    <button className="px-8 py-2 bg-black text-white rounded-3xl hover:bg-gray-800 transition duration-300">
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
