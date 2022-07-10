import React, { Component } from "react";
import PropTypes from "prop-types";
import { type } from "@testing-library/user-event/dist/type";
import Button from "@mui/material/Button";

class MyButton extends Component {
  static propTypes = {
    // property:dataType of the Prop
    onClick: PropTypes.func,
    children: PropTypes.node,
    variant: PropTypes.string,
    clasName: PropTypes.any,
    label: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    type: PropTypes.string,
    endIcon: PropTypes.string,
    startIcon: PropTypes.string,
  };

  static defaultProps = {
    className: "",
    color: "primary",
    label: "",
    size: "medium",
    variant: "contained",
    disabled: false,
    type: "button",
  };

  handleButtonClick = (event) => {
    const { onClick, disabled } = this.props;

    if (disabled) return;

    onClick && onClick({ event });
  };

  returnChildren = (label, children) => {
    if (label) return label; // Decrease, Reset
    if (children) return children; // +
  };

  render() {
    const {
      children,
      label,
      className,
      color,
      size,
      type,
      variant,
      disabled,
      startIcon,
      endIcon,
      style,
    } = this.props;

    return (
      <Button
        className={className}
        size={size}
        variant={variant}
        disabled={disabled}
        color={color}
        type={type}
        onClick={this.handleButtonClick}
        // style={this.props.style}
        style={style}
      >
        {this.returnChildren(label, children)}
      </Button>
    );
  }
}

export default MyButton;
