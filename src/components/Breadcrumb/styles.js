import styled, { css } from "styled-components";
import { fluid } from "../../theme/mixins";

export const BreadcrumbNav = styled.nav`
    padding: 30px 25px 0 25px;
`;

export const BreadcrumbItem = styled.span`
    font-weight: 600;
    transition: color 0.2s ease-in-out;
    font-size: ${fluid(".8rem", "1rem", "24rem", "113rem")};

    /* Manejamos el estado activo con un prop */
    ${({ active }) =>
        !active &&
        css`
            @media (hover: hover) {
                &:hover {
                    cursor: pointer;
                    color: ${({ theme }) => theme.colors.coolBlue};
                }
            }
        `}

    ${({ active }) =>
        active &&
        css`
            font-weight: unset;

            &:hover {
                color: inherit;
                cursor: default;
            }
        `}
`;

//Para el separador del breadcrumb
export const BreadcrumbSeparator = styled.span`
    margin: 0 0.5rem;
`;
