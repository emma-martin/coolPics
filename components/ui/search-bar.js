import SearchIcon from "../icons/search-icon";
import styles from "./search-bar.module.css";
function SearchBar(props) {
  return (
    <div className={styles.searchbarContainer}>
      <div className={styles.searchbarInputContainer}>
        <label htmlFor="earch">
          <span className={styles.visuallyHidden}>Search images</span>
        </label>
        <input
          type="text"
          id="search"
          className={styles.searchInput}
          placeholder="search images"
          value={props.searchQuery}
          onChange={props.onChangeQuery}
        />
        <span className={styles.searchIcon}>
          <SearchIcon onClick={props.onChangeQuery} />
        </span>
      </div>
    </div>
  );
}
export default SearchBar;
