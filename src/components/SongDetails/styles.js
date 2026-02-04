import styled from "styled-components";
import { fluid, textStyle } from "../../theme/mixins";

export const DetailsSection = styled.section`
    box-sizing: border-box;
    padding: 0 ${fluid("0px", "25px", "375px", "1800px")};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
`;

export const Genre = styled.p`
    ${textStyle("100%", "left")};
    margin-top: 1rem;

    span {
        font-weight: 500;
    }
`;

export const Description = styled.p`
    ${textStyle("100%", "left")};
    line-height: 1.5rem;
    font-size: ${fluid("0.9rem", "1rem", "28rem", "113rem")};
`;

export const MusicVideo = styled.iframe`
    width: ${fluid("300px", "900px", "460px", "1800px")};
    height: ${fluid("150px", "750px", "460px", "1800px")};
`;
