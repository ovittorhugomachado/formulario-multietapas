import { createGlobalStyle } from "styled-components";
import { MediaSizes } from "../media-sizes/media-sizes";

export const Styles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "inter", sans-serif;
    font-weight: 300;
    list-style: none;
    font-style: none;
    --primary-color: hsl(213, 96%, 18%);
    --secondary-color: hsl(231, 11%, 63%);
    --purple: hsl(243, 100%, 62%);
    --pastel-blue: hsl(228, 100%, 84%);  
    --background-body: hsl(233, 20.00%, 92.20%);
    --error-color: hsl(354, 84%, 57%);
}

html {
  width: 100%;
  height: 100%;
}

body {
  margin: 0 auto;
  background-color: "var(--background-body)";
}

#root { /*temporario*/
  background-color: var(--background-body);
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
}

h1 {
color: var(--primary-color);
font-weight: 700;
     @media (max-width: ${MediaSizes.mobile}) {
        font-size: 25px ;    
    }
}

h2 {
     color: var(--secondary-color);
    font-size: 16px;
    font-weight: 400;
    margin: 5px 0 45px;
    @media (max-width: ${MediaSizes.desktopSmall}) {
        margin-bottom: 20px     
    };
     @media (max-width: ${MediaSizes.mobile}) {
        font-size: 15px ;    
    }
}

h3 {
    font-size: 18px;
    font-weight: 700;
    color: var(--primary-color);
    @media (max-width: ${MediaSizes.tablet}) {
        margin-top: 0; 
    };
}

h4 {
    font-size: 11px;
    font-weight: 400;
    color: var(--secondary-color);
}

h5{
    font-size: 16px;
    font-weight: 700;
    color: var(--purple);
}

label {
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 400;
    @media (max-width: ${MediaSizes.mobile}) {
        font-size: 15px ;    
    }
}

input {
    height: 42px;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    border-radius: 7px;
    border: 1px solid var(--secondary-color);
    padding-left: 15px;
    margin-bottom: 24px;
    &::placeholder {
        color: var(--secondary-color);
        opacity: 0.9;
    @media (max-width: ${MediaSizes.desktopSmall}) {
        margin-bottom: 14px;
        padding-left: 15px;   
       
    };
    @media (max-width: ${MediaSizes.mobile}) {
        margin-bottom: 14px;
        padding-left: 5px;    
    };
}
`