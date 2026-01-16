import { css } from "styled-component";

// una función auxiliar para generar un clamp() en CSS para fluidamente escalar valores
// @param {string} min - el valor mínimo (p.ej., '0.7rem').
// @param {string} pref - el valor preferido (p.ej., 1rem) .
// @param {string} max - el valor máximo (p.ej., 22rem).
// @returns {string} una función clamp() CSS.

//Funciones no exportadas para uso interno
const parseUnit = (value) => {
    const match = String(value).match(/(-?[\d.]+)([a-z%]*)/);
    if (!match) return { val: parseFloat(value), unit: "" };
    return { val: parseFloat(match[1]), unit: match[2] };
};

const fluid = (minSize, maxSize, minBreakpoint, maxBreakpoint) => {
    const { val: minSizeVal, unit: sizeUnit } = parseUnit(minSize);
    const { val: maxSizeVal } = parseUnit(maxSize);
    const { val: minBreakpointVal } = parseUnit(minBreakpoint);
    const { val: maxBreakpoint } = parseUnit(maxBreakpoint);

    const slope =
        (maxSizeVal - minSizeVal) / (maxBreakPointVal - minBreakPointVal);
    const intercept = minSizeVal - slope * minBreakpointVal;

    const preferredValue = `${(slope * 100).toFixed(4)}vw + ${intercept.toFixed(4)}${sizeUnit}`;

    return `clamp(${minSize}, ${preferredValue}, ${maxSize})`;
};

// --Funciones y mixins exportados--

//Mixin para el focus con efecto glow para el search bar
export const focusGlow = css`
    &:focus {
        outline: none;
        box-shadow: 0 0 10px 3px ${({ theme }) => theme.colors.searchBarFocus};
    }
`;

//Mixin para el hover del cursor
export const hover = css`
    @media (hover: hover) {
        &:hover {
            cursor: pointer;
        }
    }
`;

//Mixin para el text-hover
export const hoverText = (
    fontWeight = 500,
    scale = 1,
    transitionTime = "0.2s",
    transitionAnimation = "ease-in-out",
) => css`
transition: ${transitionTime} ${transitionAnimation};

@media (hover: hover) {
&:hover {
cursor: pointer,
font-weight: ${fontWeight};
transform: scale(${scale});
}
}
`;

//Mixin para el estilo hover del button
export const hoverButton = (
    fill,
    fillHover,
    transitionDuration = "0.2s",
    animation = "ease-in-out",
) => css`
    fill: ${fill};
    transition: fill ${transitionDuration} ${animation};

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            fill: ${fillHover};
        }
    }
`;

//Mixin para full-w y full-h de un elemento
export const fullWidth = css`
    width: 100%;
    height: 100%;
`;

//Mixin para botones del playlist
export const playlistButton = (background, border) => css`
    background: ${background};
    border: ${border};
    ${hover};
`;

//Mixin para la elipsis del texto
export const textEllipsisStyle = css`
    font-size: ${fluid("0.7rem", "1rem", "22.265rem", "109.091rem")};
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;

//Mixin para el grid layout
export const gridLayout = (display, padd1, padd2) => css`
    display: ${display};
    padding: ${padd1} ${padd2};
    box-sizing: border-box;
`;

//Mixin para el estilo básico de texto
export const textStyle = (width, textAlign) => css`
    width: ${width};
    text-align: ${textAlign};
`;
