import React from "react";
import { PropTypes } from "prop-types";
const SortPoupup = React.memo(function ({
  items,
  activeSortType,
  activeSortOrder,
  clickSortType,
}) {
  const [poupActive, setPoupActive] = React.useState(false);
  const poupRef = React.useRef(); // актуальная ссылка на элемент
  const activeName = items.find(
    (obj) => obj.type === activeSortType && obj.order === activeSortOrder
  ).name;

  const togglePoupActive = () => {
    setPoupActive(!poupActive);
  };

  const handleClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(poupRef.current)) {
      setPoupActive(false);
    }
  };
  React.useEffect(() => {
    // применить функцию при изменении ...
    document.body.addEventListener("click", handleClick);
  }, []); // если массив пустой то при первом рендере
  const onSelectItem = (type) => {
    clickSortType(type);
    setPoupActive(false);
  };
  return (
    <div ref={poupRef} className='sort'>
      <div className='sort__label'>
        <svg
          className={poupActive ? "rotate" : ""}
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={togglePoupActive}>{activeName}</span>
      </div>
      {poupActive && (
        <div className='sort__popup'>
          <ul>
            {items &&
              items.map((item, idx) => (
                <li
                  key={`${item.type}__${idx}`}
                  onClick={() => onSelectItem(item)}
                  className={
                    activeSortType === item.type &&
                    item.order === activeSortOrder
                      ? "active"
                      : ""
                  }>
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPoupup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickSortType: PropTypes.func.isRequired,
};
SortPoupup.defaultProps = {
  items: [],
};

export default SortPoupup;
