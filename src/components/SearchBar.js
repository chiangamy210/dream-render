import react, { useState } from "react";
import { Input, Radio } from "antd";

import { SEARCH_KEY } from "../constant";

const { Search } = Input;

function SearchBar(props) {
  const [searchType, setSearchType] = useState(SEARCH_KEY);
  const [error, setError] = useState("");

  const changeSearchType = (e) => {
    const searchType = e.target.value;
    setSearchType(searchType);
    setError("");
    if (searchType === SEARCH_KEY.all) {
      props.handleSearch({ type: searchType, keyword: "" });
    }
  };

  const handleSearch = (value) => {
    if (searchType !== SEARCH_KEY.all && value === "") {
      setError("Please enter a keyword to search");
      return;
    }
    setError("");
    props.handleSearch({ type: searchType, keyword: value });
  };
  return (
    <div className="search-bar">
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
        disabled={searchType === SEARCH_KEY.all}
      />
      <p className="error-msg">{error}</p>

      <Radio.Group
        onChange={changeSearchType}
        value={searchType}
        className="search-type-group">
        <Radio value={SEARCH_KEY.all}>All</Radio>
        <Radio value={SEARCH_KEY.keyword}>Keyword</Radio>
        <Radio value={SEARCH_KEY.user}>User</Radio>
      </Radio.Group>
    </div>
  );
}
export default SearchBar;
