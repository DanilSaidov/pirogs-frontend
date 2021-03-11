import React from "react";
import classNames from "classnames"; // библиоткека классов от props
import { LoadingOutlined } from "@ant-design/icons";
const Button = ({
  onClick,
  className,
  outline,
  children,
  loading,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={classNames("button", className, {
        "button--outline": outline,
      })}>
      {children} {loading && <LoadingOutlined />}
    </button>
  );
};
export default Button;
