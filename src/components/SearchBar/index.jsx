import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../SearchBar/Searchbar.scss";

function SearchBar({ onSearch }) {
    const [inputValue, setInputValue] = useState("");

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSearch(inputValue);
        }
    };

    return (
        <>
            <search className="search">
                <form
                    action=""
                    className="search__form"
                    onSubmit={handleOnSubmit}
                >
                    <input
                        id="search"
                        type="search"
                        className="search__input"
                        placeholder="Busca álbumes por artista..."
                        autoComplete={"off"}
                        value={inputValue}
                        onChange={handleOnChange}
                    />

                    <button type="submit" className="search__button">
                        <FaSearch />
                    </button>
                </form>
            </search>
        </>
    );
}

export default SearchBar;
