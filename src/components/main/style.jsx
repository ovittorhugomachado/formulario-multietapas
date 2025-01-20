import styled from "styled-components";

export const Container = styled.main`
    width: 875px;
    height: 600px;
    background-color: #fff;
    border-radius: 12px;
    padding: 15px 30px 15px 15px;
    position: relative;
    display: flex;
    align-items: center;
    margin: 40px
    `

export const Buttons = styled.div`
    height: 50px;
    width: 55%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 35px;
    right: 80px
    `

export const ButtonNext = styled.button`
    width:150px;
    height:50px;
    background-color: hsl(213, 96%, 18%);
    cursor: pointer;
    &:hover {
        background-color: hsl(213, 96%, 28%);
        };
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    border-radius: 7px;
    border: none;
    `

        export const ButtonBack = styled.button`
    width:150px;
    height:50px;
    cursor: pointer;
    &:hover {
        color: hsl(0, 0.00%, 34.10%);
        };
    color: #000;
    font-weight: 700;
    font-size: 16px;
    border-radius: 7px;
    border: none;
    `