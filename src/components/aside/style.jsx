import styled from "styled-components";



export const SideMenu = styled.div`
    width: 250px;
    height: 100%;
    padding: 40px 12px;
    border-radius: 10px;
    background-image: url("bg-sidebar-desktop.svg");
    background-size: cover;
    @media (max-width: 800px) {
        background-image: url("/bg-sidebar-mobile.svg");
        width: 100%;
        height: 150px;
        position: absolute;
        padding: 0;
        top: 0;
        display: flex;
        justify-content: center;
        gap: 12px;
    }
 `