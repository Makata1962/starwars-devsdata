import classes from './SearchBox.module.scss'

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`${classes[className]}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
