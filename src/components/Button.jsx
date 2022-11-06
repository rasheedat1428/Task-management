import React from 'react'
import PropTypes from "prop-types";

const Button = ({color, label, onClick}) => {
  return (
    <Button 
        className="btn"
        style={{ backgroundColor: color }}
        onClick = {onClick} >
            {label}
    </Button>
  );
};

Button.defaultProps = {
    color: "lightgreen",
    label: "Add",
};

Button.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
  };
  
export default Button