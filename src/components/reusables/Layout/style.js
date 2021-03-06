import styled from "styled-components";

export const Content = styled.div`
    position: absolute;
    box-sizing: border-box;
    top: 58px;
    left: 0;
    right: 0;
    padding: 24px;
    background-color: #f6f5fd;
    min-height: calc(100% - 58px);
    display: grid;
    align-items: start;
    gap: 35px;

    @media (min-width: 768px) {
        top: 0;
        left: 260px;
        min-height: 100%;
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
