import styled from "styled-components";
import { hover } from "../../theme/mixins";

//Usamos ("search") porque hay un bug en styled components que no reconoce este nuevo tag
export const SearchWrapper = styled("search")`
    display: block;
    width: 60%;
    margin: 0 auto;
`;

export const SearchForm = styled.form`
    display: flex;
    gap: 5px;
`;

export const SearchInput = styled.input`
    width: 100%;
    border-radius: 35px;
    border: 3px solid ${({ theme }) => theme.colors.searchIcon};
    padding: 1rem;
    color: ${({ theme }) => theme.colors.primaryFont};
    background-color: ${({ theme }) => theme.colors.inputBg};
    transition:
        box-shadow 0.2s ease-in-out,
        border 0.2s ease-in-out;

    &::placeholder {
        color: ${({ theme }) => theme.colors.searchIcon};
        font-family: ${({ theme }) => theme.font.primary};
    }

    &:focus {
        outline: none;
        border: 3px solid transparent;
        box-shadow: 0 0 10px 3px ${({ theme }) => theme.colors.coolBlue};
    }
`;

export const SearchButton = styled.button`
    border: none;
    color: ${({ theme }) => theme.colors.searchIcon};
    background-color: transparent;
    ${hover};
    font-size: 2rem;
    font-weight: 400;
`;
