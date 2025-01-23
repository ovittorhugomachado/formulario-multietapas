import styled from "styled-components";
import { MediaSizes } from "../../style/media-sizes/media-sizes";

export const SideMenu = styled.div`
    width: 250px;
    height: 570px;
    padding: 40px 12px;
    border-radius: 10px;
    background-image: url("bg-sidebar-desktop.svg");
    background-size: cover;
    @media (max-width: ${MediaSizes.desktopSmall}) {
        background-image: url("/bg-sidebar-mobile.svg");
        width: 100%;
        height: 150px;
        border-radius: 0;
        position: absolute;
        padding: 0;
        top: 0;
        display: flex;
        justify-content: center;
        gap: 12px;
    }
 `