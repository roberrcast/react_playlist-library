import styled, { css } from "styled-components";
import {
    fluid,
    textEllipsisStyle,
    hover,
    playlistButton,
    fullWidth,
    hoverButton,
} from "../../theme/mixins";

export const DisplayWrapper = styled.article`
    width: 100%;
`;

export const DisplayInner = styled.div`
    padding: 0 ${fluid("0px", "25px", "375px", "1800px")};

    @media (max-width: 400px) {
        padding: 0px;
    }
`;

export const Showcase = styled.section`
    display: flex;
    gap: 1rem;
    padding: 0 25px;
    font-size: ${fluid("1rem", "1.5rem", "28.438rem", "87.5rem")};

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 500px) {
        padding: 0px;
    }

    @media (max-width: 400px) {
        align-items: start;
        padding: 25px;
    }
`;

export const ShowcaseMessage = styled.p`
    font-size: ${fluid("0.9rem", "2rem", "25rem", "113rem")};
    font-weight: 500;
`;

export const AlbumArt = styled.div`
    width: ${fluid("12rem", "15rem", "47.375rem", "109.091rem")};
    height: ${fluid("12rem", "15rem", "47.375rem", "109.091rem")};
`;

export const AlbumImg = styled.img`
    width: 100%;
    border-radius: ${fluid("20px", "35px", "758px", "1600px")};
    aspect-ratio: 1;
    object-fit: cover;
`;

export const Info = styled.div``;

export const InfoTitle = styled.h3`
    margin-top: 0;
    font-weight: 400;
    @media (max-width: 850px) {
        text-align: center;
    }
`;

export const InfoBand = styled.p`
    @media (max-width: 850px) {
        text-align: center;
    }
`;

export const Playlist = styled.section`
    width: 100%;
    margin-top: 4rem;

    @media (max-width: 400px) {
        width: 95%;
    }
`;

export const PlaylistMessages = styled.p`
    display: flex;
    justify-content: flex-start;
    padding: 0 25px;
    margin-top: 1rem;
    font-size: ${fluid("1rem", "1.5rem", "28.438rem", "87.5rem")};

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const PlaceHolder = styled.div``;

export const Breadcrumb = styled.section``;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr auto auto;
    align-items: center;
    margin-bottom: 3rem;
    gap: 0 2rem;

    > h4:nth-of-type(1) {
        grid-column: 2;
    }
    > h4:nth-of-type(2) {
        grid-column: 3;
    }
    > h4:nth-of-type(3) {
        grid-column: 4;
    }
    > h4:nth-of-type(4) {
        grid-column: 6;
    }

    h4 {
        @media (max-width: 700px) {
            display: none;
        }
    }

    > div:nth-of-type(even) {
        background-color: ${({ theme }) => theme.colors.sidebarBg};
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

export const GridRow = styled.div`
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / -1;
    align-items: center;
    padding: 0 ${fluid("10px", "25px", "750px", "1700px")};
    border-radius: 20px;
    ${hover};

    &:nth-of-type(even) {
        background-color: ${({ theme }) => theme.colors.sidebarBg};
    }

    @media (max-width: 700px) {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    @media (max-width: 400px) {
        justify-content: center;
    }
`;

const gridItemText = css`
    ${textEllipsisStyle};
    font-size: ${fluid("0.85rem", "1rem", "25rem", "106.25rem")};
`;

export const GridTitle = styled.p`
    ${gridItemText}
`;

export const GridArtist = styled.p`
    ${gridItemText}
`;

export const GridAlbum = styled.p`
    ${gridItemText};
    @media (max-width: 700px) {
        display: none;
    }
`;

export const GridTime = styled.p`
    ${gridItemText};
    @media (max-width: 700px) {
        display: none;
    }
`;

export const GridArt = styled.div`
    width: ${fluid("30px", "40px", "750px", "1700px")};
    display: flex;
    @media (max-width: 700px) {
        width: ${fluid("60px", "80px", "400px", "700px")};
        height: ${fluid("60px", "80px", "400px", "700px")};
    }
`;

export const GridImg = styled.img`
    aspect-ratio: 1;
    object-fit: cover;
    width: 100%;
    border-radius: 8px;
`;

export const GridBtnContainer = styled.div`
    width: 40px;
    height: 40px;
`;

export const GridBtn = styled.button`
    ${playlistButton("transparent", "none")};
    ${fullWidth};
`;

export const GridSvg = styled.svg`
    ${fullWidth};
    fill: ${({ theme, isTicked }) =>
        isTicked ? theme.colors.tick : theme.colors.icon};

    ${({ isDelete, theme }) =>
        isDelete &&
        css`
            ${hoverButton(
                theme.colors.dryRed,
                theme.colors.redHover,
                "0.2s",
                "ease-in-out",
            )};
        `}
`;

// Estos wrappers son para el view resonsivo
export const WrapperOuter = styled.div`
    display: contents;
    @media (max-width: 700px) {
        width: 80%;
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;
    }
`;

export const WrapperInner = styled.div`
    display: contents;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        width: 100px;
    }
`;

export const AlbumGrid = styled.div`
    display: grid;
    padding: 0 25px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    @media (max-width: 1320px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    @media (max-width: 400px) {
        padding: 0px;
    }
`;

export const AlbumThumb = styled.div`
    width: 300px;
    transition: transform 0.2s ease-in-out;

    @media (max-width: 1320px) {
        width: 250px;
    }
`;

export const AlbumCoverImg = styled.img`
    object-fit: cover;
    box-shadow: -1rem 0 2rem #000;
    border-radius: 8px;
    width: 350px;

    @media (max-width: 1320px) {
        width: 300px;
    }

    @media (max-width: 380px) {
        width: 100%;
        box-shadow: unset;
    }
`;

export const AlbumItem = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    transition: 0.2s;
    ${hover}

    ${({ isShifted }) => isShifted && `transform: translateX(100px);`}

&.shifted {
        transform: translateX(100px);
    }

    @media (hover: hover) {
        &:hover {
            z-index: 10;

            ${AlbumThumb} {
                transform: translateY(-1rem);
            }
        }
    }
`;

export const AlbumTitle = styled.p``;
export const AlbumYear = styled.p``;
export const AlbumArtist = styled.p``;
