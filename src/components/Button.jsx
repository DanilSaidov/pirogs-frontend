import React from "react";
import classNames from "classnames"; // библиоткека классов от props
// class Button extends React.Component {
//   componentDidMount() {
//     // компонент отобразился
//   }
//   componentDidUpdate() {
//     //   компонент обновилс
//   }
//   render() {
//    <button
//   className={classNames("button", {
//     "button--outline": props.outline,
//   })}>
//   {props.children}
// </button>
//   }
// }
// деструктуризация
const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}>
      {children}
    </button>
  );
};
export default Button;
