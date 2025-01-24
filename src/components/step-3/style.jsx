import styled from "styled-components";
import { MediaSizes } from "../../style/media-sizes/media-sizes";

export const ContainerStep = styled.div`
    width: 50%;
    background-color: transparent;
    position: absolute;
    top: 75px;
    right: 80px;
    margin-bottom: 40px;
    @media (max-width: ${MediaSizes.desktopSmall}) {
        background-color: #fff;
        padding: 40px 30px;
        width: 80%;
        height: 400px;
        position: absolute;
        top: 100px;
        right: 50%;
        transform: translateX(50%);
        border-radius: 10px;
        text-align: center;     
        };
    @media (max-width: ${MediaSizes.tablet}) {
        height: 430px;
        width: 90%;
        padding-top: 30px;

        };
    @media (max-width: ${MediaSizes.mobile}) {
        padding-left: 10px;    
        padding-right: 10px; 
    };
`

export const Title = styled.h1`
`

export const SubTitle = styled.h2`
`

export const DivAdditionals = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    flex-direction: column;
    @media (max-width: 400px) {
        height: 250px;
        width: 100%;    
    }
`

export const Additional = styled.div`
    width: 100%;
    border: 1px solid hsl(0, 1.60%, 74.90%);
    flex: 1;
    margin-bottom: 12px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.active {
        border-color: var(--primary-color);
        background-color: var(--pastel-blue);
        };
    @media (max-width: ${MediaSizes.mobile}) {
        height:      
    };
   

`

export const CheckBox = styled.input`
    width: 25px;
    height: 25px;
    margin: 30px;
    @media (max-width: 800px) {
        margin: 20px;
    };
    
`

export const DivText = styled.div`
    width: 57%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    transform: translatex(-8px);
    @media (max-width: 800px) {
        align-items: start;
    };
`

export const AdditionalName = styled.h3`
    @media (max-width: ${MediaSizes.mobile}) {
        font-size: 14px;
    };

`

export const NameDescription = styled.h4`
    font-size: 15px;
    font-weight: 400;
    @media (max-width: ${MediaSizes.mobile}) {
        font-size: 13px;
    };3

`

export const PriceAdditional = styled.h5`
    text-align: end;
    width: 150px;
    margin-right: 20px;
    @media (max-width: ${MediaSizes.mobile}){
        font-size: 14px;
    }
    
`