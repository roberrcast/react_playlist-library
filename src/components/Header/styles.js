import styled from "styled-components";
import { fluid } from "../../theme/mixins";

export const HeaderWrapper = styled.header`
    margin-bottom: 4rem;
`;

export const HeaderTitle = styled.h1`
    font-weight: ${({ theme }) => theme.font.weights.global};
    padding: 0 25px;
    font-size: ${fluid("1.5rem", "2.5rem", "28.409rem", "109.091rem")};
`;

export const MenuWrapper = styled.div``;

export const Menu = styled.menu`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: ${fluid("3rem", "25rem", "25rem", "109.091rem")};
`;

export const ListItem = styled.li`
    list-style: none;
    font-weight: 400;
`;
