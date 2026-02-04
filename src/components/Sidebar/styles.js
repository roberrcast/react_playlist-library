import styled from "styled-components";

import { fluid, hover, hoverText } from "../../theme/mixins";

export const ToggleButton = styled.button`
    display: none;
    font-size: 1.5rem;
    background: transparent;
    color: ${({ theme }) => theme.colors.primaryFont};
    border-radius: 12px;
    padding: 0.5rem;
    border: none;
    ${hover};
`;

export const CloseButton = styled.button`
    display: none;
    position: absolute;
    top: 5px;
    right: 0;
    z-index: 1001;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.primaryFont};
    font-size: 1.3rem;
    ${hover};
`;

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.sidebarBg};
    flex-grow: 1;
    padding: 1rem;
    border-radius: 15px;
    poisition: relative;

    @media (max-width: 850px) {
        display: none;
    }
`;

export const SidebarContainer = styled.aside`
    padding: 0 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;

    //Estilos para móviles
    @media (max-width: 850px) {
        padding: 1rem;
        ${ToggleButton} {
            display: flex;
        }
    }

    @media (max-width: 500px) {
        padding: 0;
    }

    //Estilos para cuando el sidebar este abierto en móvil
    ${({ isOpen }) =>
        isOpen &&
        `
${ToggleButton} {
display: none;
}

${SidebarWrapper} {
display: block;
position: fixed;
top: 0;
left: 0;
width: 290px;
height: 100%;
z-index: 1000;
border-radius: 10px;
}

${CloseButton} {
display: block;
}
`}
`;

export const Search = styled("search")``;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    gap: 0.4rem;
`;

export const SearchInput = styled.input`
    width: 100%;
    color: ${({ theme }) => theme.colors.primaryFont};
    border: none;
    background-color: ${({ theme }) => theme.colors.inputBg};
    padding: 0.5rem;
    border-radius: 15px;

    &:focus {
        outline: none;
        border: none;
        box-shadow: 0 0 10px 3px ${({ theme }) => theme.colors.coolBlue};
    }
`;

export const SearchButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.searchIcon};
    ${hover};
`;

export const ListSection = styled.section``;

export const Title = styled.h2`
    margin: 1rem 0;
    font-weight: 200;
    font-size: ${fluid("1.2rem", "1.5rem", "22.656rem", "109.091rem")};
`;

export const PlaylistItem = styled.div`
    margin: 0.5rem 0;
    ${hoverText(200, 1.01, "0.2s ease-in-out")};
`;
