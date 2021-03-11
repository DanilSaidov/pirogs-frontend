import React from "react";
import { PropTypes } from "prop-types";
// class Catigories extends React.Component {
//   state = {
//     activeItem: 3,
//   };
//   onSelectItem = (idx) => {
//     this.setState({
//       activeItem: idx,
//     });
//   };
//   render() {
//     const { items } = this.props;
//     return (
//       <div className='categories'>
//         <ul>
//           <li className='active'>Все</li>
//           {items.map((item, idx) => (
//             <li
//               className={this.state.activeItem === idx ? "active" : ""}
//               onClick={() => {
//                 this.onSelectItem(idx);
//               }}
//               key={`${item}_ ${idx}`}>
//               {" "}
//               {item}{" "}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

function Catigories({ activeCategory, items, onClickCategory }) {
  return (
    <div className='categories'>
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => {
            onClickCategory(null);
          }}>
          Все
        </li>
        {items &&
          items.map((item, idx) => (
            <li
              className={activeCategory === item._id ? "active" : ""}
              onClick={() => {
                onClickCategory(item._id);
              }}
              key={`${item._id}_ ${idx}`}>
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
Catigories.propTypes = {
  activeCategory: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(null),
  ]),
  items: PropTypes.arrayOf(PropTypes.object),
  onClickCategory: PropTypes.func,
};
Catigories.defaultProps = {
  activeCategory: null,
  items: [],
};
export default Catigories;
