import styled from "styled-components";
import { MediaSizes } from "../../style/media-sizes/media-sizes";

export const Container = styled.main`
    width: 875px;
    min-height: 600px;
    background-color: #fff;
    border-radius: 12px;
    padding: 15px 30px 15px 15px;
    position: relative;
    display: flex;
    align-items: center;
    margin: 40px;
    @media (max-width: ${MediaSizes.desktopSmall}) {
        width: 100%;
        height: 100%;
        background-color: var(--background-body);
        margin: 0;
        border-radius: 0;
        padding: 0;
        justify-content: center;
    };
    @media (max-width: ${MediaSizes.desktopSmall}) {
        height: 107%
    };

    `

export const Buttons = styled.div`
    height: 80px;
    width: 55%;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 35px;
    right: 80px;
        @media (max-width: ${MediaSizes.desktopSmall}) {
            background-color: #fff;
            position: fixed;
            width: 100%;
            bottom: 0px;
            right: 0;
        }
        @media (max-width: ${MediaSizes.tablet}) {
            height: 60px;
        }
    
    `

export const ButtonNext = styled.button`
    height: 50px;
    width:150px;
    align-self: center;
    background-color: var(--primary-color);
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    border-radius: 7px;
    border: none;
        &.disable{
        display: none;
        };
        &:hover {
        opacity: 0.9;
        };
        @media (max-width: ${MediaSizes.desktopSmall}){
            margin-right: 10%;
        }
        @media (max-width: ${MediaSizes.tablet}){
            width: 100px;
            font-size: 15px;
            height: 39px
        }
    `

    export const ButtonConfirm = styled.button`
    height: 50px;
    width:150px;
    align-self: center;
    background-color: var(--purple);
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    border-radius: 7px;
    border: none;
        &.disable{
        display: none;
        };
        &:hover {
        opacity: 0.9;
        };
        @media (max-width: ${MediaSizes.desktopSmall}){
            margin-right: 10%;
        }
        @media (max-width: ${MediaSizes.tablet}){
            width: 100px;
            font-size: 15px;
            height: 39px
        }
    `    

export const ButtonBack = styled.button`
    background-color: #fff;
    cursor: pointer;
    color: #000;
    font-weight: 700;
    font-size: 16px;
    border-radius: 7px;
    border: none;
    margin-left: 50px;
        &:hover {
            opacity: 0.6;     
        }
        &.disable{
            opacity: 0;
            cursor: auto;
        };
        @media (max-width: ${MediaSizes.desktopSmall}){
            margin-left: 10%;
        }
        @media (max-width: ${MediaSizes.tablet}){
            margin-left: 10%;
            font-size: 15px
    }
    `