import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../../redux/slices/searchSlice";
import * as Styled from "./styles";

function SearchBar({ onSearch }) {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.search);

    const [inputValue, setInputValue] = useState("");

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            dispatch(fetchSongs(inputValue));
            onSearch(inputValue);
        }
    };

    return (
        <>
            <Styled.SearchWrapper>
                <Styled.SearchForm action="" onSubmit={handleOnSubmit}>
                    <Styled.SearchInput
                        id="search"
                        type="search"
                        placeholder="Busca álbumes por artista..."
                        autoComplete={"off"}
                        value={inputValue}
                        onChange={handleOnChange}
                    />

                    <Styled.SearchButton>
                        <FaSearch />
                    </Styled.SearchButton>
                </Styled.SearchForm>
            </Styled.SearchWrapper>
        </>
    );
}

export default SearchBar;
