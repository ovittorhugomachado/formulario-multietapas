import styled from "styled-components";

export const ContainerStep = styled.div`
    width: 50%;
    height: 320px;
    background-color: transparent;
    position: absolute;
    top: 75px;
    right: 80px;
     @media (max-width: 800px) {
        background-color: #fff;
        padding: 40px 30px;
        width: 80%;
        height: 450px;
        position: absolute;
        top: 100px;
        right: 50%;
        transform: translateX(50%);
        border-radius: 10px;
        text-align: center;     
    };
    @media (max-width: 565px) {
        padding-top: 30px;
        
    };
    @media (max-width: 400px) {
        height: 450px;
        width: 90%;   
        padding: 40px 15px 
    }
`

export const Title = styled.h1`
    color: hsl(213, 96%, 18%);
     
`

export const SubTitle = styled.h2`
    color: hsl(0, 0.80%, 50.60%);
    font-size: 16px;
    font-weight: 400;
    margin: 5px 0 45px;
    @media (max-width: 800px) {
        margin: 20px;
    };
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
        border-color: hsl(213, 96%, 18%);
        background-color: hsl(212, 100.00%, 89.90%);
        };
     @media (max-width: 800px) {
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

export const AdditionalName = styled.h4`
    font-size: 18px;
    color: hsl(213, 96%, 18%);
    @media (max-width: 400px) {
        text-align: start;  
        font-size: 16px;  
    }
`

export const NameDescription = styled.h4`
    font-size: 18px;
    color: hsl(0, 0.80%, 50.60%);
    font-size: 16px;
    font-weight: 400;
    @media (max-width: 400px) {
        text-align: start;  
        font-size: 15px;  
    }
`

export const PriceAdditional = styled.h5`
    margin-right: 27px;
    font-size: 16px;
    color: #6d64bf;
    @media (max-width: 450px) {
        margin-right: 14px;
    };
    
`